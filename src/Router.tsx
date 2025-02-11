import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={ Home } />
                <Stack.Screen name="DetailScreen" component={ Detail } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;