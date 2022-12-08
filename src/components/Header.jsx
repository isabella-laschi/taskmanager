import styles from './Header.module.css'

export default function Header() {
	return(
		<header className={styles.header}>
			<div>
				<img src='./src/assets/rocket.png' alt='rocket logo' />
				<span className={styles.blue}>to</span>
				<span className={styles.purple}>do</span>
			</div>
		</header>
	)
}