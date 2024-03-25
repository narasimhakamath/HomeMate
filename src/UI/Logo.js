import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

import ViewBox from "./ViewBox";

const Logo = () => {
	return(
		<ViewBox flexDirection="row" justifyContent="center">
			<LogoText>Home</LogoText>
			<LogoText color="main">mate</LogoText>
		</ViewBox>
	);
};

const LogoText = styled(Text)`
	font-size: ${({ theme }) => theme.shape.spacing(10)}px;
	font-family: Makisupa;
	text-align: center;
	color: ${({ theme, color }) => theme.colors.primary[color] || theme.colors.common.dark};
`;

export default Logo;