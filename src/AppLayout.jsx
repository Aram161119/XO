import PropTypes from 'prop-types';
import styles from './App.module.css';

const AppLayout = ({ children, startNewGame }) => {
	return (
		<div className={styles.rootContainer}>
			<p className={styles.rootParagraph}>
				Tic <span style={{ color: '#e2be00' }}>Tac</span> toe
			</p>
			<div className={styles.container}>
				{children}
				<button className={styles.button} onClick={startNewGame}>
					Start new game
				</button>
			</div>
		</div>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node,
	startNewGame: PropTypes.func,
};

export default AppLayout;
