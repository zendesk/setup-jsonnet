const core = require('@actions/core')
const { exec } = require('@actions/exec')
const path = require('path')

const run = async () => {
  try {
    const version = core.getInput('version')
    await exec(path.join(__dirname, 'install-jsonnet.sh'), version)
  } catch (error) {
    core.setFailed(`Action failed with error: ${error}`)
  }
}

run()
