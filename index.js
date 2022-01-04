const core = require('@actions/core')
const { exec } = require('@actions/exec')
const path = require('path')

const run = async () => {
  const version = core.getInput('version')
  await exec(path.join(__dirname, 'install-jsonnet.sh'), version)
}

try {
  run()
} catch (error) {
  core.setFailed(`Action failed with error: ${error}`)
}
