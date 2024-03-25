import React from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { AntDesign } from '@expo/vector-icons';

import ViewBox from "../UI/ViewBox";


const ImageModal = ({ imageURI, isVisible, closeModal }) => {
	console.log('imageURI', imageURI);
	return(
		<Modal
			visible={isVisible}
			transparent={true}
			onRequestClose={closeModal}
		>
			<Container>
				<CloseButton onPress={closeModal}>
					<AntDesign name="closecircle" size={30} color="#FFFFFF" />
				</CloseButton>
				<Image
					resizeMode="contain"
					source={{ uri: imageURI }}
				/>
			</Container>
		</Modal>
	);
};

const Container = styled(View)`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.9);
`;

const Image = styled.Image`
	width: 90%;
	height: 90%;
`;

const CloseButton = styled(TouchableOpacity)`
	position: absolute;
	top: 20px;
	right: 20px;
	z-index: 1;
`;

export default ImageModal;