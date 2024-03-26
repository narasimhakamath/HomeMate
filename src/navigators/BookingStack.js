import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookingsScreen from "../screens/BookingsScreen";
import BookingDetailsScreen from "../screens/BookingDetailsScreen";
import { BOOKING_DETAILS, MY_BOOKINGS } from "../utils/strings";


const Stack = createStackNavigator();

const BookingStack = () => {
	return(
		<Stack.Navigator>
			<Stack.Screen
				name="BookingsScreen"
				component={BookingsScreen}
				options={{
					headerShown: false,
					title: MY_BOOKINGS
				}}
			/>
			<Stack.Screen
				name="BookingDetailsScreen"
				component={BookingDetailsScreen}
				options={{
					headerShown: false,
					title: BOOKING_DETAILS
				}}
			/>
		</Stack.Navigator>
	);
};

export default BookingStack;