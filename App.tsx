import "./global.css";

import { Provider } from 'react-redux';
import { ThemeProvider } from "@/theme/ThemeProvider";
import { store } from "@/store";
import RootNavigator from '@/navigation/RootNavigator';
 
export default function App() {

    return(
      <Provider store={store}>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </Provider>
    );
    
}
