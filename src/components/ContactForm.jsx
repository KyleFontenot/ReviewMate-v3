
import {createSignal} from "solid-js"
import styles from './ContactForm.module.scss'
import { AsYouType } from "libphonenumber-js";

export default function ContactForm (){
  let phoneFieldRef;
  let emailFieldRef;
  let errorRef
  const [errorMessage, seterrorMessage] = createSignal(' ');
	let phoneValue;
	let ayt = new AsYouType("US");

	let regEmailtest = new RegExp(
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	);

	function checkValidInput( event, type) {
		if (type == "email"){
			if (!regEmailtest.test(event.target.value)) {
				emailFieldRef.classList.add(styles.error);
				seterrorMessage("Please provide an email address");
				// event.target.focus();
			} else {
			}
		}
		else if (type == "phone") {
			if (ayt.isValid()) {
				console.log("hoorary");
				e.target.value = phoneValue;
			} else {
				ayt.reset();
				event.target.value = "";
				seterrorMessage("Is that phone number right?");
				phoneFieldRef.classList.add(styles.warning);
				
			}
		}
	}

  return (
	<div class={styles.container}>
    <h2><img src="/reviewmate-smallerlogo(regular).svg" class={styles.headerimg}/>Contact Us</h2>
		<form
			name="contact"
			method="POST"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			formNoValidate
			noValidate
			action="/submitted"
			class={styles.form}
		>
			<input type="hidden" name="bot-field" id="formbotfield" />
			<input type="hidden" name="form-name" value="contact" />

			<label htmlFor="name">Name:</label>
			<input
				type="text"
				name="Name"
				placeholder="Name"
				id="nameField"
				classList={{ [styles.input]: true }}
				required
			/>

			<label htmlFor="emailField">Email:</label>
			<input
				type="email"
				ref={emailFieldRef}
				name="Email"
				placeholder="email@email.com"
				id="emailField"
				onFocusOut={(e) => {
					checkValidInput(e, "email");
				}}
				classList={{ [styles.input]: true }}
				required
			/>
			<label htmlFor="emailField">Phone (Optional):</label>
			{/* Need a number formatter in solidjs */}
			<input
				type="tel"
				name="Phone"
				placeholder="+1 (123) 867-5309"
				id="phoneField"
				ref={phoneFieldRef}
				onInput={(e) => {
					ayt.reset();
					phoneValue = ayt.input(e.target.value);
				}}
				onFocusOut={(e) => {
					checkValidInput(e, "phone");
				}}
				classList={{ [styles.input]: true }}
			/>

			<label htmlFor="entityField">Entity:</label>
			<input
				type="text"
				name="Entity"
				placeholder="Company"
				id="entityField"
				classList={{ [styles.input]: true }}
			/>

			<div class={styles.radiodiv}>
				<div>
					<input
						type="checkbox"
						id="auditor"
						name="inquiry"
						value="auditing"
						class={styles.check}
					/>
					<label for="auditor">Auditing Interest</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="administration"
						name="inquiry"
						value="administration"
					/>
					<label for="administration">Administration Interest </label>
				</div>

				<div>
					<input
						type="checkbox"
						id="generalquestions"
						name="inquiry"
						value="general"
					/>
					<label for="generalquestions">General Questions</label>
				</div>

			</div>

			<label htmlFor="commentField">Comments:</label>
			<input
				type="textarea"
				rows={2}
				cols={10}
				name="Info"
				id="commentField"
				classList={{ [styles.input]: true }}
			/>
			<div id="errorMessage" class={styles.errorMessage} ref={errorRef}>
				{errorMessage()}
			</div>
			<button
				type="button"
				onClick={() => {
					// checkForm
				}}
				classList={{ [styles.button]: true }}
			>
				Send
			</button>
		</form>
	</div>			
	);
}
