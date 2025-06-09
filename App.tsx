import "./global.css";

import { View, Text } from 'react-native';
import { ThemeProvider } from "./src/theme/ThemeProvider";
 
export default function App() {

    return(
      <ThemeProvider>
        <View className="flex-1 justify-center items-center">
          <Text className="text-black dark:text-white text-5xl">Homepage</Text>
        </View>
      </ThemeProvider>
    );
    
}
