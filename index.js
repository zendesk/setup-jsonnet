const core = require('@actions/core')
const io = require('@actions/io')
const { exec } = require('@actions/exec')
const https = require('https')
const path = require('path')


const run = async () => {
  await exec(path.join(__dirname, 'install-jsonnet.sh'))
}

try {
  run()
} catch (error) {
  core.setFailed(`Action failed with error: ${error}`)
}
