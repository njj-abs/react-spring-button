import { React } from 'react';
import './App.scss';
import PressedButton from './components/PressButton';
import ErrorButton from './components/ErrorButton';

const App = () =>
	<div className="App">
		<PressedButton/>
		<ErrorButton/>
	</div>;

export default App;
