import React from "react";
import LottieView from 'lottie-react-native';
import styled from "styled-components";

import Screen from "../UI/Screen";
import Button from "../UI/Button";
import { GET_STARTED, INTRODUCTION_TEXT } from "../utils/strings";
import ViewBox from "../UI/ViewBox";
import Logo from "../UI/Logo";
import Heading from "../UI/Heading";
import { useNavigation } from "@react-navigation/native";

const IntroductionScreen = () => {
	const navigation = useNavigation();

	const onGetStarted = () => {
		navigation.navigate('LoginScreen');
	};

	return(
		<Screen>
			<ViewBox flex={1} justifyContent="center">
				<ViewBox mt={20}>
					<Logo />
				</ViewBox>

				<ViewBox flex={1} justifyContent="center">
					<IntroductionLottie
						autoPlay={true}
						source={require("../assets/animations/Cooking.json")}
					/>
					<Heading mx={8} my={5} fontWeight={600} fontSize={7} textAlign="center">{INTRODUCTION_TEXT}</Heading>
				</ViewBox>

				<ViewBox p={5}>
					<Button br={3} textTransform="uppercase" onPress={onGetStarted}>{GET_STARTED}</Button>
				</ViewBox>
			</ViewBox>
		</Screen>
	);
};

const IntroductionLottie = styled(LottieView)`
	height: ${({ theme }) => theme.shape.spacing(110)}px;
	width: ${({ theme }) => theme.shape.spacing(110)}px;
	align-self: center;
`;

export default IntroductionScreen;