const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
 
const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});
 
const reanimatedConfig = wrapWithReanimatedMetroConfig(config);

module.exports = withNativeWind(reanimatedConfig, {input: './global.css'});
