import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

const Button = ({ children, br, type, onPress, textTransform, isLoading }) => {
	return(
		<TouchableComponent br={br} onPress={onPress} type={type} activeOpacity={0.7}>
			{isLoading && (
				<LoaderContainer>
					<ActivityIndicator color='#FFFFFF' />
				</LoaderContainer>
			)}
			<Title textTransform={textTransform} type={type}>{children}</Title>
		</TouchableComponent>
	);
};

const getBackgroundColor = (theme, type) => {
	switch(type) {
		case 'primary':
			return theme.colors.common.dark;
		case 'secondary':
			return 'transparent';
		default:
			return theme.colors.common.dark;
	}
};

const getTextColor = (theme, type) => {
	switch(type) {
		case 'primary':
			return theme.colors.common.light;
		case 'secondary':
			return theme.colors.error.main;
		default:
			return theme.colors.common.light;
	}
};

const TouchableComponent = styled(TouchableOpacity)`
	background-color: ${({ theme, type }) =>  getBackgroundColor(theme, type)};
	padding-top: ${({ theme }) => theme.shape.spacing(4.5)}px;
	padding-left: ${({ theme }) => theme.shape.spacing(4)}px;
	padding-right: ${({ theme }) => theme.shape.spacing(4)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(4.5)}px;
	border-radius: ${({ theme, br }) => theme.shape.radius(br || 0)}px;
	flex-direction: row;
	justify-content: center;
	margin: ${({ theme, m }) => theme.shape.spacing(m || 0)}px;
	margin-top: ${({ theme, mt, my, m }) => theme.shape.spacing(mt || my || m || 0)}px;
	margin-bottom: ${({ theme, mb, my, m }) => theme.shape.spacing(mb || my || m || 0)}px;
	margin-left: ${({ theme, ml, mx, m }) => theme.shape.spacing(ml || mx || m || 0)}px;
	margin-right: ${({ theme, mr, mx, m }) => theme.shape.spacing(mr || mx || m || 0)}px;
`;

const LoaderContainer = styled(View)`
	margin-left: ${({ theme }) => theme.shape.spacing(1)}px;
	margin-right: ${({ theme }) => theme.shape.spacing(1)}px;
`;

const Title = styled(Text)`
	color: ${({ theme, type }) => getTextColor(theme, type)};
	text-align: center;
	font-family: ${({ theme }) => theme.font.fontWeight['400']};
	text-transform: ${({ textTransform }) => textTransform || 'none'};
	font-size: ${({ theme }) => theme.shape.spacing(5)}px;
`;

export default Button;