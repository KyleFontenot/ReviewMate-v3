import { createSignal } from 'solid-js'
// import styles from './FeatureDropdown.module.scss'

function FeatureDropdown(props) {
  const [open, setOpen] = createSignal(false);
	let dropdownRef;
	let arrowRef;

  return (
		<div style="position: relative;" class="fdd">
			<button
				tab-index="0"
				aria-label="Dropdown toggle"
				class="fddheader"
				style={`${open() ? 'background-color: #ebebeb;' : ''}`}
				onClick={() => {
					hideDropdowns()
					dropdownRef.classList.add('dropdown--open')
					arrowRef.classList.add('arrow--open')
				}}
			>
				{props.header}
				<span
					class="arrow"
					ref={arrowRef}
				></span>
			</button>
			<div
				class="dropdown"
				ref={dropdownRef}
			>
				<p>{props.body}</p>
				{props.link && props.link !== null ? (
					<a href={props.link}>
						See More
						<img
							src="/icons/diagonal-arrow.svg"
							alt="Arrow link icon"
							role="presentation"
							class="linkarrow"
						/>
					</a>
				) : (
					""
				)}
			</div>
		</div>
	);
}

function hideDropdowns() {
	document.querySelectorAll(".dropdown--open").forEach((each) => {
		each.classList.remove("dropdown--open");
	});
	document.querySelectorAll(".arrow").forEach((each) => {
		each.classList.remove("arrow--open");
	});
}
export { FeatureDropdown, hideDropdowns }