import React, { createRef } from "react";
import { Input } from '@rneui/themed';

import Screen from "../UI/Screen";
import Logo from "../UI/Logo";
import ViewBox from "../UI/ViewBox";
import { PHONE_NUMBER } from "../utils/strings";

const LoginScreen = () => {
	const phoneNumberInput = createRef();

	return(
		<Screen>
			<ViewBox>
				<Logo />
				<ViewBox>
					<Input
						ref={phoneNumberInput}
						placeholder={PHONE_NUMBER}
						label={PHONE_NUMBER}
						shake={() => {
							console.log("shaked lol");
						}}
					/>
				</ViewBox>
			</ViewBox>
		</Screen>
	);
};

export default LoginScreen;