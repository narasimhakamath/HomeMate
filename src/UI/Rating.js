import React from "react";
import { AirbnbRating } from '@rneui/themed';
import theme from "../utils/theme";
import ViewBox from "./ViewBox";
import Paragraph from "./Paragraph";


const Rating = ({ rating, count }) => {
	return(
		<ViewBox flexDirection="row" alignItems="center">
			<AirbnbRating
				count={5}
				defaultRating={rating || 0}
				isDisabled={true}
				size={18}
				showRating={false}
				selectedColor={theme.colors.common.dark}
			/>
			<Paragraph mx={1} textAlign="center">({count})</Paragraph>
		</ViewBox>
	);
};

export default Rating;