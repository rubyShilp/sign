module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: 3,
        useBuiltIns: "usage",
        targets: "> 0.000000001%,last 2 versions,not dead,ie 10",
      },
    ],
    "@vue/babel-preset-jsx",
  ],
  plugins: [
    ["@babel/plugin-transform-arrow-functions"],
    ["@babel/plugin-transform-runtime", {}],
  ],
};
