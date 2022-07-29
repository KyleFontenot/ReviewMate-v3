import { createSignal, createEffect, onMount } from "solid-js";
import styles from './CommonTraits.module.scss'

export default function CommonTraits(props) {
	const [open, setOpen] = createSignal(false);
	const [initialHeight, setInitialHeight] = createSignal('');
	let dropdown;
	onMount(() => {
		dropdown.style.maxHeight = "unset"
		setInitialHeight(
			dropdown.scrollHeight
		);
		// console.log(dropdown.scrollHeight);
		dropdown.style.height = "28rem";
	});

  createEffect(() => {
		window.onresize = setInitialHeight(dropdown.scrollHeight);
		if (open()) {
			const height = window.getComputedStyle(dropdown).height;
			dropdown.style.height = `${initialHeight()}px`;
		} else {
			dropdown.style.height = "28rem";
		}
	})
	createEffect(() => {
		window.onresize = setInitialHeight(dropdown.scrollHeight);
	})
	
	return (
		<div
			classList={{ [styles.div]: true, [styles.show]: open() }}
			ref={dropdown}
		>
			<h2 class={styles.header}>
				All auditing account types are considered part of the core of
				ReviewMate's auditing system that covers many features such as:
			</h2>
			<ul classList={{ [styles.ul]: true, [styles.show]: open() }}>
				<li>
					Customizable settings for analyzing overall accuracy rates. Adjust for
					particular coders, tasks or firms.
				</li>
				<li>
					Grouping and pricing take place within the software eliminating the
					need for auditor to &quot;toggle&quot; between an encoder and
					ReviewMate for better resequencing decisions.
				</li>
				<li>
					Full suite of references including Coding Clinic, CPT Assistant,
					Coding Clinic for HCPCS, Clinotes, Principal Diagnosis Analysis, DRG
					Analysis, and AHA Coding Handbook
				</li>
				<li>Built-in code look-up for performing research intuitively.</li>
				<li>
					Full suite of edits/warnings including gender and age conflicts, MCE
					edits, critical error and TruCode warnings.
				</li>
				<li>Reconciliation of rebuttals occurs inside of ReviewMate.</li>
				<li>
					Conversations between the auditor and coder are saved in a
					chronological manner and can be accessed by any user.
				</li>
				<li>
					Accuracy rates available real-time and can be sliced and diced to
					accommodate different situations and date patterns.
				</li>
				<li>
					Extensive library of customizable and exportable reports from raw data
					to Executive Summaries.
				</li>
				<li>Customizable dashboards to enhance the user experience.</li>
				<li>
					Multiple user levels allow view-only access to any interested parties
					providing transparency within your organization.
				</li>
				<li>
					&quot;Audit the Auditor&quot; available for a higher-level quality
					check of any audit in ReviewMate.
				</li>
				<li>
					Identification on the screen of codes with CMS-HCC
					values.
				</li>
			</ul>
			<button
				class={styles.seemore}
				aria-label="See more common capabilities of all auditing modules"
				onClick={(open) => setOpen((open) => !open)}
			>
				{open() === true ? "Show Less" : "Show More"}
			</button>
		</div>
	);
}

