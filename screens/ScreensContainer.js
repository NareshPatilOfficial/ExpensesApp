import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpenses from "./ManageExpenses";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./RecentExpenses";
import AllExpenses from "./AllExpenses";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name={'RecentExpenses'} component={RecentExpenses} />
            <BottomTab.Screen name={'AllExpenses'} component={AllExpenses} />
        </BottomTab.Navigator>
    )
}

function ScreensContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='ExpensesOverview'
                    component={ExpensesOverview}
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen name='ManageExpenses' component={ManageExpenses} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ScreensContainer;