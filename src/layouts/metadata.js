
const title = "ReviewMate";
const description =
	"Streamline medical code auditing workflows by expediting findings, integrating communication, and maintaining fidelity.";
const canonical = "https://review-mate.com" | undefined;
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
	twitter: {
		card: "<twitter:card>" || null,
		site: "<twitter:site>" || null,
		creator: "<twitter:creator>" || null,
	},
};
export default metadata;
