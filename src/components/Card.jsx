import styles from "../components/Cardcomponent.module.css"

export default function Cardcomponent( props ){

	return (
		<div>
			<li class={styles['link-card']}>
				<a href={props.href}>
					<h2>
						{props.title}
						<span>&rarr;</span>
					</h2>
					<p>
						{props.body}
					</p>
				</a>
			</li>
		</div>
	)
}

