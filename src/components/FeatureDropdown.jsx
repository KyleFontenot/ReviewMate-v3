import {createSignal} from 'solid-js'
import styles from './FeatureDropdown.module.scss'

export default function PlanDropdown(props) {
  const [open, setOpen] = createSignal(false);
  return (
		<td style="position: relative;">
			<p
				onClick={() => {
					setOpen((open) => !open);
				}}
			>
				{props.header}
			</p>
			<div classList={{ [styles.dropdown]: true, [styles.open]: open }}
			>
        {/* Description */}
        <p>{props.body}</p>
        {/* {props.link && <a href={link}>See More</a>} */}
      </div>
		</td>
	);
}