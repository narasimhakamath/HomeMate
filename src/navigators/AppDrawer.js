import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

import HomeStack from "./HomeStack";
import { HOME, MY_BOOKINGS, MY_FAVOURITES } from "../utils/strings";
import theme from "../utils/theme";
import BookingStack from "./BookingStack";
import FavouritesStack from "./FavouritesStack";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
	return(
		<Drawer.Navigator
			screenOptions={{
				drawerActiveTintColor: theme.colors.primary.main,
				drawerInactiveTintColor: theme.colors.common.dark,
				drawerActiveBackgroundColor: theme.colors.common.dark,
				drawerInactiveBackgroundColor: theme.colors.common.light,
				drawerItemStyle: {
					paddingVertical: theme.shape.spacing(2)
				},
			}}
		>
			<Drawer.Screen
				name="HomeStack"
				component={HomeStack}
				options={{
					title: HOME,
					drawerLabel: HOME,
					drawerIcon: ({ focused, size }) => <AntDesign name="home" size={size} color={focused ? theme.colors.primary.main : theme.colors.common.dark} />
				}}
			/>
			<Drawer.Screen
				name="OrderStack"
				component={BookingStack}
				options={{
					title: MY_BOOKINGS,
					drawerLabel: MY_BOOKINGS,
					drawerIcon: ({ focused, size }) => <AntDesign name="calendar" size={size} color={focused ? theme.colors.primary.main : theme.colors.common.dark} />
				}}
			/>
			<Drawer.Screen
				name="FavouritesStack"
				component={FavouritesStack}
				options={{
					title: MY_FAVOURITES,
					drawerLabel: MY_FAVOURITES,
					drawerIcon: ({ focused, size }) => <AntDesign name="hearto" size={size} color={focused ? theme.colors.primary.main : theme.colors.common.dark} />
				}}
			/>
		</Drawer.Navigator>
	);
};

export default AppDrawer;