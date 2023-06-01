import React from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import './App.css';
import TasksContainer from './components/TasksContainer/TasksContainer';

function App() {
	return (
		<div>
			<TaskForm />
			<TasksContainer />
		</div>
	);
}

export default App;
