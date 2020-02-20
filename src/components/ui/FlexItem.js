import styled from 'styled-components';

const FlexItem = styled.div`
	flex-grow: ${props => props.flexGrow || 1};
	flex-basis: ${props => props.flexBasis};
	flex: ${props => props.flex};
	margin: ${props => props.margin || '0 15px'};
	flex-direction: ${props => (props.column ? 'column' : 'row')};
	/* border: 1px solid green; */
	max-height: ${props => props.maxHeight};
	overflow: auto;
	padding: 5px;
`;

export default FlexItem;
