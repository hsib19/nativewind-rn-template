const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const configDefault = getDefaultConfig(__dirname);
 
const config = mergeConfig(withStorybook(configDefault), {
  /* your config */
});
 
const reanimatedConfig = wrapWithReanimatedMetroConfig(config);

module.exports = withNativeWind(reanimatedConfig, {input: './global.css'});
