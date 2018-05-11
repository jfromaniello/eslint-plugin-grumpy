module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "comma-dangle": "off",
    "no-console": "off",
    "no-shadow": ["error", { "allow": [ "done", "callback", "err" ] }],
    "callback-return": "error",
    "consistent-return": "off",
    "prefer-destructuring": "off",
    'no-enterprise/no-enterprise': "error"
  }
};
