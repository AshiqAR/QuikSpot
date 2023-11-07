import { createStackNavigator } from '@react-navigation/stack';

import Header from './screens/Header';
import ProfilePage from './screens/ProfilePage';
import LoginScreen from './screens/LoginModules/LoginScreen';
import SignupScreen from './screens/LoginModules/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import OwnerPage from './screens/OwnerPage';
import HistoryPage from './screens/History';
import DetailsPage from './screens/Details';
import SettingPage from './screens/Settings';

const AuthStack = createStackNavigator();

function AuthStackScreen() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="SignUp" component={SignupScreen} />
        </AuthStack.Navigator>
    );
}

const UserStack = createStackNavigator();

function UserStackScreen() {

    return (
        <UserStack.Navigator
            screenOptions={{
                headerTitle: () => <Header/>,
                headerStyle: {
                    height: 100,
                },
            }}
        >
            <UserStack.Screen name="Home" component={HomeScreen} />
            <UserStack.Screen name="Profile" component={ProfilePage} />
            <UserStack.Screen name="ParkOwner" component={OwnerPage} />
            <UserStack.Screen name="History" component={HistoryPage} />
            <UserStack.Screen name="Details" component={DetailsPage} />
            <UserStack.Screen name="Settings" component={SettingPage} />
        </UserStack.Navigator >
    );
}

export { UserStackScreen, AuthStackScreen };