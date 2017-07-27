import React from 'react';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import Users from '../screens/Users'
import Me from '../screens/Me'
import UserDetail from '../screens/UserDetail'
import Settings from '../screens/Settings'
import {Platform} from 'react-native'

const DrawerIcon = ({ navigate }) => {
    if (Platform.OS === 'ios') {
        return null;
    }

    return (
        <Icon
            name="list"
            size={28}
            color="black"
            onPress={() => navigate('DrawerOpen')}
            style={{ paddingLeft: 20 }}
        />
    );
}

export const UsersStack = StackNavigator({
    Users: {
        screen: Users,
        navigationOptions: ({navigation}) => ({
            title: 'Users',
            headerLeft: <DrawerIcon {...navigation}/>,
        }),
    },
    Details: {
        screen: UserDetail
    }
});
export const Tabs = TabNavigator({
    HomeStack: {
        screen: UsersStack,
        navigationOptions: {
            title: 'Users',
            tabBarLabel: 'Users',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        },
    },
    Me: {
        screen: Me,
        navigationOptions: {
            title: 'ME',
            tabBarLabel: 'Me',
            tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
    }
}, {
    mode: 'modal',
    headerMode: 'none',
});
export const Drawer = DrawerNavigator({
    HomeStack: {
        screen: UsersStack
    },
    Me: {
        screen: Me
    }
})
export const Root = StackNavigator({
    Tabs: {
        screen: Platform.OS == 'ios' ? Tabs : Drawer
    },
    Settings:{
        screen: Settings,
        navigationOptions: {
            title: 'Settings'
        }
    }
}, {
    mode: 'modal',
    headerMode: 'none',
});
