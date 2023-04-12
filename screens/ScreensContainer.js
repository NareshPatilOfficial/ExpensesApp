import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpenses from "./ManageExpenses";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./RecentExpenses";
import AllExpenses from "./AllExpenses";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../styles/styles";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview() {
    return (
        <BottomTab.Navigator
            screenOptions={() => ({
                headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
                headerTintColor:'white',
                tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
                tabBarActiveTintColor:GlobalStyles.colors.accent500
            })}
        >
            <BottomTab.Screen
                name={'RecentExpenses'}
                component={RecentExpenses}
                options={{
                    title:'Recent Expenses',
                    tabBarLabel:'Recent',
                    tabBarIcon: ({ color, size }) => <Ionicons name='hourglass' color={color} size={size} />
                }}
            />
            <BottomTab.Screen
                name={'AllExpenses'}
                component={AllExpenses}
                options={{
                    title:'All Expenses',
                    tabBarLabel:'All Expenses',
                    tabBarIcon: ({color, size}) => <Ionicons name='calendar' color={color} size={size}/>
                }}
            />
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
                        headerShown: false
                    }}
                />
                <Stack.Screen name='ManageExpenses' component={ManageExpenses} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ScreensContainer;