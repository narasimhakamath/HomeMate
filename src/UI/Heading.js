import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const getColor = (theme, color) => {
	const COLOR = {
		primary: theme.colors.primary.main,
		grey: theme.colors.grey.main,
		warning: theme.colors.warning.main,
		error: theme.colors.error.main,
		info: theme.colors.info.main,
		success: theme.colors.success.main,
		default: theme.colors.common.dark
	};

	return COLOR[color] || COLOR.default;
};

const Heading = ({ children, ...props }) => {
	return(
		<TextField {...props}>{children}</TextField>
	);
};

const TextField = styled(Text)`
	font-size: ${({ theme, fontSize }) => theme.shape.spacing( fontSize || 5)}px;
	font-weight: ${({ theme, fontWeight }) => fontWeight || 400};
	text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};
	color: ${({ theme, color }) => getColor(theme, color)};
	text-transform: ${({ theme, textTransform}) => textTransform || 'none'};
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
`;

export default Heading;