import React, { useState } from "react";
import { FlatList } from "react-native";

import ViewBox from "../UI/ViewBox";
import GridImage from "./GridImage";

const numColumns = 3;

const PhotoGridContainer = ({ images }) => {
	const [containerWidth, setContainerWidth] = useState(0);

	const onLayout = (event) => {
		const { width } = event.nativeEvent.layout;
		setContainerWidth(width / numColumns);
	};

	const renderImage = ({ item }) => {
		return(
			<GridImage
				width={containerWidth}
				imageURI={item?.uri}
			/>
		);
	};

	return(
		<ViewBox flex={1} onLayout={onLayout}>
			<FlatList
				data={images}
				renderItem={renderImage}
				keyExtractor={(item) => item.id}
				numColumns={numColumns}
			/>
		</ViewBox>
	);
};

export default PhotoGridContainer;