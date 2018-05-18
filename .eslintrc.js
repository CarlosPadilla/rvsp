module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "to" ]
      }],
      "jsx-a11y/label-has-for": 0,
    },
    "overrides": [
      {
        "files": [ '*.test.js' ],
      }
    ],
    "env": {
      "browser": true,
      "node": true
   },
   "parser": "babel-eslint",
};
