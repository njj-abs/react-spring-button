import React from 'react';
import { useSpring, useSpringRef, animated } from '@react-spring/web';

// eslint-disable-next-line max-lines-per-function
const PressedButton = () => {
	const buttonRef = useSpringRef();
	const buttonProps = useSpring({
		ref: buttonRef,
		from: {
			width: 80,
			height: 80,
			backgroundColor: '#fff',
			boxShadow: '0 4px #dbdbdb',
			transform: 'translateY(0px)',
		},
		config: {
			mass: 1,
			tension: 170,
			friction: 26,
			clamp: false,
			precision: 0.01,
			velocity: 0.005,
		},
	});

	const handlePress = () => {
		buttonRef.start({
			backgroundColor: '#319cf1',
			boxShadow: '0 2px #319cf1',
			transform: 'translateY(2px)',
		});
	};

	const handleRelease = () => {
		buttonRef.start({
			backgroundColor: '#fff',
			boxShadow: '0 4px #dbdbdb',
			transform: 'translateY(0px)',
		});
	};

	return (
		<div>
			<animated.button
				className="button"
				style={ buttonProps }
				onMouseDown={ handlePress }
				onMouseUp={ handleRelease }
				onMouseLeave={ handleRelease }
			>
				Press
			</animated.button>
		</div>
	);
};

export default PressedButton;
