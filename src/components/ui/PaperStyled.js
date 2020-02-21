import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const PaperStyled = styled(Paper)`
	display: flex;
	flex-direction: column;
	padding: 36px 48px;
	/* justify-content: space-around; */
	@media (max-width: 430px) {
		padding: 10px 15px;
	}
`;

export default PaperStyled;
