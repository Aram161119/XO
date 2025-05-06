import PropTypes from 'prop-types';
import styles from './Field.module.css';

const FieldLayout = ({ field, onClick, winnerLine }) => {
	return (
		<>
			<div className={styles.root}>
				{field.map((item, index) => (
					<div
						key={index}
						className={`${styles.fieldItem} ${styles[`${item}_fieldItem`]} ${
							winnerLine.includes(index) && styles.winner
						}`}
						onClick={() => onClick(index)}
					>
						{item}
					</div>
				))}
			</div>
		</>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
	winnerLine: PropTypes.array,
};

export default FieldLayout;
