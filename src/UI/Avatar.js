import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import ImageModal from "../components/ImageModal";

const Avatar = ({ imageURI }) => {
	const [openImage, setOpenImage] = useState(false);

	const openModal = () => setOpenImage(true);
	const closeModal = () => setOpenImage(false);

	return(
		<>
			<ImageContainer onPress={openModal}>
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