import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import theme from "../utils/theme";

const Screen = ({ children }) => {
	return(
		<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
			<View style={styles.view}>
				{children}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		// backgroundColor: theme.colors.backgroundColor.default
	},
	view: {
		flex: 1,
		padding: 5,
	}
});

export default Screen;