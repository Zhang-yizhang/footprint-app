module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended"
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // enable additional rules
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: [0, "double"],
    semi: [0, "always"],
    "no-cond-assign": ["error", "always"],
    // disable rules from base configurations
    "no-console": "off",
    linebreak-style: ["off", "windows"]
  }

};
