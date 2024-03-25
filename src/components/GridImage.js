import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import ImageModal from "./ImageModal";

const GridImage = ({ width, imageURI }) => {
	const [openImage, setOpenImage] = useState(false);

	const maximizeImage = () => {
		setOpenImage(true);
	};

	const closeModal = () => {
		setOpenImage(false);
	}

	return(
		<>
			<Touchable width={width} onPress={maximizeImage}>
				<Image source={{uri: imageURI}} />
			</Touchable>

			<ImageModal
				imageURI={imageURI}
				isVisible={openImage}
				closeModal={closeModal}
			/>
		</>
	);
};

const Touchable = styled(TouchableOpacity)`
	width: ${({ width}) => width};
	height: ${({ width}) => width};
	margin: ${({ theme }) => theme.shape.spacing(0.25)}px;
`;

const Image = styled.Image`
	flex: 1;
	width: 100%;
	height: 100%;
`;

export default GridImage;