import React from "react";
import { Modal } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageModal = ({ selectedImageURI }) => {

	const images = [{ url: selectedImageURI }];

	console.log(images);

	return(
		<Modal visible={true} transparent={true}>
			<ImageViewer imageUrls={images}/>
		</Modal>
	);
};

export default ImageModal;