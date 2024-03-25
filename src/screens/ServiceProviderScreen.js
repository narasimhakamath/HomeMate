import React from "react";
import styled from "styled-components";
import { Linking, TouchableOpacity, Share } from "react-native";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

import Screen from "../UI/Screen";
import Avatar from "../UI/Avatar";
import useQueryServiceProvider from "../hooks/useQueryServiceProvider";
import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";
import Heading from "../UI/Heading";
import Subheading from "../UI/Subheading";
import ViewBox from "../UI/ViewBox";
import { ABOUT_ME, SCHEDULE, PHOTOS, EVENTS, USERS, CONTACT, WHATSAPP_IS_NOT_INSTALLED_IN_YOUR_DEVICE, PLEASE_INSTALL_WHATSAPP_TO_PERFORM_THIS_ACTION, COULD_NOT_SHARE_THE_PROFILE, PEASE_TRY_AGAIN_LATER, CHECKOUT_THIS_CHEF_ON_HOMEMATE } from "../utils/strings";
import Button from "../UI/Button";
import PhotoGridContainer from "../components/PhotoGridContainer";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";


const ServiceProviderScreen = () => {
	let {isLoading, isError, data} = useQueryServiceProvider(1);

	if(isLoading)
		return <LoadingScreen />

	if(isError)
		return <ErrorScreen />

	const callServiceProvider = () => {
		return Linking.openURL(`tel:${data?.phoneNumber}`);
	};

	const shareUserProfile = async () => {
		try {
			const shareOptions = {
				message: CHECKOUT_THIS_CHEF_ON_HOMEMATE,
			};

			Share.share(shareOptions);
		} catch(error) {
			Toast.show({
				type: 'error',
				text1: COULD_NOT_SHARE_THE_PROFILE,
				text2: PEASE_TRY_AGAIN_LATER
			});
		}
	};

	const whatsappServiceProvider = async () => {
		const isValid = await Linking.canOpenURL('whatsapp://send');
		console.log("isValid", isValid);
		if(isValid)
			return Linking.openURL(`whatsapp://send?phone=${data?.whatsappNumber}`);
		Toast.show({
			type: 'error',
			text1: WHATSAPP_IS_NOT_INSTALLED_IN_YOUR_DEVICE,
			text2: PLEASE_INSTALL_WHATSAPP_TO_PERFORM_THIS_ACTION,
		});
	};

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
							<ViewBox mt={4} flexDirection="row" justifyContent="space-around" mx={10}>
								<ViewBox flexDirection="column">
									<Subheading  fontWeight={600} fontSize={5} textAlign="center">{data?.totalEvents}</Subheading>
									<Subheading fontWeight={300} textAlign="center">{EVENTS}</Subheading>
								</ViewBox>
								<ViewBox flexDirection="column">
									<Subheading fontWeight={600} fontSize={5} textAlign="center">{data?.totalUsers}</Subheading>
									<Subheading fontWeight={300} textAlign="center">{USERS}</Subheading>
								</ViewBox>
							</ViewBox>

							<ViewBox mt={4} flexDirection="row" justifyContent="center">
								<IconButton onPress={callServiceProvider}>
									<Ionicons name="call-sharp" size={20} color="#FFFFFF" />
								</IconButton>
								<IconButton onPress={whatsappServiceProvider}>
									<Ionicons name="logo-whatsapp" size={20} color="#FFFFFF" />
								</IconButton>
								<IconButton onPress={shareUserProfile}>
									<Ionicons name="share-outline" size={20} color="#FFFFFF" />
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
						<PhotoGridContainer images={data?.pictures}/>
					</ViewBox>
				</ViewBox>
			</Screen>

			<ViewBox mt={3} mb={3} pl={5} pr={5}>
				<Button br={3} textTransform="uppercase">{SCHEDULE}</Button>
			</ViewBox>
		</>
	);
};

const IconButton = styled(TouchableOpacity)`
	background-color: ${({ theme }) => theme.colors.common.dark};
	padding: ${({ theme }) => theme.shape.spacing(3)}px;
	margin-left: ${({ theme }) => theme.shape.spacing(2)}px;
	margin-right: ${({ theme }) => theme.shape.spacing(2)}px;
	align-self: center;
	align-items: center;
	justify-content: center;
	border-radius: ${({ theme }) => theme.shape.radius(2)}px;
	flex-direction: row;
`;

export default ServiceProviderScreen;