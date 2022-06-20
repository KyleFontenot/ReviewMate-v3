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
	constructor(title, short, long, img, tiers, bullets, ) {
		this.title = title;
		this.slug = formatSlug(title);
		this.short = short;
		this.long = long;
		this.imgSrc = img.src || "/src/images/photos/rodnae.jpg";
		this.imgAlt = img.alt;
		this.essentials = tiers[0];
		this.pro = tiers[1];
		this.enterprise = tiers[2];
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
			[
				"Identification on the screen of codes with MCC/CC/HAC and CMS-HCC values.",
				"Support for Profee audit within the IPPS module.",
			]
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
			["Long paragraph"],
			{
				src: "/src/images/photos/polina.jpg",
				alt: "Female doctor analyzing a chart",
			},
			[true, true, true]
			// add bulletopints here
		),
		new AuditingModule(
			"ASC",
			"Free-standing ambulatory surgery center is a first-class citizen to the standard auditing capabilities.",
			["Long paragraph"],
			{
				src: "/src/images/photos/ambulance.jpg",
				alt: "Nurses loading a patient into a gurney",
			},
			[true, true, true]
			// add bulletopints here
		),
		new AuditingModule(
			"CMS-HCC",
			"CMS(centers for medical service), Hierarchical Condition Categories, Risk Adjustment.",
			["Long paragraph"],
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
			"Choose from a range of parameters and gather custom accuracy rates.",
			[
				"Allows the slicing and dicing your data for aggregating custom accuracy rates.  View accuracy rates by different entities, groups, or date ranges.",
				"Allows the slicing and dicing your data for aggregating custom accuracy rates.  View accuracy rates by different entities, groups, or date ranges.",
			],
			{
				src: "/src/images/photos/lukas.jpg",
				alt: "Statistics on multiple sheets of paper",
			},
			[true, true, true]
			// add bulletpoints here
		),
		new Module(
			"Code Finder",
			"Reference specific code instances historically system-wide. Expand when codes were used previously etc.",
			[
				"Allows to slice and dice your data for  View accuracy rates for different entities, groups, dates, by slicing result findings.",
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
				"Allows to slice and dice your data for  View accuracy rates for different entities, groups, dates, by slicing result findings.",
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
				"Unlimited amount of customizable templates for your firm. From branding to typography, keep your reports consistent seamlessly.",
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
				"Unlimited amount of customizable templates for your firm. From branding to typography, keep your reports consistent seamlessly.",
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
				"Unlimited amount of customizable templates for your firm. From branding to typography, keep your reports consistent seamlessly.",
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
			[""],
			{
				src: "/src/images/photos/frederik.jpg",
				alt: "Cell phone on homescreen",
			},
			[false, true, true]
		),
		new Module(
			"LDAP / Active Directory",
			"Connect directly into enterprise LDAP system from within ReviewMate. Master passwords work within ReviewMate for seamless user authentication.",
			[""],
			{
				src: "/src/images/photos/morillo.jpg",
				alt: "Woman gaining access to server",
			},
			[false, true, true]
		),
		new Module(
			"VPN Integration",
			"End-to-end VPN tunneling compatibility with SOC2 certified compliance.",
			[""],
			{
				src: "/src/images/photos/vpn.jpg",
				alt: "Computer connecting to a VPN service",
			},
			[false, true, true]
		),
	],

	analytics: [
		new Module(
			"Staffing Analaytics",
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
			[""],
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
			[""],
			{
				src: "/src/images/photos/sayles.jpg",
				alt: "Many cords plugged into electronic",
			},
			[false, true, true]
		),

		new Module(
			"Audit The Auditor",
			"Review completed audits and reviews by adding  layered documentation. Original data is referential and integrated.",
			[""],
			{
				src: "/src/images/photos/andrey.jpg",
				alt: "Midsection of adult examining a printed business summary",
			},
			[false, true, true]
		),

		new Module(
			"Document Manager",
			"Share files such as reports, imported spreadsheets, and training materials between different administration levels. HIPAA compliant, and supported by clear version controlling.",
			[""],
			{
				src: "/src/images/photos/documentmanager.jpg",
				alt: "Man examining a document",
			},
			[true, true, true]
		),

		new Module(
			"Education Tracking",
			"Directly assign training materials from either custom uploaded training resources such as videos, PDFs, and powerpoints, or use integrated nThrive's training modules. Create and assign quizzes",
			[""],
			{
				src: "/src/images/photos/goodluz.jpg",
				alt: "Young adults using touchpad",
			},
			[false, true, true]
		),
		new Module(
			"ReviewMate Insights (Benchmarking)",
			"Benchmark and compare performance against other ReviewMate users. Offers advice, community and insight within local scopes, global scopes, or 'millions of records within our community'. Exposes common coding errors that integrate with your Risk Manager.",
			[""],
			{ src: "/src/images/photos/groupidea.jpg", alt: "Group of happy diverse business people standing in studio and holding glowing light" },
			[false, true, true]
		),
		new Module(
			"Selector Tools",
			"Expanded utilities for querying your universe of data. Explicit parameters for querying in addition to a randomization query tool.",
			[""],
			{ src: "/src/images/photos/selection.jpg", alt: "Customer group circled" },
			[true, true, true]
		),

		new Module(
			"Customizable Tasks",
			"Customizable task responses allow all users to focus on pertinent issues. Field or view verbose responses based on user preferences.",
			[""],
			{ src: "/src/images/photos/postitnotes.jpg", alt: "Three differentl colored Post-it notes on a window" },
			[true, true, true]
		),

		new Module(
			"Risk Manager",
			"Leverage artificial intelligence and historical findings to monitor and stay on-top of potential risks.",
			[""],
			{ src: "/src/images/photos/riskaversion.jpg", alt: "Partial view of risk manager blocking toppling dominoes" },
			[false, false, true]
		),

		new Module(
			"Record Tracker",
			"View full narratives of records in one integrated place by using timelines within each record.",
			[""],
			{ src: "/src/images/photos/recordtracker.jpg", alt: "Woman and physician meeting over a medical record" },
			[false, false, true]
		),
		new Module(
			"Retrospective Physician Queries",
			"Intuitively analyze and report coders' physician queries on compliance, appropriateness, and efficiency.",
			[""],
			{ src: "/src/images/photos/physicianquery.jpg", alt: "Doctor greeting and collaborating with businessman" },
			[false, true, true]
		),

		new Module(
			"CDI Communication",
			"Integrate communication with any first-party or third-party CDI team.",
			[""],
			{ src: "/src/images/photos/CDIcommunication.jpg", alt: "Young woman scrutinizing charts on a monitor" },
			[false, false, true]
		),
	],
};

export default featureList;
export {formatSlug}