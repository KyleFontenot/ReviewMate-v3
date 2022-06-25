 const formatSlug = (title) => {
	let fmtTitle = title;
	if (fmtTitle.includes(" ")) {
		fmtTitle = fmtTitle.replaceAll(" ", "-");
	}
	if (fmtTitle.includes("/")) {
		fmtTitle = fmtTitle.replaceAll("/", "");
	}
	if (fmtTitle.includes("(")) {
		fmtTitle = fmtTitle.slice(fmtTitle.indexOf("("), fmtTitle.indexOf(")"));
	}
	return fmtTitle.toLowerCase();
};

class Module {
	constructor(title, short, long, img, tiers, bullets ) {
		this.title = title;
		this.slug = formatSlug(title);
		this.short = short;
		this.long = long;
		this.imgSrc = img.src || "/src/images/photos/rodnae.jpg";
		this.imgAlt = img.alt;
		this.essentials = tiers[0];
		this.pro = tiers[1];
		this.enterprise = tiers[2];
		// bullets should be an object type
		this.bullets = bullets;
		this.commontraits = false;
		this.tag = this.title
	}
}
class AuditingModule extends Module {
	constructor(title, short, long, img, tiers, bullets) {
		super(title, short, long, img, tiers, bullets);
		this.commontraits = true;
	}
}

const featureList = {
	auditing_modules: [
		new AuditingModule(
			"Inpatient",
			"Thorough IPPS auditing capability is one of our many core standards in ReviewMate's system.",
			[
				"More than three-quarters of the nation's inpatient acute-care hospitals are paid under the inpatient prospective payment system (IPPS). The IPPS methodology pays a flat rate based on the average charges across all hospitals for specific diagnoses, regardless of whether that particular patient costs more or less.",
				"Correct DRG assignment is critical to the health of your organization. Coding audits and using the proper tools will allow financial and compliant stability.",
				"The ReviewMate platform assists medical coding auditors analyze specific elements affecting DRG assignment and reimbursement.",
			],
			{ src: "/src/images/photos/rodnae.jpg", alt: "Doctors meeting together" },
			[true, true, true],
			{
				header: "In addition, our IPPS module features:",
				bullets: [
					"Identification on the screen of codes with MCC/CC/HAC and CMS-HCC values.",
					"Support for Profee audit within the IPPS module.",
				],
			}
		),
		new AuditingModule(
			"Outpatient",
			"Outpatient prospective payment systems extend our core standard auditing features.",
			[
				"The Outpatient Prospective Payment System (OPPS) is the system through which Medicare decides how much money a hospital or community mental health center will get for outpatient care provided to patients with Medicare.    Reimbursement is based on Ambulatory Payment Classification (APC) assignment.",
				"Correct APC assignment is critical to the health of your organization. Coding audits and using the proper tools will allow financial and compliant stability.",
				"The ReviewMate platform assists medical coding auditors analyze specific elements affecting APC assignment and reimbursement.",
			],
			{
				src: "/src/images/photos/mart-production.jpg",
				alt: "Doctors meeting together",
			},
			[true, true, true]
			// add bulletopints here
		),
		new AuditingModule(
			"Profee",
			"Physician Fee schedule and/or Physician office auditing is among the other core auditing standards.",
			[
				"ProFee, or professional fee, refers to coding and billing the physician side of a patient encounter. ProFee coding covers the work performed by the provider and the reimbursement they will receive for the medical services performed.",
				"Becuase Profee billing directly affects providers, it can be more strict than other types of accounts. Becuase of the very narrow margin for error as an auditor, ReviewMate is prepared in addressing the exact punctuality that you need.",
			],
			{
				src: "/src/images/photos/polina.jpg",
				alt: "Female doctor analyzing a chart",
			},
			[true, true, true]
			// add bulletpoints here
		),
		new AuditingModule(
			"ASC",
			"Free-standing ambulatory surgery center is a first-class citizen to the standard auditing capabilities.",
			// not in the business of providing office visits, laboratory services, diagnostic tests,
			[
				"Coding for Ambulatory Surgery Centers is a specialty unto itself. It is a facility service, but Medicare requires ASC’s to send their bills to the professional fee payers through the facility. There is a whole different set of regulations and bundling edits to use for ASCs, mainly pertaining to Medicare.",
				"Given the more strict nature of ASC, ReviewMate excels in maintaining the punctuality needed using it's standard features of communication and transparency.",
			],
			{
				src: "/src/images/photos/ambulance.jpg",
				alt: "Nurses loading a patient into a gurney",
			},
			[true, true, true]
			// add bulletopints here
		),
		new AuditingModule(
			"CMS-HCC",
			"In a risk-adjustment and value-based payment system, HCC is vital in modern health information systems. ReviewMate pushes important statistics like performance targets and averages to keep you on top of your auditing.",
			[
				"Hierarchical condition category (HCC) coding is a risk-adjustment model originally designed to estimate future health care costs for patients. HCC coding helps communicate patient complexity and paint a picture of the whole patient. In addition to helping predict health care resource utilization, RAF scores are used to risk adjust quality and cost metrics. By accounting for differences in patient complexity, quality and cost performance can be more appropriately measured.",
				"CMS uses two models: The first, CMS-HCC is the model used to pay MAOs. The second model was developed after the passage of the Affordable Care Act to pay health insurers in the ACA marketplace. This second model includes categories for infants, children, and all age adults, and includes obstetrical diagnosis codes for high risk OB care. ",
				"ReviewMate pushes important metrics like performance targets and averages to keep you proactive on audits.",
			],
			{
				src: "/src/images/photos/anna-shvets.jpg",
				alt: "Medical machines in a patient's room",
			},
			[true, true, true]
			// add bulletopints here
		),
	],
	reporting: [
		new Module(
			"Accuracy Manager",
			"Choose from a range of parameters and gather custom accuracy rates. Arrange a group, and pull the findings you need exactly.",
			[
				"ReviewMate is an entirely comprehensive tool for summarizing results. Use the Accuracy Manager for querying any type of account or task using a variety of parameters to choose from. These results can be used for tracking live progress, or for export into a type of report. The Accuracy Manager is a great tool for auditors to surgically find neccessary findings, but the Accuracy Manager connects directly with the rest of ReviewMate tools like: Reporting, Audit The Auditor, and Task Workflows.",
			],
			{
				src: "/src/images/photos/lukas.jpg",
				alt: "Statistics on multiple sheets of paper",
			},
			[true, true, true],
			{
				// !!!    
				header: "Common parameters for using Accuracy Manager",
				bullets: [
					""
				],
			}
			// add bulletpoints here
		),
		new Module(
			"Code Finder",
			"Reference specific code instances historically system-wide. Index historically used codes.",
			[
				"An integrated tool with Reviewmate is Code Finder. It directly correlates submitted codes with historical findings of the same code. Instead of querying searches by coder, tasks, facility, or any other parameter, you can query by particular code instances historically, providing a shortcut to particular instances and providing specific insight.",
			],
			{
				src: "/src/images/photos/tima.jpg",
				alt: "Physician searching through hand-written notes",
			},
			[true, true, true]
			// add bulletpoints here
		),
		new Module(
			"Dashboards",
			"Customizable dashboards for organizing the data you need. Underline pertinent workflows for auditors, administrators, or create client dashboards for consuming results.",
			[
				"From common data formations and models in prefabricated arrangements, dashboards deliver important information succinctly. All dashboards feature pie charts, graphs and tables that can be arranged and customized for each user's particular use.",
				"The most common setup is for an auditor to track progress on many different tasks simultaneously, allowing him or her to visually assess one's progress. Additionally, dashboards can be setup for other users such as clients and coders to be able to communicate the entire auditing process more efficiently. "
			],
			{
				src: "/src/images/photos/cottonbro.jpg",
				alt: "Older male looking at statistics on an online dashboard",
			},
			[true, true, true]
			// add bulletpoints here
		),
		new Module(
			"Summary Templates",
			"Unlimited amount of customizable templates for your firm. From branding to typography, keep your reports consistent seamlessly.",
			[
				"Our reporting offer many ways of customizing reports, but templating these reports is where users find great value. Users can choose from common pre-determined templates, or customize your templates to fit your firm's needs.",
				// !!! Would like some specific pre-made templates as suggestions
				""
			],
			{
				src: "/src/images/photos/artem.jpg",
				alt: "Held up printed business summaries",
			},
			[true, true, true]
			// add bulletpoints here
		),
		new Module(
			"Coder Report Cards",
			"Easily digestible reports on accuracy with exact comment notes from all associated reviewers. Distributed coder login credentials allow for direct viewable transcripts for accoutability.",
			[
				"Reports are primarily meant for clients, but offering to involve the relevant coders in audit findings is an excellent way to expand communication and accountability for all parties. Coder Report Cards are a smaller, more concise, and automatic version of reports meant specifically coders.",
				"When auditors allow, coders can sign into ReviewMate using their own credentials for viewing the coder's own performance. ReviewMate empowers both coder and auditor by providing accountability and even offering tools for following up with assessments."
				// !!! Mention something about    "Feeback from coder users is really great."
			],
			{
				src: "/src/images/photos/kindel.jpg",
				alt: "Person viewing printed charts",
			},
			[true, true, true]
			// add bulletpoints here
		),
		new Module(
			"Exportability",
			"All reports can be exported into PDFs, Excel spreadsheets, Word documents.",
			[
				"After aggregating your results into a report of your choosing, ReviewMate offers all standard ways of exporting your report into usable documents. The auditing industry has many interoperability challenges, so these standard document formats are treated as first-class citizens within ReviewMate.",
				// !!! re there other formats that I'm missing here?
			],
			{
				src: "/src/images/photos/pixabay.jpg",
				alt: "Two people conferring over printed statistic summaries ",
			},
			[true, true, true]
			// add bulletpoints here
		),
	],
	security: [
		new Module(
			"Multifactor Authentication",
			"Confirm fidelity with more complex sign-on options. Integration with Google Duo.",
			["ReviewMate treats HIPAA requirements with the utmost importance. Multi-factor Authentication is one way that secures each user's login. By using modern standard email authentication and Google's Duo service, user fidelity is guaranteed.",
			"Google Duo is available on every app store for mobile devices to track a per-device policy to prove authenticity. Google Duo can be disabled with each user's settings."
		],

			{
				src: "/src/images/photos/frederik.jpg",
				alt: "Cell phone on homescreen",
			},
			[false, true, true]
		),
		new Module(
			"LDAP / Active Directory",
			"Connect directly into enterprise LDAP system from within ReviewMate. Master passwords work within ReviewMate for seamless user authentication.",
			[
				`A common industry standard for connecting to a hospital or firm's database –or as we call the firm's "universe of data"– is using LDAP or Active Directory. It is a file-sharing tool for networking connections between computers to other computers or resources. ReviewMate can use LDAP or Active Directory natively in the platform so that data is easily to obtain in a secure, point-to-point method.`,
			],
			{
				src: "/src/images/photos/morillo.jpg",
				alt: "Woman gaining access to server",
			},
			[false, true, true]
		),
		new Module(
			"VPN Integration",
			"End-to-end VPN tunneling compatibility with SOC2 certified compliance.",
			["With many hospitals and institutions, connecting remotely to servers or even to individual computers almost always requires the use of connection to a private VPN. ReviewMate fully supports VPN connections for firectly tunneling connections to the source."],
			{
				src: "/src/images/photos/vpn.jpg",
				alt: "Computer connecting to a VPN service",
			},
			[false, true, true]
		),
	],

	analytics: [
		new Module(
			"Staffing Analytics",
			"Time tracking and progress transparency, against tasks, findings, accounts. Track goals and accountability with visual charts and dashboard plugins.",
			[""],
			{
				src: "/src/images/photos/krukov.jpg",
				alt: "Man nd woman sharing statistics result",
			},
			[false, true, true]
		),

		new Module(
			"System Metrics",
			"Utilize visual graphs and charts to focus on performance-based results. Discover prioritization concerns as they happen.",
			[
				"Analyzing coder accuracy is the primary use for accumulating accuracy rates, but ReviewMate offers visual insight on other systematic details across a user's and even a firm's usage. Particularly when working with a team, performance statistics and workload can be viewed at a glance.", 
				"Components of both dashboards and summaries have many tools to visualize statistical data from findings. We use custom bar charts, line graphs, and pie charts to display any metric that the user sees fit."
				// !!! Can bars charts and graphs be put into the reports? 
			],
			{
				src: "/src/images/photos/negative-space.jpg",
				alt: "Laptop showing results of query",
			},
			[false, true, true]
		),
		new Module(
			"Time Tracking",
			"Keep track of time based on tasks, assignments, and projects. Modular 'tasks' keep chunks of work accountable and trackable.",
			[""],
			{
				src: "/src/images/photos/timetracking.jpg",
				alt: "Physician checking the time on his watch",
			},
			[false, true, true]
		),
	],

	additional_functionalities: [
		new Module(
			"Integration Manager",
			"Import spreadsheets, universes of data, or any other third-party source of data into a central resource. Manage, maintain, and navigate sources dynamically.",
			[`For the many ways a user can integrate and receive data from a source such as a "universe of data", ReviewMate allows in interface for configuring all of the users' connections to the data sources. These connections are what we consider integrations. `],
			// !!! more third-party integrations would be good to mention.
			{
				src: "/src/images/photos/sayles.jpg",
				alt: "Many cords plugged into electronic",
			},
			[false, true, true]
		),

		new Module(
			"Audit The Auditor",
			"Review completed audits and reviews by adding  layered documentation. Original data is referential and integrated.",
			["Every auditor has the ability to interact with already-finished audits. Comments and notes can be attached directly to a specific code, a coder, or for maybe the auditor themselves. By doing this, it creates a layer of communication on top of the rest of the finding's communication shared by coder, auditor, and potentially client.",
		"This way of stacking communication is similar to modern thread-based messaging that enhances transparency for every user of the chain of interaction."],
			{
				src: "/src/images/photos/andrey.jpg",
				alt: "Midsection of adult examining a printed business summary",
			},
			[false, true, true]
		),

		new Module(
			"Document Manager",
			"Share files such as reports, imported spreadsheets, and training materials between different administration levels. HIPAA compliant, and supported by clear version controlling.",
			["Within ReviewMate, users may import and export documents such as Word documents and Excel spreadsheets right into the system. Document Manager is the overview tool for organizing your documents from all sources."
			// !!! I dont know what othe features to talk about.
		],

			{
				src: "/src/images/photos/documentmanager.jpg",
				alt: "Man examining a document",
			},
			[true, true, true]
		),

		new Module(
			"Education Tracking",
			"Directly assign training materials from either custom uploaded training resources such as videos, PDFs, and powerpoints, or use integrated nThrive's training modules. Create and assign quizzes",
			// !!! quizzes? ?
			[
				"While auditors review coders' evaluations, auditors have the option of suggesting training materials. Communication with the coder is optional though training suggestions –especially for common coding mistakes– is a very impactful feature that intuitively helps coder, auditor, and client alike.",
				"Training materials are provided by nThrive, a developed service that provides AHIMA compliant tutorials and relevant articles for assisting in billing education. All codes within ReviewMate are indexable toward training materials, so suggesting training materials is a matter of blicking a button."
			],
			{
				src: "/src/images/photos/goodluz.jpg",
				alt: "Young adults using touchpad",
			},
			[false, true, true]
		),
		new Module(
			"ReviewMate Insights (Benchmarking)",
			"Benchmark and compare performance against other ReviewMate users. Offers advice, community and insight within local scopes, global scopes, or 'millions of records within our community'. Exposes common coding errors that integrate with your Risk Manager.",
			["ReviewMate Insights is an community of all ReviewMate users, assembled on the intent of improving common issues. With the community, users can leverage insight for addressing topics such as most problematic coding errors. These types of insight are viewable to users, but they also contribute into artificial intelligence within ReviewMate to enhance user experience. "],
			{
				src: "/src/images/photos/groupidea.jpg",
				alt: "Group of happy diverse business people standing in studio and holding glowing light",
			},
			[false, true, true]
		),
		new Module(
			"Selector Tools",
			"Expanded utilities for querying your universe of data. Explicit parameters for querying in addition to a randomization query tool.",
			[""],
			{
				src: "/src/images/photos/selection.jpg",
				alt: "Customer group circled",
			},
			[true, true, true]
		),

		new Module(
			"Customizable Tasks",
			"Customizable task responses allow all users to focus on pertinent issues. Field or view verbose responses based on user preferences.",
			[""],
			{
				src: "/src/images/photos/postitnotes.jpg",
				alt: "Three differentl colored Post-it notes on a window",
			},
			[true, true, true]
		),

		new Module(
			"Risk Manager",
			"Leverage artificial intelligence and historical findings to monitor and stay on-top of potential risks.",
			[""],
			{
				src: "/src/images/photos/riskaversion.jpg",
				alt: "Partial view of risk manager blocking toppling dominoes",
			},
			[false, false, true]
		),

		new Module(
			"Record Tracker",
			"View full narratives of records in one integrated place by using timelines within each record.",
			[""],
			{
				src: "/src/images/photos/recordtracker.jpg",
				alt: "Woman and physician meeting over a medical record",
			},
			[false, false, true]
		),
		new Module(
			"Retrospective Physician Queries",
			"Intuitively analyze and report coders' physician queries on compliance, appropriateness, and efficiency.",
			[""],
			{
				src: "/src/images/photos/physicianquery.jpg",
				alt: "Doctor greeting and collaborating with businessman",
			},
			[false, true, true]
		),

		new Module(
			"CDI Communication",
			"Integrate communication with any first-party or third-party CDI team.",
			[""],
			{
				src: "/src/images/photos/CDIcommunication.jpg",
				alt: "Young woman scrutinizing charts on a monitor",
			},
			[false, false, true]
		),
	],
};

export default featureList;
export {formatSlug}