import React from "react";
import styled from "styled-components";
import { Pressable, TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from '@expo/vector-icons';

import Screen from "../UI/Screen";
import Avatar from "../UI/Avatar";
import useQueryServiceProvider from "../hooks/useQueryServiceProvider";
import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";
import Heading from "../UI/Heading";
import Subheading from "../UI/Subheading";
import ViewBox from "../UI/ViewBox";
import { ABOUT_ME, BOOK, PHOTOS, EVENTS, USERS, CONTACT } from "../utils/strings";
import Button from "../UI/Button";
import PhotoGrid from "../components/PhotoGrid";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";


const ServiceProviderScreen = () => {
	let {isLoading, isError, data} = useQueryServiceProvider(1);

	if(isLoading)
		return <LoadingScreen />

	if(isError)
		return <ErrorScreen />

	return(
		<>
			<Screen>
				<ViewBox flex={1}>
					<ViewBox flexDirection="row" alignItems="center">
						<ViewBox mx={5}>
							<Avatar
								imageURI={data?.imageURI}
							/>
						</ViewBox>

						<ViewBox flex={1}>
							<Heading fontWeight={600} textAlign="center" mt={5}>{data?.name}</Heading>
							<ViewBox mt={4} flexDirection="row" justifyContent="space-around">
								<ViewBox flexDirection="column">
									<Subheading  fontWeight={600} fontSize={5} textAlign="center">{data?.totalEvents}</Subheading>
									<Subheading textAlign="center">{EVENTS}</Subheading>
								</ViewBox>
								<ViewBox flexDirection="column">
									<Subheading fontWeight={600} fontSize={5} textAlign="center">{data?.totalUsers}</Subheading>
									<Subheading textAlign="center">{USERS}</Subheading>
								</ViewBox>
							</ViewBox>

							<ViewBox mt={4}>
								<IconButton>
									<Ionicons name="call-sharp" size={20} color="#FFFFFF" />
									<Title mx={3} color="light" fontWeight={500}>{CONTACT}</Title>
								</IconButton>
							</ViewBox>
						</ViewBox>
					</ViewBox>

					<ViewBox mt={5} px={5}>
						<Heading my={3} fontWeight={500}>{ABOUT_ME}</Heading>
						<Subheading fontWeight={400}>{data?.introduction}</Subheading>
					</ViewBox>

					<ViewBox mt={5} px={5}>
						<Heading my={3} fontWeight={500}>{PHOTOS}</Heading>
						<PhotoGrid images={data?.pictures}/>
					</ViewBox>
				</ViewBox>

			</Screen>
			<ViewBox mt={3} mb={3} pl={5} pr={5}>
				<Button br={3} textTransform="uppercase">{BOOK}</Button>
			</ViewBox>
		</>
	);
};

const IconButton = styled(TouchableOpacity)`
	background-color: ${({ theme }) => theme.colors.common.dark};
	padding: ${({ theme }) => theme.shape.spacing(2)}px;
	padding-top: ${({ theme }) => theme.shape.spacing(2.5)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(2.5)}px;
	width: 60%;
	align-self: center;
	align-items: center;
	justify-content: center;
	border-radius: ${({ theme }) => theme.shape.radius(2)}px;
	flex-direction: row;
`;

export default ServiceProviderScreen;