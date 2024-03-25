import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Avatar = ({ imageURI }) => {
	const onPressImage = () => {
		console.log("Enlare the image!");
	};

	return(
		<ImageContainer onPress={onPressImage}>
			<UserImage source={{uri: imageURI}} />
		</ImageContainer>
	);
};

const ImageContainer = styled(TouchableOpacity)`
	width: ${({ theme }) => theme.shape.spacing(30)}px;
	height: ${({ theme }) => theme.shape.spacing(30)}px;
	borderRadius: ${({ theme }) => theme.shape.spacing(30)}px;
	overflow: hidden;
	border: ${({ theme }) => theme.shape.spacing(1)}px;
	border-color: ${({ theme }) => theme.colors.grey.ultralight};
`;

const UserImage = styled(Image)`
	flex: 1;
`;

export default Avatar;