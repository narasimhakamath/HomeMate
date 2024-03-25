
import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import theme from './src/utils/theme';
import AuthenticationStack from './src/navigators/AuthenticationStack';
import HomeStack from './src/navigators/HomeStack';

const App = () => {
	const [fontsLoaded, fontError] = useFonts({
		'Makisupa': require('./src/assets/fonts/Makisupa.ttf'),
		'Sono-ExtraLight': require('./src/assets/fonts/Sono-ExtraLight.ttf'),
		'Sono-Light': require('./src/assets/fonts/Sono-Light.ttf'),
		'Sono-Regular': require('./src/assets/fonts/Sono-Regular.ttf'),
		'Sono-Medium': require('./src/assets/fonts/Sono-Medium.ttf'),
		'Sono-SemiBold': require('./src/assets/fonts/Sono-SemiBold.ttf'),
		'Sono-Bold': require('./src/assets/fonts/Sono-Bold.ttf'),
		'Sono-ExtraBold': require('./src/assets/fonts/Sono-ExtraBold.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if(fontsLoaded || fontError)
			await SplashScreen.hideAsync();
	}, [fontsLoaded, fontError]);

	if(!fontsLoaded && !fontError)
		return null;

	return (
		<View style={styles.root} onLayout={onLayoutRootView}>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					{/* <AuthenticationStack/> */}
					<HomeStack />
				</NavigationContainer>
			</ThemeProvider>
			<Toast
				position='bottom'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1
	}
})

export default App;