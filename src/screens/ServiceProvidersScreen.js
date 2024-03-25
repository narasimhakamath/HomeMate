import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import useQueryServiceProviders from "../hooks/useQueryServiceProviders";

import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import Screen from "../UI/Screen";
import ServiceProviderGridCard from "../components/ServiceProviderGridCard";
import ViewBox from "../UI/ViewBox";
import Title from "../UI/Title";

const numColumns = 2;

const ServiceProvidersScreen = () => {
	const { data: serviceProviders, isLoading, isError } = useQueryServiceProviders();

	if(isLoading)
		return <LoadingScreen />

	if(isError)
		return <ErrorScreen />

	const renderServiceProviderCard = ({ item }) => {
		return(
			<ServiceProviderGridCard serviceProvider={item} />
		);
	}

	return(
		<Screen>
			<FlatList
				data={serviceProviders}
				renderItem={renderServiceProviderCard}
				keyExtractor={(item) => item.id}
				numColumns={numColumns}
			/>
		</Screen>
	);
};

export default ServiceProvidersScreen;