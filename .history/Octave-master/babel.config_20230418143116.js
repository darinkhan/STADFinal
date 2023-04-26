const { override, addBabelPlugins } = require("customize-cra")

module.exports = override(
  process.env.E2E_TESTS && addBabelPlugins(
    "babel-plugin-istanbul",
  )
)