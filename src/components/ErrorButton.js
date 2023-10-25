import React from 'react';
import { useSpring, useSpringRef, animated } from '@react-spring/web';

// eslint-disable-next-line max-lines-per-function
const ErrorButton = () => {
	const buttonRef = useSpringRef();

	const style = useSpring({
		ref: buttonRef,
		width: 80,
		height: 80,
		backgroundColor: '#fff',
		boxShadow: '0 4px #dbdbdb',
		transform: 'rotate(0deg) scale(1)',
	});

	const handleClick = () => {
		buttonRef.start({
			config: { tension: 300, friction: 10, duration: 200 },
			to: [
				{
					transform: 'rotate(1.5deg) scale(1.005)',
					backgroundColor: '#ff3a3a',
					boxShadow: '0 4px #ff6262',
				},
				{
					transform: 'rotate(-1.5deg)  scale(1)',
				},
				{
					transform: 'rotate(0deg) scale(1)',
					backgroundColor: '#fff',
					boxShadow: '0 4px #dbdbdb',
				},
			],
		});
	};

	return (
		<div>
			<animated.button
				className="button"
				style={ style }
				onClick={ handleClick }
			>
				Error
			</animated.button>
		</div>
	);
};

export default ErrorButton;
