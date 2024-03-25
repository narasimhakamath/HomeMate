import React from "react";
import LottieView from 'lottie-react-native';
import styled from "styled-components";

import ViewBox from "../UI/ViewBox";
import { ActivityIndicator } from "react-native";
import Heading from "../UI/Heading";
import { LOADING1 } from "../utils/strings";

const LoadingScreen = () => {

	return(
		<ViewBox flex={1} justifyContent="center">
			<Lottie
				autoPlay={true}
				source={require("../assets/animations/FallingBalls.json")}
			/>
			<Lottie
				autoPlay={true}
				source={require("../assets/animations/WaitingCat.json")}
			/>
		</ViewBox>
	);
};

const Lottie = styled(LottieView)`
	height: ${({ theme }) => theme.shape.spacing(80)}px;
	width: ${({ theme }) => theme.shape.spacing(80)}px;
	align-self: center;
`;


export default LoadingScreen;