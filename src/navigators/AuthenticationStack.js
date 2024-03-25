import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import IntroductionScreen from "../screens/IntroductionScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AuthenticationStack = () => {
	return(
		<Stack.Navigator>
			<Stack.Screen
				name="IntroductionScreen"
				component={IntroductionScreen}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
};

export default AuthenticationStack;