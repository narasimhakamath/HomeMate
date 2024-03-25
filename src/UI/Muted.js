import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Muted = ({ children, ...props }) => {
	return(
		<TextField {...props}>{children}</TextField>
	);
};

const TextField = styled(Text)`
	font-size: ${({ theme }) => theme.shape.spacing(3.5)}px;
	font-weight: ${({ theme, fontWeight }) => fontWeight || 400};
	color: ${({ theme }) => theme.colors.grey.main};
	text-transform: ${({ textTransform}) => textTransform || 'none'};
	text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};
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

export default Muted;