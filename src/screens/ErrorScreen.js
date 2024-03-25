import React from "react";
import LottieView from 'lottie-react-native';
import styled from "styled-components";

import ViewBox from "../UI/ViewBox";
import Heading from "../UI/Heading";
import Subheading from "../UI/Subheading";
import { ERROR1, ERROR2 } from "../utils/strings";

const ErrorScreen = () => {
	return(
		<ViewBox flex={1} justifyContent="center">
			<Heading textAlign="center" fontWeight={600}>{ERROR1}</Heading>
			<Subheading textAlign="center">{ERROR2}</Subheading>
			<Lottie
				autoPlay={true}
				source={require("../assets/animations/Error.json")}
			/>
		</ViewBox>
	);
};

const Lottie = styled(LottieView)`
	height: ${({ theme }) => theme.shape.spacing(70)}px;
	width: ${({ theme }) => theme.shape.spacing(70)}px;
	align-self: center;
`;

export default ErrorScreen;