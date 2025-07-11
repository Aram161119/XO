import PropTypes from 'prop-types';
import styles from './Info.module.css';

const Info = ({ text, currentPlayer }) => (
	<p className={`${styles.infoText} ${styles[`${currentPlayer}_infoText`]}`}>{text}</p>
);

Info.propTypes = {
	text: PropTypes.string,
	currentPlayer: PropTypes.string,
};

export default Info;
