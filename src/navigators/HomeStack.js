import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ServiceProviderScreen from "../screens/ServiceProviderScreen";
import ServiceProvidersScreen from "../screens/ServiceProvidersScreen";
import { SERVICE_PROVIDER, SERVICE_PROVIDERS } from "../utils/strings";

const Stack = createStackNavigator();

const HomeStack = () => {
	return(
		<Stack.Navigator>
			<Stack.Screen
				name="ServiceProvidersScreen"
				component={ServiceProvidersScreen}
				options={{
					headerShown: false,
					title: SERVICE_PROVIDERS
				}}
			/>
			<Stack.Screen
				name="ServiceProviderScreen"
				component={ServiceProviderScreen}
				options={{
					headerShown: false,
					title: SERVICE_PROVIDER
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;