import React from "react";
import { Platform } from "react-native";
import { View } from "react-native";
import styled from "styled-components";

const ViewBox = ({ children, ...props }) => {
	return(
		<Container {...props}>
			{children}
		</Container>
	);
};

const getBackgroundColor = (theme, color) => {
	switch(color) {
		case 'primary':
			return theme.colors.backgroundColor.default;
		case 'secondary':
			return theme.colors.common.dark;
		default:
			return 'transparent';
	}
};

console.log('Platform', Platform);

const Container = styled(View)`
	flex-wrap: ${({ flexWrap }) => flexWrap};
	align-items: ${({ alignItems }) => alignItems};
	flex-direction: ${({ flexDirection }) => flexDirection};
	justify-content: ${({ justifyContent }) => justifyContent};
	padding: ${({ theme, p }) => theme.shape.spacing(p || 0)}px;
	padding-top: ${({ theme, pt, py, p }) => theme.shape.spacing(pt || py || p || 0)}px;
	padding-bottom: ${({ theme, pb, py, p }) => theme.shape.spacing(pb || py || p || 0)}px;
	padding-left: ${({ theme, pl, px, p }) => theme.shape.spacing(pl || px || p || 0)}px;
	padding-right: ${({ theme, pr, px, p }) => theme.shape.spacing(pr || px || p || 0)}px;
	margin: ${({ theme, m }) => theme.shape.spacing(m || 0)}px;
	margin-top: ${({ theme, mt, my, m }) => theme.shape.spacing(mt || my || m || 0)}px;
	margin-bottom: ${({ theme, mb, my, m }) => theme.shape.spacing(mb || my || m || 0)}px;
	margin-left: ${({ theme, ml, mx, m }) => theme.shape.spacing(ml || mx || m || 0)}px;
	margin-right: ${({ theme, mr, mx, m }) => theme.shape.spacing(mr || mx || m || 0)}px;
	background-color: ${({ theme, color }) => getBackgroundColor(theme, color)};
	border-radius: ${({ theme, br }) => theme.shape.radius(br || 0)}px;
	elevation: ${({ shadow }) => shadow ? 10 : 0};
	shadow-color: ${({ theme, shadow }) => shadow ? theme.colors.common.dark : 'transparent'};
	shadow-offset: {width: ${({ shadow }) => shadow ? 2 : 0}px; height: ${({ shadow }) => shadow ? 2 : 0}px};
	shadow-opacity: ${({ shadow }) => shadow ? 0.4 : 1};
	shadow-radius: ${({ theme, shadow }) => theme.shape.radius(2 || 0)}px;
	border: ${({ theme, borderWidth }) => theme.shape.spacing(borderWidth || 0)}px;
`;

export default ViewBox;