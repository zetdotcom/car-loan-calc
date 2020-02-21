import React from 'react';
import ButtonUI from '@material-ui/core/Button';
import { greenBg } from 'style';
import styled from 'styled-components';

const ButtonStyled = styled(ButtonUI)`
	&& {
		background: ${greenBg};
		padding: 11px 13px;
		border-radius: 4px;
	}
`;

export default function Button(props) {
	return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
}
