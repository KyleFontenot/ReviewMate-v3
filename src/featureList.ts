 const formatSlug = (title : string) => {
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
	title: string;
	slug: string;
	section: "Auditing" | "Reporting" | "Monitoring" | "Security";
	link : string;
	short : string;
	long: string[];
	imgSrc: string; 
	imgAlt: string;
	essentials: boolean;
	enterprise : boolean;
	pro : boolean;
	bullets?: {header: string, bullets: string[]};
	commontraits: boolean;
	tags: string[];

	constructor(
		title: string,
		section: "Auditing" | "Reporting" | "Monitoring" | "Security",
		short : string,
		long: string[],
		img: {src: string, alt: string},
		tiers: [boolean, boolean, boolean],
		bullets?: {header: string, bullets: string[]},
	) {
		this.title = title;
		this.slug = formatSlug(title);
		this.section = section;
		this.link = `/${section.toLowerCase()}/${formatSlug(title)}`;
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
	}
}
class AuditingModule extends Module {
	constructor(
		title: string,
		short: string,
		long: string[],
		img: { src: string; alt: string },
		tiers: [boolean, boolean, boolean],
		bullets?: { header: string; bullets: string[] },
	) {
		const section = "Auditing";
		super(title, section, short, long, img, tiers, bullets);
		this.commontraits = true;
	}
}

const featureList = {
	auditing_modules: [
		new AuditingModule(
			"Inpatient",
			"Evaluate DRG assignment within any IPPS account type.",
			[
				"More than three-quarters of the nation's inpatient acute-care hospitals are paid under the inpatient prospective payment system (IPPS). The IPPS methodology pays a flat rate based on the average charges across all hospitals for specific diagnoses, regardless of whether that particular patient costs more or less.",
				"Correct DRG assignment is critical to the health of your organization. Coding audits and using the proper tools will allow financial and compliant stability.",
				"The ReviewMate platform assists medical coding auditors analyze specific elements affecting DRG assignment and reimbursement.",
			],
			{ src: "/photos/rodnae.jpg", alt: "Doctors meeting together" },
			[true, true, true],
			{
				header:
					"In addition to ReviewMate's standard features for auditing, our IPPS module features:",
				bullets: [
					"Identification on the screen of codes with MCC/CC/HAC values.",
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
				src: "/photos/mart-production.jpg",
				alt: "Doctors meeting together",
			},
			[true, true, true],
			{
				header:
					"In addition to ReviewMate's standard features for auditing, our OPPS module features:",
				bullets: [
					"Accuracy rates by Patient Types (observation, ED, clinic, etc).",
					"Ability to assign responsibility on the line-item level to obtain individualized accuracy rates for the different contributors to the UB-04 (coder, charge team, radiology, etc).",
					"Identification of line-items that were recalculated as a result of another line-item revision.",
					"Support for Profee audit within the OPPS module.",
				],
			}
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
				src: "/photos/polina.jpg",
				alt: "Female doctor analyzing a chart",
			},
			[true, true, true],
			{
				header:
					"In addition to ReviewMate's standard features for auditing, our Profee module features:",
				bullets: [
					"Optional logic-based E&M Form tool allows auditors to analyze the provider note and determine the correct E&M level. The tool contains 1995, 1997, and the new 2021 criteria. The E&M Form is exportable for easy reporting and training.",
				],
			}
			// add bulletpoints here
		),
		new AuditingModule(
			"ASC",
			"Free-standing ambulatory surgery center is a first-class citizen to the standard auditing capabilities.",
			// not in the business of providing office visits, laboratory services, diagnostic tests,
			[
				"Coding for Ambulatory Surgery Centers is a specialty unto itself. It is a facility service, but Medicare requires ASC's to send their bills to the professional fee payers through the facility. There is a whole different set of regulations and bundling edits to use for ASCs, mainly pertaining to Medicare.",
				"Given the more strict nature of ASC, ReviewMate excels in maintaining the punctuality needed using it's standard features of communication and transparency.",
			],
			{
				src: "/photos/ambulance.jpg",
				alt: "Nurses loading a patient into a gurney",
			},
			[true, true, true],
			{
				header:
					"In addition to ReviewMate's standard features for auditing, our ASC module features:",
				bullets: [
					"Identification of line-items that were recalculated as a result of another line-item revision.",
				],
			}
			// add bulletopints here
		),
		new AuditingModule(
			"CMS-HCC",
			//  !!! add in a title
			"In a risk-adjustment and value-based payment system, HCC is vital in modern health information systems. ReviewMate pushes important statistics like performance targets and averages to keep you on top of your auditing.",
			[
				"Hierarchical condition category (HCC) coding is a risk-adjustment model originally designed to estimate future health care costs for patients. HCC coding helps communicate patient complexity and paint a picture of the whole patient. In addition to helping predict health care resource utilization, RAF scores are used to risk adjust quality and cost metrics. By accounting for differences in patient complexity, quality and cost performance can be more appropriately measured.",
				"CMS uses two models: The first, CMS-HCC is the model used to pay Medicare Advantage Organizations. The second model was developed after the passage of the Affordable Care Act to pay health insurers in the ACA marketplace. ReviewMate currently has a CMS-HCC module and a HHS-HCC module under construction.",
				"ReviewMate pushes important metrics like performance targets and averages to keep you proactive on audits. ReviewMate has multiple options of controlling HCC audits.",
			],
			{
				src: "/photos/anna-shvets.jpg",
				alt: "Medical machines in a patient's room",
			},
			[true, true, true],
			{
				header:
					"In addition to ReviewMate's standard features for auditing, our ASC module features:",
				bullets: [
					"Overridden HCCs due to the hierarchy structure are identified on the screen so the auditor can readily see which diagnosis codes will be considered into the patient's score.",
					"Original, revised and net HCC weight for each calendar year.",
					"Each calendar year for each patient has an “Analyzer” button where the auditor can view what diagnoses and HCCs are missing for a particular calendar year.",
				],
			}
			// add bulletopints here
		),
	],
	reporting: [
		new Module(
			"Accuracy Manager",
			"Reporting",
			"Choose from a range of parameters and gather custom accuracy rates. Arrange a group, and pull the findings you need exactly.",
			[
				"ReviewMate is an entirely comprehensive tool for summarizing results. Use the Accuracy Manager to compile custom accuracy rates using a variety of parameters. The Accuracy Manager is a great tool for auditors to surgically manipulate accuracy rates, but the Accuracy Manager connects directly with the rest of ReviewMate tools like: Reporting, Audit The Auditor, and Task Workflows.",
			],
			{
				src: "/photos/lukas.jpg",
				alt: "Statistics on multiple sheets of paper",
			},
			[true, true, true],
			{
				// !!!
				header: "Common parameters for using Accuracy Manager",
				bullets: [
					"Facility / Group of facilities",
					"Coder / Group of coders",
					"Date ranges",
					"Providers",
					"Payer",
					"And more",
				],
			}
			// add bulletpoints here
		),
		new Module(
			"Code Finder",
			"Reporting",
			"Reference specific code instances historically system-wide. Index historically used codes.",
			[
				"An integrated tool with ReviewMate is Code Finder. It allows auditors to view historically audited codes to correlate common findings. Instead of querying searches by tasks, facility, or any other parameter, you can query by particular codes. It provides a shortcut to particular instances and provides specific insight on coder performance.",
			],
			{
				src: "/photos/tima.jpg",
				alt: "Physician searching through hand-written notes",
			},
			[true, true, true]
			// add bulletpoints here
		),
		new Module(
			"Dashboards",
			"Reporting",
			"Customizable dashboards for organizing the data you need. Underline pertinent workflows for auditors, administrators, or create client dashboards for consuming results.",
			[
				"From common data formations and models, dashboards deliver important information succinctly. All dashboards feature pie charts, graphs and tables that can be arranged and customized for each user's particular need.",
				"The most common setup is for an auditor to track progress on many different tasks simultaneously, allowing him or her to visually assess one's progress. Additionally, dashboards can be setup for other users such as clients and coders to be able to communicate the entire auditing process more efficiently. ",
			],
			{
				src: "/photos/cottonbro.jpg",
				alt: "Older male looking at statistics on an online dashboard",
			},
			[true, true, true]

			// add bulletpoints here
		),
		new Module(
			"Summary Templates",
			"Reporting",
			"Unlimited amount of customizable templates for your firm. From branding to typography, keep your reports consistent seamlessly.",
			[
				"Our Summary reports offer many ways of customizing reports, but templating these reports is where users find great value. Users can generate reports from templates, or create an unlimited amount of custom templates to fit your firms' needs.",
				"All custom templates become easily shareable within your company's designated system.",
				"Customization options are endless. With hundreds of components to choose from, users can arrange and format every aspect of the template.",
			],
			{
				src: "/photos/artem.jpg",
				alt: "Held up printed business summaries",
			},
			[true, true, true]
			// add bulletpoints here
		),
		new Module(
			"Coder Report Cards",
			"Reporting",
			"Easily digestible reports on accuracy with exact comment notes from all associated reviewers. Distributed coder login credentials allow for direct viewable transcripts for accoutability.",
			[
				"Reports are primarily meant for clients, but offering to involve the relevant coders in audit findings is an excellent way to expand communication and accountability for all parties. Coder Report Cards are a smaller, more concise, and automatic version of reports meant specifically coders.",
				"When auditors allow, coders can sign into ReviewMate using their own credentials for viewing their own performance. Conversely, firms may easily generate documents like PDFs to inform the coder on his or her performance.",
				"ReviewMate empowers both coder and auditor by providing accountability and transparency.",
			],
			{
				src: "/photos/kindel.jpg",
				alt: "Person viewing printed charts",
			},
			[true, true, true]
			// add bulletpoints here
		),
		new Module(
			"Exportability",
			"Reporting",
			"All reports can be exported into PDFs, Excel spreadsheets, Word documents.",
			[
				"After aggregating your results into a report of your choosing, ReviewMate offers standard ways of exporting your report into usable documents, including PDF, Excel and Word. The auditing industry has many interoperability challenges, so these standard document formats are treated as first-class citizens within ReviewMate. ",
			],
			{
				src: "/photos/pixabay.jpg",
				alt: "Two people conferring over printed statistic summaries ",
			},
			[true, true, true]
			// add bulletpoints here
		),
	],
	security: [
		new Module(
			"Multifactor Authentication",
			"Security",
			"Confirm fidelity with more complex sign-on options. Integration with Google Duo.",
			[
				"ReviewMate treats HIPAA requirements with the utmost importance. Multi-factor Authentication is one way that secures each user's login. By using modern email authentication and Google's Duo service, user fidelity is guaranteed.",
				"Google Duo is available on every app store for mobile devices to track a per-device policy to prove authenticity. Google Duo is optional and can be disabled with each user's settings.",
			],

			{
				src: "/photos/frederik.jpg",
				alt: "Cell phone on homescreen",
			},
			[false, true, true]
		),
		new Module(
			"LDAP / Active Directory",
			"Security",
			"Connect directly into enterprise LDAP system from within ReviewMate. Master passwords work within ReviewMate for seamless user authentication.",
			[
				`A common industry standard for connecting to a hospital or firm's database –or as we call the firm's "universe of data"– is using LDAP or Active Directory. It is a file-sharing tool for networking connections between computers to other computers or resources. ReviewMate can use LDAP or Active Directory natively in the platform so that data is easy to obtain in a secure, point-to-point method.`,
			],
			{
				src: "/photos/morillo.jpg",
				alt: "Woman gaining access to server",
			},
			[false, true, true]
		),
		new Module(
			"VPN Integration",
			"Security",
			"End-to-end VPN tunneling compatibility with SOC2 certified compliance.",
			[
				"With many hospitals and institutions, connecting remotely to servers or even to individual computers almost always requires the use of connection to a private VPN. ReviewMate fully supports VPN connections for directly tunneling connections to the source for ensuring safety and security for PHI in a HIPAA-compliant manner.",
			],
			{
				src: "/photos/vpn.jpg",
				alt: "Computer connecting to a VPN service",
			},
			[false, true, true]
		),
	],

	analytics: [
		new Module(
			"Staffing Analytics",
			"Monitoring",
			"Time tracking and progress transparency, against tasks, findings, accounts. Track goals and accountability with visual charts and dashboard plugins.",
			[
				"ReviewMate offers many ways of tracking time that empower both subjective progression and for external transparency.",
				"Tasks are the typical unit of grouping records together for the use of analyzing progression on. ReviewMate records metadata on each one of these tasks which shares directly with clients and users. On teams over-looking auditors, this boon offers essential accountability.",
				"Tasks are automatically tracked and indexed, but audits are never completely predictable within time contraints. Users have tools for augmenting the built-in time tracking software for claiming additional time into more-intensive auditing tasks.",
			],
			{
				src: "/photos/krukov.jpg",
				alt: "Man and woman sharing statistics result",
			},
			[false, true, true]
		),

		// new Module(
		// 	"System Metrics",
		// 	"Monitoring",
		// 	"Utilize visual graphs and charts to focus on performance-based results. Discover prioritization concerns as they happen.",
		// 	[
		// 		"Analyzing coder accuracy is the primary use for accumulating accuracy rates, but ReviewMate offers visual insight on other systematic details across a user's and even a firm's usage. Particularly when working with a team, performance statistics and workload can be viewed at a glance.",
		// 		"Components of both dashboards and summaries have many tools to visualize statistical data from findings. We use custom bar charts, line graphs, and pie charts to display any metric that the user sees fit.",
		// 		// !!! Can bars charts and graphs be put into the reports?
		// 	],
		// 	{
		// 		src: "/src/images/photos/negative-space.jpg",
		// 		alt: "Laptop showing results of query",
		// 	},
		// 	[false, true, true]
		// ),
	],

	additional_functionalities: [
		new Module(
			"Document Manager",
			"Reporting",
			"Share files such as reports, imported spreadsheets, and training materials between different administration levels. HIPAA compliant, and supported by clear version controlling.",
			[
				"Document manager is a simple ECM system, in which you can easily update, track and manage your documents in a secure and HIPPA compliant environment. Document Manager is module in the ReviewMate platform that allows users to store their audit related files in a centralized and secure location.",
				"In addition, they can easily share files with other users, departments, or certain user roles. Every file being imported into the ReviewMate platform will reside in the Document Manager module, including files that are loaded via Integration Manager from an EMR or an abstracting system. Each document will be assigned a unique identifier to help manage version control and ensure proper availability and backup procedures are performed. The system will capture all necessary logging information to identify users that accessed the document and download it.", 
				"Only users with active credentials and have the proper access privileges can access files from the Document Manager.Document manager work on all popular browsers and supports all known file extensions including Microsoft Word, Excel and PowerPoint, PDF, CSV, XML, JSON, TXT, JPG, PNG, BMP, GIF, HL7, EDI Files such as 837 and others."
			],

			{
				src: "/photos/documentmanager.jpg",
				alt: "Man examining a document",
			},
			[true, true, true]
		),
		new Module(
			"Selector Tools",
			"Auditing",
			"Expanded utilities for querying your universe of data. Explicit parameters for querying in addition to a randomization query tool.",
			[
				"Selector tools are essential to any auditor, and ReviewMate focuses on creating easy tools for every scenario to empower the auditor. An assortment of querying parameters are integrated for every auditing account, used for extracting the exact accounts that you need. The randomizer is an additional way to query a random set of accounts.",
				"In addition to flexible manual selections, all queries and sample selections can be customized to run automatically. Routine audits are standard expectations for end-user firms. ReviewMate can automate these tasks with a few clicks, which can automatically populate tasks/findings.",
			],
			{
				src: "/photos/selection.jpg",
				alt: "Customer group circled",
			},
			[true, true, true]
		),
		new Module(
			"Customizable Tasks",
			"Monitoring",
			"Customizable task responses allow all users to focus on pertinent issues. Field or view verbose responses based on user preferences.",
			[
				"Tasks in ReviewMate are units or sets of accounts that index progression and communication notes. Tasks offer convenient ways to interact with a compartmentalized set of findings by being able to add this information to any dashboard, export into a report, or to isolate accountability using online logins with end-users.",
				"Tasks not only provide ways to chunk the auditor's work, but it's very important for differentiating whole audits between different clients and/or firms. Auditors often balance whole jobs with communication post-evaluation, so ReviewMate keeps these tasks still at arms-reach.",
			],
			{
				src: "/photos/postitnotes.jpg",
				alt: "Three differentl colored Post-it notes on a window",
			},
			[true, true, true]
		),
		new Module(
			"Integration Manager",
			"Security",
			"Import spreadsheets, universes of data, or any other third-party source of data into a central resource. Manage, maintain, and navigate sources dynamically.",
			[
				`For the many ways a user can integrate and receive data from a source such as a "universe of data". ReviewMate allows an interface for configuring and managing all of the users' connections to data sources. These connections are what we consider integrations. For setting up new connections, an easy setup process enables a stream of data right into reviews and tasks.`,
			],
			{
				src: "/photos/sayles.jpg",
				alt: "Many cords plugged into electronic",
			},
			[false, true, true]
		),

		new Module(
			"Audit The Auditor",
			"Monitoring",
			// !!! idk
			"Review completed audits and reviews by adding layered documentation. Original data is referential and integrated.",
			[
				"Every auditor has the ability to interact with already-finished audits. Comments and notes can be attached directly to a specific code, a coder, or for maybe the auditor themselves. By doing this, it creates a layer of communication on top of the rest of the finding's communication shared by coder, auditor, and potentially client.",
				"This way of stacking communication is similar to modern thread-based messaging that enhances transparency for every user of the chain of interaction.",
			],
			{
				src: "/photos/andrey.jpg",
				alt: "Midsection of adult examining a printed business summary",
			},
			[false, true, true]
		),

		new Module(
			"Education Tracking",
			"Monitoring",
			"Directly assign training materils from either custom uploaded training resources such as videos, PDFs, and powerpoints, or use integrated nThrive's training modules.",
			[
				"While auditors review coders' evaluations, auditors have the option of suggesting training materials. Communication with the coder is optional though training suggestions –especially for common coding mistakes– is a very impactful feature that intuitively helps coder, auditor, and client alike.",
				"Training materials are provided by nThrive, a developed service that provides AHIMA compliant tutorials and relevant articles for assisting in billing education. All codes within ReviewMate are indexable toward training materials, so suggesting training materials is a matter of blicking a button.",
			],
			{
				src: "/photos/goodluz.jpg",
				alt: "Young adults using touchpad",
			},
			[false, true, true]
		),
		new Module(
			"ReviewMate Insights",
			"Monitoring", // !!! or reporting?
			"Benchmark and compare performance against other ReviewMate users. Offers advice, community and insight within local scopes, global scopes, or 'millions of records within our community'. Exposes common coding errors that integrate with your Risk Manager.",
			[
				"ReviewMate Insights is an community of all ReviewMate users, assembled on the intent of improving common issues. With the community, users can leverage insight for addressing topics such as most problematic coding errors. These types of insight are viewable to users, but they also contribute into artificial intelligence within ReviewMate to enhance user experience. ",
				"",
			],
			{
				src: "/photos/groupidea.jpg",
				alt: "Group of happy diverse business people standing in studio and holding glowing light",
			},
			[false, true, true]
		),

		new Module(
			"Risk Manager",
			"Monitoring",
			"Leverage artificial intelligence and historical findings to monitor and stay on-top of potential risks.",
			[
				"Based on standard information being imported and evaluated, ReviewMate can offer automatic guidance for typically overlooked issues.",
			],
			{
				src: "/photos/riskaversion.jpg",
				alt: "Partial view of risk manager blocking toppling dominoes",
			},
			[false, false, true]
		),

		new Module(
			"Record Tracker",
			"Auditing",
			"View full narratives of records in one integrated place by using timelines within each record.",
			[
				"ReviewMate offers an intuitive way of observing and analyzing a thread of changes regarding a record. The auditor is empowered full transparency of the conversations between all parties from beginning of the diagnosis, to the rebuttal process without having to switch with external tools.",
			],
			{
				src: "/photos/recordtracker.jpg",
				alt: "Woman and physician meeting over a medical record",
			},
			[false, false, true]
		),
		new Module(
			"Physician Query Analysis",
			//  !!! This title was to be re-written
			"Auditing",
			"Intuitively analyze and report coders' physician queries on compliance, appropriateness, and efficiency.",
			[
				"Context is incredibly important for auditing. For broadening the scope of communication within ReviewMate, Physician Query Analyses allows auditors to examine coders' submitted physician queries.",
				"Physician queries are important for both compliance, and for providing context into the record's narrative. Auditors may simply inspect and refer to physician queries right in the timeline of the record.",
			],
			{
				src: "/photos/physicianquery.jpg",
				alt: "Doctor greeting and collaborating with businessman",
			},
			[false, true, true]
		),

		new Module(
			"CDI Communication",
			"Reporting",
			"Integrate communication with any first-party or third-party CDI team right from within ReviewMate.",
			[
				"ReviewMate aims to be an all-in-one solution, so communication solutions for connecting with a CDI team are integrated right within standard reporting workflows.",
				"Oftentimes auditors report not only to clients, but to an adjacent Clinical Documentation Improvement team as well. Once an auditor has aggregated findings and is ready to report, ReviewMate allows connecting to a designated external CDI team via email, exported documents, or a special client-facing login portal. The login portal ensures reports give the most accurate up-to-date information.",
			],
			{
				src: "/photos/CDIcommunication.jpg",
				alt: "Young woman scrutinizing charts on a monitor",
			},
			[false, false, true]
		),
	],
};

export default featureList;
export {formatSlug}
export type {Module}