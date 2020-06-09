const core = require('@actions/core')
const io = require('@actions/io')
const { exec } = require('@actions/exec')
const https = require('https')

const fetchReleases = async () => {
  const version = core.getInput('version')
  const versionPath = version == 'latest' ? 'latest' : `tags/${version}`
  const url = `https://api.github.com/repos/google/jsonnet/releases/${versionPath}`

  core.info(`Fetching Jsonnet releases from ${url}`)

  let release

  try {
    release = JSON.parse(await get(url))
  } catch (error) {
    core.setFailed(
      `Failed to fetch releases from GitHub API, providing a token may help.\nError: ${error}`
    )
    return
  }

  const pattern = new RegExp(`jsonnet-bin-v[0-9.]+-linux\.tar\.gz`, 'i')

  const jsonnetAsset = release.assets.find(asset =>
    pattern.test(asset.name)
  )

  return jsonnetAsset.browser_download_url
}

const get = url => {
  return new Promise((resolve, reject) => {
    const headers = {
      'User-Agent': 'setup-jsonnet Github action',
    }

    const token = core.getInput('github_token')

    if (token) {
      headers['Authorization'] = `token ${token}`
    }

    const request = https.get(url, { headers })

    request.on('response', res => {
      let data = ''

      res.on('data', chunk => {
        data += chunk
      })

      res.on('end', () => {
        if (res.statusCode == 200) {
          resolve(data)
        } else {
          reject(data)
        }
      })
    })

    request.on('error', err => {
      reject(err)
    })
  })
}

const run = async () => {
  const url = await fetchReleases()
  const destinationFolder = '$GITHUB_WORKSPACE/bin'

  await exec(`mkdir -p ${destinationFolder}`)
  await exec(`wget --quiet ${url} -O jsonnet.tar.gz`)
  await exec(`tar xvf jsonnet.tar.gz --directory ${destinationFolder}`)
  await exec('rm jsonnet.tar.gz')
  core.addPath(destinationFolder)
  await exec('which jsonnet')
  await exec('which jsonnetfmt')
  await exec('echo $PATH')

}

try {
  run()
} catch (error) {
  core.setFailed(`Action failed with error: ${error}`)
}