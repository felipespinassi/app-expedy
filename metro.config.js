// Learn more https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require("expo/metro-config");
/** @type {import('expo/metro-config').MetroConfig} */
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.

  isCSSEnabled: true,
});

// add nice web support with optimizing compiler + CSS extraction

const { withTamagui } = require("@tamagui/metro-plugin");

module.exports = withTamagui(config, {
  components: ["tamagui"],

  config: "./tamagui.config.ts",

  outputCSS: "./tamagui-web.css",
});
module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
