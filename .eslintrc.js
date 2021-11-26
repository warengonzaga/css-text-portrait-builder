module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["google"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    "quote-props": ["error", "as-needed"],
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "object-curly-spacing": ["error", "always"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "comma-dangle": ["error", "only-multiline"],
    "no-mixed-spaces-and-tabs": "error",
  },
};
