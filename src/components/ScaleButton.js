import React from 'react';
import { useSpring, useSpringRef, animated, config } from '@react-spring/web';

// eslint-disable-next-line max-lines-per-function
const ScaleButton = () => {
	const buttonRef = useSpringRef();

	const style = useSpring({
		ref: buttonRef,
		width: 72,
		height: 72,
		transform: 'scale(1)',
		config: { tension: 300, friction: 10 },
	});

	const handleClick = () => {
		buttonRef.start({
			config: config.stiff,
			to: [
				{
					transform: 'scale(1.2)',
				},
				{
					transform: 'scale(1)',
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
				scale
			</animated.button>
		</div>
	);
};

export default ScaleButton;
