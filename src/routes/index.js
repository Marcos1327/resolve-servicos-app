import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome/welcome'
import SignIn from '../pages/SignIn/signIn'
import Register from '../pages/Register/register';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            >
            </Stack.Screen>

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            >
            </Stack.Screen>

            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}