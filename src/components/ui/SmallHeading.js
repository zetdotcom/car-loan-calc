import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// const SmallHeading = styled.h3`
//   color: ${dark}
// `;

export default function({ children }) {
	return <h3>{children}</h3>;
}
