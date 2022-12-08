import styles from './Tasklist.module.css'
import { PlusCircle } from "phosphor-react"
import TaskBox from './TaskBox'
import { v4 as uuidv4 } from 'uuid'
import {useState} from 'react'

export default function Tasklist() {

	const [tasks, setTasks] = useState([
		{
			id:uuidv4(),
			title: 'Estudar React.JS',
			isComplete: false
		},
		{
			id:uuidv4(),
			title: 'Lavar a louça',
			isComplete: false
		},
	])

	const [completedTasks, setCompletedTasks] = useState([])
	
	const [taskTitle, setTaskTitle] = useState('')

	// input value
	function saveTaskTitle(event) {
		setTaskTitle(event.target.value)
	}

	function createTask() {
		event.preventDefault()
		setTasks([ 
			{
				id:uuidv4(),
				title: taskTitle,
				isComplete: false
			},
			...tasks,
		])
		setTaskTitle('')
	}

	function deleteTask(taskID){
		const tasksWithoutDeletedOne = tasks.filter(task => {
			return task.id != taskID
		})

		const updatedCompletedTasks = tasksWithoutDeletedOne.filter(task => {
			if (task.isComplete){
				return task
		 	}
		})

		setCompletedTasks(updatedCompletedTasks)
		setTasks(tasksWithoutDeletedOne)
	}

	function completeTask(taskID){
		const tasksUpdated = tasks.map(task => {
			if (task.id == taskID){
				let x = task.isComplete
				return {...task, isComplete: !x}
			}
			return task
		})

		const updatedCompletedTasks = tasksUpdated.filter(task => {
			if (task.isComplete){
				return task
		 	}
		})

		setCompletedTasks(updatedCompletedTasks)
		setTasks(tasksUpdated)
	}

	return(
		<main className={styles.tasklist}>
			{/* input */}
			<form onSubmit={createTask}>
				<div className={styles.addTask}>
					<input 
						type="text"
						placeholder="Adicione uma nova tarefa"
						value={taskTitle}
						onChange={saveTaskTitle}
						required
					/>
					<button type="submit">
						<span>Criar</span>
						<PlusCircle size={20}/>
					</button>
				</div>
			</form>
			
			{/* task counter */}
			<div className={styles.tasksCount}>
				<div>
					<p className={styles.blue}>Tarefas criadas</p>
					<span className={styles.badge}>{tasks.length}</span>
				</div>
				<div>
					<p className={styles.purple}>Concluídas</p>
					<span className={styles.badge}>{completedTasks.length} de {tasks.length}</span>
				</div>
			</div>

			{/* tasks */}
			<TaskBox 
				tasks={tasks}
				deleteTask={deleteTask}
				completeTask={completeTask}
			/>

		</main>
	)
}