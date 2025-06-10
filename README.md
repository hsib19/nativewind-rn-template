
# NativeWind RN Template

![npm](https://img.shields.io/npm/v/nativewind?color=cyan&label=NativeWind)
![react-native](https://img.shields.io/badge/react--native-0.79.3-blue)
![typescript](https://img.shields.io/badge/typescript-5.0.4-blue)
![last-commit](https://img.shields.io/github/last-commit/hsib19/nativewind-rn-template)
![repo-size](https://img.shields.io/github/repo-size/hsib19/nativewind-rn-template)

A clean and minimal React Native template with **NativeWind** (Tailwind CSS for React Native) pre-configured, designed to kickstart your React Native CLI projects with easy styling and modern best practices.

## Features

- React Native CLI starter template  
- Preconfigured with NativeWind for Tailwind CSS styling  
- Ready to use with TypeScript support  
- Integrated **Sentry** for error tracking and monitoring  
- Setup with **Detox** for end-to-end (E2E) testing  
- Included **Storybook** for isolated UI component development  
- Example screen with Tailwind styling  
- Minimal dependencies and setup

## Getting Started

### Prerequisites

- Node.js (>=18 recommended)  
- React Native CLI environment set up (Android Studio / Xcode, device or emulator)  
- Yarn or npm package manager

### Installation

Clone this repo:

```bash
git clone https://github.com/hsib19/nativewind-rn-template.git
cd nativewind-rn-template
```

Install dependencies:

```bash
yarn install
# or
npm install
```

### Running the App

- For iOS (Mac only):

```bash
yarn ios
# or
npm run ios
```

- For Android:

```bash
yarn android
# or
npm run android
```

### Running Storybook

Start the Metro bundler for Storybook:

```bash
yarn start:storybook
# or
npm run start:storybook
```

Launch the app in Storybook mode:

- iOS (Mac only):

```bash
yarn storybook:ios
# or
npm run storybook:ios
```

- Android:

```bash
yarn storybook:android
# or
npm run storybook:android
```

To clean and regenerate Storybook loader:

```bash
yarn storybook-clean
# or
npm run storybook-clean
```

### Running Tests with Jest

Run all tests:

```bash
yarn test
# or
npm test
```

Run tests with coverage report:

```bash
yarn test:coverage
# or
npm run test:coverage
```

Run tests in watch mode:

```bash
yarn test --watch
# or
npm test -- --watch
```

### Using Sentry

Sentry is pre-configured for error tracking.  
Replace the DSN in your Sentry config file or initialization code with your own DSN to start monitoring errors.

### Running Detox Tests (E2E)

Make sure your emulator or device is running.

- Android:

```bash
detox test -c android.emu.debug
```

- iOS (Mac only):

```bash
detox test -c ios.sim.debug
```

See Detox docs for more details:  
https://wix.github.io/Detox/docs/introduction/getting-started

## Usage

Start building your app inside the `src` folder. Use NativeWind’s Tailwind classes to style React Native components quickly and intuitively.

Example:

```tsx
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl font-bold text-blue-600">Hello, NativeWind!</Text>
    </View>
  );
}
```

## Learn More

- [React Native Docs](https://reactnative.dev/docs/getting-started)  
- [NativeWind Docs](https://www.nativewind.dev/)  
- [Tailwind CSS Docs](https://tailwindcss.com/docs)  
- [Sentry React Native](https://docs.sentry.io/platforms/react-native/)  
- [Detox E2E Testing](https://wix.github.io/Detox/docs/introduction/getting-started)  
- [Storybook for React Native](https://storybook.js.org/docs/react-native/get-started/introduction)  
- [Jest Testing](https://jestjs.io/docs/getting-started)
