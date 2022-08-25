
import {createEffect, createSignal} from "solid-js"
import styles from './ContactForm.module.scss'
import { AsYouType } from "libphonenumber-js";

export default function ContactForm(){
	const [demoMenuOpen, setDemoMenuOpen] = createSignal(false)
	const [nameInput, setNameInput] = createSignal('')
	let nameRef;
  let phoneFieldRef;
  let emailFieldRef;
  let errorRef;
	let modalRef;
	let demoMenuRef;
  const [errorMessage, seterrorMessage] = createSignal(' ');

	let phoneValue;
	let ayt = new AsYouType("US");

	let regEmailtest = new RegExp(
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	);
	const modalOpenClass = styles.openModal;

	const modalAlert = (message, color = 'green') => {
		modalRef.style.outline = `5px solid ${
			color === "red" ? "#db4736" : "#9bea78"
		}`;
		console.log(modalRef.style)
		console.log(color)
		modalRef.innerHTML = message;
		modalRef.style.zIndex = 10;
		modalRef.classList.add(modalOpenClass);
		setTimeout(() => {
			modalRef.classList.remove(modalOpenClass);
			setTimeout(() => {
				modalRef.style.zIndex = "-1"
			}, 400)
		}, 3000);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let myForm = document.getElementById("contactform");
		let formData = new FormData(myForm);
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => {
				console.log("Form successfully submitted")
				modalAlert(`
						<div>
							<h3>Thank you, ${nameInput()}!</h3>
							<p>We'll get back to you as soon as possible</p>
						</div>`, 'green');
			})
			.catch((error) => {
				modalAlert(`
						<div>
							<h3>Uh Oh</h3>
							<p>Something went wrong. Try again in a few moments.</p>
						</div>`, 'red');
			});
	};


	function checkValidInput( event, type) {
		if (type == "email"){
			if (!regEmailtest.test(event.target.value)) {
				emailFieldRef.classList.add(styles.error);
				seterrorMessage("Please provide an email address");
			} else {
			}
		}
		else if (type == "phone") {
			if (ayt.isValid()) {
				console.log("hooray");
				e.target.value = phoneValue;
			} else {
				ayt.reset();
				event.target.value = "";
				seterrorMessage("Is that phone number right?");
				phoneFieldRef.classList.add(styles.warning);
			}
		}
	}

	const resetCheckmarks = () => {
		for (let div of demoMenuRef.children){
			if ((div.children.length > 1) && 
			(div.children[0].checked === true)){
				div.children[0].checked = false;
			}
		}
	};

  return (
		<div class={styles.container}>
			<h2>
				<img
					src="/reviewmate-smallerlogo-regular.svg"
					class={styles.headerimg}
				/>
				Contact Us
			</h2>
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				formNoValidate
				noValidate
				action="/submitted"
				id="contactform"
				class={styles.form}
			>
				<input type="hidden" name="bot-field" id="formbotfield" />
				<input type="hidden" name="form-name" value="contact" />

				<div class={styles.inputdiv}>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="Name"
						placeholder="Name"
						id="nameField"
						classList={{ [styles.input]: true }}
						ref={nameRef}
						required
						oninput={e => {
							setNameInput(nameRef.value)
						}}
					/>
				</div>

				<div class={styles.inputdiv}>
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
				</div>

				<div class={styles.inputdiv}>
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
				</div>

				<div class={styles.inputDiv}>
					<label htmlFor="entityField">Entity:</label>
					<input
						type="text"
						name="Entity"
						placeholder="Company"
						id="entityField"
						classList={{ [styles.input]: true }}
					/>
				</div>

				<div class={styles.radiodiv}>
					<div>
						<input
							type="radio"
							id="auditor"
							name="inquiry"
							value="auditing"
							class={styles.check}
							onclick={(e) => {
								setDemoMenuOpen(true);
								// assessChecked()
							}}
						/>
						<label for="auditor">Interested in Demo</label>

						<div
							classList={{
								[styles.specialDemoMenu]: true,
								[styles.open]: demoMenuOpen(),
							}}
							ref={demoMenuRef}
						>
							<h3>What are you most interested in?</h3>

							<div class={styles.inputdiv}>
								<input
									type="checkbox"
									id="demoIPPS"
									name="demoIPPS"
									value="Inpatient"
								/>
								<label for="demoIPPS">Inpatient Auditing</label>
							</div>
						</div>

					</div>

					<div>
						<input
							type="radio"
							id="generalquestions"
							name="inquiry"
							value="general"
							onclick={() => {
								setDemoMenuOpen(false);
								resetCheckmarks();
							}}
						/>
						<label for="generalquestions">General Questions</label>
					</div>
				</div>

				<label htmlFor="commentField">Comments:</label>
				<input
					type="textarea"
					rows="2"
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
						handleSubmit()
						// modalAlert(`
						// <div>
						// 	<h3>Thank you, ${nameInput()}!</h3>
						// 	<p>We'll get back to you as soon as possible</p>
						// </div>`, 'red');
					}}
					classList={{ [styles.button]: true }}
				>
					Send
				</button>
			</form>
			<div class={styles.modal} ref={modalRef}></div>
		</div>
	);
}
