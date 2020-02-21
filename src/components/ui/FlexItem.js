import styled from 'styled-components';

const FlexItem = styled.div`
	flex-grow: ${props => props.flexGrow || 1};
	flex-basis: ${props => props.flexBasis};
	flex: ${props => props.flex};
	margin: ${props => props.margin || '0 15px'};
	flex-direction: ${props => (props.column ? 'column' : 'row')};
	max-height: ${props => props.maxHeight};
	overflow: auto;
	padding: 5px;
	justify-content: ${props => props.justifyContent};
	display: ${props => props.justifyContent && 'flex'};
	@media (max-width: 600px) {
		margin: 0;
		flex: 1;
		max-height: 100%;
	}
`;

export default FlexItem;
