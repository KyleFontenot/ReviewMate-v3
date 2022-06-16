import {createSignal } from 'solid-js'
import styles from './FAQ.module.scss'

function FAQ(props) {
  const [open, setOpen] = createSignal(false);
	let dropdownRef;
	let arrowRef;
  return (
		<div
			class={styles.container}
			style={`${
				open()
					? "background-color: #efefef; box-shadow:0 3px 6px -1px #33333333 inset;"
					: ""
			}${props.style}`}
		>
			<button
				tab-index="0"
				aria-label="Dropdown toggle"
				class={styles.header}
				style={`${open() ? "color: hsl(var(--color1hsl));" : ""}${
					props.last ? "padding-bottom:26px;" : ""
				}`}
				onClick={() => {
					setOpen(!open());
				}}
			>
				{props.header}
				<span
					classList={{ [styles.arrow]: true, [styles.arrowopen]: open() }}
				></span>
			</button>
			<div
				classList={{
					[styles.faqdropdown]: true,
					[styles.dropdownopen]: open(),
				}}
			>
				{props.children}
			</div>
		</div>
	);
}
export { FAQ }