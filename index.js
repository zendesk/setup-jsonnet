const core = require('@actions/core')
const { exec } = require('@actions/exec')
const path = require('path')

const run = async () => {
  await exec(path.join(__dirname, 'install-jsonnet.sh'))
}

try {
  run()
} catch (error) {
  core.setFailed(`Action failed with error: ${error}`)
}
