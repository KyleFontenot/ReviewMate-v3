
const title = "ReviewMate";
const description =
	"An all-in-one software platform for medical code auditing. Streamline medical code auditing workflows by expediting findings, integrating communication, maintaining fidelity, and optimizing workflow through automation.";
const canonical = "https://review-mate.com" || "https://deft-cuchufli-bfd7e3.netlify.app/" || undefined;
const image = "/ReviewMate-op.jpg"

const metadata = {
	title: title,
	description: description,
	canonical: canonical,
	openGraph: {
		basic: {
			title: title,
			type: "website",
			image: image|| null,
			url: canonical || null,
		},
		optional: {
			description: description,
			locale: "en_US", 
		}
	},
};
export default metadata;
