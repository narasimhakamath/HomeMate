import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ServiceScreen from "../screens/ServiceScreen";
import ServiceProviderScreen from "../screens/ServiceProviderScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
	return(
		<Stack.Navigator>
			{/* <Stack.Screen
				name="ServiceScreen"
				component={ServiceScreen}
			/> */}
			<Stack.Screen
				name="VendorProfileScreen"
				component={ServiceProviderScreen}
				options={{
					title: 'Service Provider'
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;