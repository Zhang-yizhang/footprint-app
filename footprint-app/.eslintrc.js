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
    indent: [0, 2],
    quotes: [0, "double"],
    // eslint-disable-next-line no-dupe-keys
    quotes: [0, "single"],
    semi: [0, "always"],
    "no-cond-assign": ["error", "always"],
    // disable rules from base configurations
    "no-console": "off",
    "space-before-function-paren": 0,
    'linebreak-style': [0, 'error', 'windows'],
    "vue/html-self-closing": ["error", {
      html: {
        void: "never",
        normal: "any",
        component: "any"
      },
      svg: "always",
      math: "always"
    }]
  }

};
