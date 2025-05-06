import PropTypes from 'prop-types';
import InfoLayout from './InfoLayout';

const getInfoText = ({ isDraw, isGameEnded, currentPlayer }) => {
	if (isDraw) return 'Ничья';
	if (isGameEnded) return `Победа: ${currentPlayer}`;
	return `Ходит: ${currentPlayer}`;
};

const Info = (props) => {
	return (
		<>
			<InfoLayout text={getInfoText(props)} currentPlayer={props.currentPlayer} />
		</>
	);
};

Info.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};

export default Info;
