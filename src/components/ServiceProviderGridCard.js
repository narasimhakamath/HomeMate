import React, { useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Chip } from "react-native-paper";
import styled from "styled-components";

import Avatar from "../UI/Avatar";
import Heading from "../UI/Heading";
import Rating from "../UI/Rating";
import ViewBox from "../UI/ViewBox";
import Toast from "react-native-toast-message";
import { ADDED_TO_FAVOURITES, YOU_CAN_ACCESS_THE_USER_EASILY_LATER } from "../utils/strings";

const ServiceProviderGridCard = ({ serviceProvider }) => {
	const navigation = useNavigation();
	const [isFavourite, setIsFavourite] = useState(serviceProvider?.isFavourite);

	const toggleFavourite = () => {
		setIsFavourite(previousState => {
			if(!previousState) {
				Toast.show({
					text1: ADDED_TO_FAVOURITES,
					text2: YOU_CAN_ACCESS_THE_USER_EASILY_LATER
				});
			}

			return !previousState
		});
	};

	const navigateToServiceProviderDetails = () => {
		navigation.navigate('ServiceProviderScreen');
	};

	return(
		<Container onPress={navigateToServiceProviderDetails}>
			<Avatar
				imageURI={serviceProvider?.imageURI}
				size={25}
			/>
			<Heading mt={2} mb={1}>{serviceProvider?.name}</Heading>
			<Rating rating={serviceProvider?.rating} count={serviceProvider?.ratingCount} />

			<ViewBox mt={3} flexDirection="row">
				<Chip>₹ {serviceProvider?.rate}/hour</Chip>
			</ViewBox>

			<FavouriteButton onPress={toggleFavourite}>
				<AntDesign name={isFavourite ? 'heart' : 'hearto'} size={24} color="black" />
			</FavouriteButton>
		</Container>
	);
};

const Container = styled(Pressable)`
	flex: 0.5;
	padding-top: ${({ theme }) => theme.shape.spacing(2)}px;
	align-items: center;
	aspect-ratio: 1;
	border: ${({ theme }) => theme.shape.spacing(0.1)}px;
`;

const FavouriteButton = styled(TouchableOpacity)`
	position: absolute;
	right: ${({ theme }) => theme.shape.spacing(3)}px;
	top: ${({ theme }) => theme.shape.spacing(3)}px;
`;

export default ServiceProviderGridCard;