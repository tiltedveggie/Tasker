import React from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import './App.css';
import TasksContainer from './components/TasksContainer/TasksContainer';
import TaskProvider from './contexts/TaskContext';

function App() {
	return (
		<TaskProvider>
			<div>
				<TaskForm />
				<TasksContainer />
			</div>
		</TaskProvider>
	);
}

export default App;
