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
			<ActivityIndicator color="black" />
			<Heading my={2} textAlign="center">{LOADING1}</Heading>
		</ViewBox>
	);
};

export default LoadingScreen;