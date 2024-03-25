import React from "react";
import { AirbnbRating } from '@rneui/themed';
import theme from "../utils/theme";
import ViewBox from "./ViewBox";
import Paragraph from "./Paragraph";


const Rating = ({ rating, count }) => {
	return(
		<ViewBox>
			<AirbnbRating
				count={5}
				defaultRating={rating || 0}
				isDisabled={true}
				size={15}
				reviewSize={0}
				selectedColor={theme.colors.common.dark}
			/>
			<Paragraph textAlign="center">({count} reviews)</Paragraph>
		</ViewBox>
	);
};

export default Rating;