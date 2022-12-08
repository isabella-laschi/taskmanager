import styles from './Task.module.css'
import { Trash } from "phosphor-react"
import classNames from 'classnames'

export default function Task({ id, taskContent, deleteTask, isComplete, completeTask }) {

	function selectTaskToDelete(){
		deleteTask(id)
	}

	function selectTaskToComplete(){
		completeTask(id)
	}

	let labelClasses = classNames(
		styles.title,
		{
			[styles.crossed] : isComplete
		}
	)

	return (
		<div className={styles.task}>
			<label 
				className={labelClasses}
				onMouseDown={selectTaskToComplete}
			>
				{taskContent}
				<input type="checkbox"/>
				<span className={styles.checkmark}></span>
			</label>
			<button onMouseDown={selectTaskToDelete}>
				<Trash 	size={20} />
			</button>
		</div>
	)
}