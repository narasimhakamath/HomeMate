import React, { useState } from "react";
import { Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import ViewBox from "../UI/ViewBox";
import ImageModal from "./ImageModal";

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const photoSize = screenWidth / numColumns;

const PhotoGrid = ({ images }) => {
	const [containerWidth, setContainerWidth] = useState(0);
	const [selectedImageURI, setSelectedImageURI] = useState('');

	console.log('selectedImageURI', selectedImageURI);

	const onLayout = (event) => {
		const { width } = event.nativeEvent.layout;
		setContainerWidth(width);
	};

	

	const renderItem = ({ item }) => {
		const onOpenImage = () => {
			setSelectedImageURI(item?.uri);
		};

		return(
			<TouchableOpacity onPress={onOpenImage} style={{width: containerWidth/3, height: containerWidth/3, margin: 1}}>
				<Image source={{uri: item?.uri}} style={{flex: 1, width: '100%', height: '100%'}} />
			</TouchableOpacity>
		);
	};

	return(
		<ViewBox flex={1} onLayout={onLayout}>
			<FlatList
				data={images}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				numColumns={numColumns}
			/>

			{!!selectedImageURI && (
				<ImageModal imageURI={selectedImageURI} />
			)}
		</ViewBox>
	);
};

export default PhotoGrid;