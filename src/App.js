import { React } from 'react';
import './App.scss';
import PressedButton from './components/PressButton';
import ErrorButton from './components/ErrorButton';
import ScaleButton from './components/ScaleButton';

const App = () =>
	<div className="App">
		<PressedButton/>
		<ErrorButton/>
		<ScaleButton/>
	</div>;

export default App;
