import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import FavouritesScreen from "../screens/FavouritesScreen";
import { MY_FAVOURITES } from "../utils/strings";

const Stack = createStackNavigator();

const FavouritesStack = () => {
	return(
		<Stack.Navigator>
			<Stack.Screen
				name="FavouritesScreen"
				component={FavouritesScreen}
				options={{
					headerShown: false,
					title: MY_FAVOURITES
				}}
			/>
		</Stack.Navigator>
	);
};

export default FavouritesStack;