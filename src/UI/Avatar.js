import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import ImageModal from "../components/ImageModal";

const Avatar = ({ imageURI, size }) => {
	const [openImage, setOpenImage] = useState(false);

	const openModal = () => setOpenImage(true);
	const closeModal = () => setOpenImage(false);

	return(
		<>
			<ImageContainer onPress={openModal} size={size}>
				<UserImage source={{uri: imageURI}} />
			</ImageContainer>

			<ImageModal
				imageURI={imageURI}
				isVisible={openImage}
				closeModal={closeModal}
			/>
		</>
	);
};

const ImageContainer = styled(TouchableOpacity)`
	width: ${({ theme, size }) => theme.shape.spacing(size || 30)}px;
	height: ${({ theme, size }) => theme.shape.spacing(size || 30)}px;
	borderRadius: ${({ theme, size }) => theme.shape.spacing(size / 2)}px;
	overflow: hidden;
	border: ${({ theme }) => theme.shape.spacing(0.25)}px;
	border-color: ${({ theme }) => theme.colors.grey.ultralight};
`;

const UserImage = styled(Image)`
	flex: 1;
`;

export default Avatar;