import Task from './Task'
import styles from './TaskBox.module.css'

export default function TaskBox( {tasks, deleteTask, completeTask, checkTask} ) {

	if (tasks.length == 0) {
		return (
			<div className={styles.empty}>
				<img className={styles.clipboard} src="./src/assets/Clipboard.png" />
				<strong>Você ainda não tem tarefas cadastradas</strong>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</div>
		)
	}

	return (
		<div>
			{
				tasks.map(task => {
					return (
						<Task
							key={task.id}
							id={task.id}
							taskContent={task.title}
							isComplete={task.isComplete}
							deleteTask={deleteTask}
							completeTask={completeTask}
						/>
					)
				})
			}
		</div>
	)
}