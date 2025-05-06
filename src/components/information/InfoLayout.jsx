import PropTypes from 'prop-types';
import styles from './Info.module.css';

const InfoLayout = ({ text, currentPlayer }) => {
	return (
		<>
			<p className={`${styles.infoText} ${styles[`${currentPlayer}_infoText`]}`}>
				{text}
			</p>
		</>
	);
};

InfoLayout.propTypes = {
	text: PropTypes.string,
	currentPlayer: PropTypes.string,
};

export default InfoLayout;
