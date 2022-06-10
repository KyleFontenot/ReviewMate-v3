const formatSlug = (title) => {
	if(title.includes(' ')){
		title.replace(' ', '-')
	}
	return title.toLowerCase()
}

class FeatureParent {
	constructor(title){
		this.title = title
	}
}
class Module extends FeatureParent {
	constructor(title, short, long, img, tiers, bullets) {
		super(title);
		this.slug = formatSlug(title);
		this.short = short;
		this.long = long;
		this.imgSrc = img.src || "/src/images/photos/rodnae.jpg";
		this.imgAlt = img.alt;
		this.essentials = tiers;
		this.pro = tiers[1];
		this.enterprise = tiers[2];
		this.bullets = bullets
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
				"The ReviewMate platform assists medical coding auditors analyzing specific elements affecting DRG assignment and reimbursement.",
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
			["Long paragraph"],
			{ src: "/src/images/photos/rodnae.jpg", alt: "Doctors meeting together" },
			[true, true, true],
			// add bulletopints here
		),
		new AuditingModule(
			"Profee",
			"Physician Fee schedule and/or Physician office auditing is among the other core auditing standards.",
			["Long paragraph"],
			{ src: "/src/images/photos/rodnae.jpg", alt: "Doctors meeting together" },
			[true, true, true],
			// add bulletopints here
		),
		new AuditingModule(
			"ASC",
			"Free-standing ambulatory surgery center is a first-class citizen to the standard auditing capabilities.",
			["Long paragraph"],
			{ src: "/src/images/photos/rodnae.jpg", alt: "Doctors meeting together" },
			[true, true, true],
			// add bulletopints here
		),
		new AuditingModule(
			"CMS-HCC",
			"CMS(centers for medical service), Hierarchical Condition Categories, Risk Adjustment. Belong to every plan tier.",
			["Long paragraph"],
			{ src: "/src/images/photos/rodnae.jpg", alt: "Doctors meeting together" },
			[true, true, true],
			// add bulletopints here
		),
	],
	reporting: [
		{
			title: "Accuracy Manager",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Choose from a variety of parameters and gather custom accuracy rates.",
			long: "Allows to slice and dice your data for  View accuracy rates for different entities, groups, dates, by slicing result findings.",
			link: "/features/reporting/",
			type: "reporting",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Code Finder",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Reference specific code instances historically system-wide. Expand when codes were used previously etc.",
			long: "",
			link: "/features/reporting/",
			type: "reporting",
			essentials: true,
			pro: true,
			enterprise: true,
		},

		{
			title: "Dashboards",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Customizable dashboards for organizing the data you need. Underline pertinent workflows for auditors, administrators, or create client dashboards for consuming results.",
			long: "",
			link: "/features/reporting/",
			type: "reporting",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		//
		{
			title: "Summary Templates",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Unlimited amount of customizable templates for your firm. From branding to typography, keep your reports consistent seamlessly.",
			long: "Customizable reports (including custom branding), along with many different templates to create consistent reporting effortlessly.",
			link: "/features/reporting/",
			type: "reporting",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Coder Report Cards",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Easily digestible reports on accuracy with exact comment notes from all associated reviewers. Distributed coder login credentials allow for direct viewable transcripts for accoutability.",
			long: "",
			link: "/features/reporting/",
			type: "reporting",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Comparison Statistics",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Extract valuable information across time comparing multiple audits against each other. Metrics and results are exportable right into usable reports.",
			long: "",
			link: "/features/reporting/",
			type: "functionalities",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Exportability",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"All reports can be exported into PDFs, Excel spreadsheets, Word documents.",
			long: "",
			link: "/features/reporting/",
			type: "functionalities",
			essentials: true,
			pro: true,
			enterprise: true,
		},
	],

	security: [
		{
			title: "Multifactor Authentication",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Confirm fidelity with more complex sign-on options. Integration with Google Duo.",
			long: "",
			link: "/features/security/",
			type: "EMR",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "LDAP / Active Directory",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Connect directly into enterprise LDAP system from within ReviewMate. Master passwords work within ReviewMate for seamless user authentication.",
			long: "",
			link: "/features/security/",
			type: "EMR",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "VPN Integration",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"End-to-end VPN tunneling compatibility with SOC2 certified compliance.",
			long: "",
			link: "/features/security/",
			type: "EMR",
			essentials: false,
			pro: true,
			enterprise: true,
		},
	],

	analytics: [
		{
			title: "Staffing Analaytics",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Time tracking and progress transparency, against tasks, findings, accounts. Track goals and accountability with visual charts and dashboard plugins.",
			long: "",
			link: "/features/analytics/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "System Metrics",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Utilize visual graphs and charts to focus on performance-based results. Discover prioritization concerns as they happen.",
			long: "",
			link: "/features/analytics/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "Time Tracking",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Keep track of time based on tasks, assignments, and projects. Modular 'tasks' keep chunks of work accountable and trackable.",
			long: "",
			link: "/features/analytics/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
	],

	additional_functionalities: [
		{
			title: "Integration Manager",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Import spreadsheets, universes of data, or any other third-party source of data into a central resource. Manage, maintain, and navigate sources dynamically.",
			long: "",
			link: "/features/integrationmanager/",
			type: "EMR",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "Audit The Auditor",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Review completed audits and reviews by adding  layered documentation. Original data is referential and integrated.",
			long: "",
			link: "/features/audittheauditor/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "Document Manager",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Share files such as reports, imported spreadsheets, and training materials between different administration levels. HIPAA compliant, and supported by clear version controlling.",
			long: "",
			link: "/features/integration/",
			type: "functionalities",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Education Tracking",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Directly assign training materials from either custom uploaded training resources such as videos, PDFs, and powerpoints, or use integrated nThrive's training modules. Create and assign quizzes",
			long: "",
			link: "/features/usertraining/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
			enterprise: true,
		},
		{
			title: "ReviewMate Insights (Benchmarking)",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Benchmark and compare performance against other ReviewMate users. Offers advice, community and insight within local scopes, global scopes, or 'millions of records within our community'. Exposes common coding errors that integrate with your Risk Manager.",
			long: "",
			link: "/features/reviewmateinsights/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "Selector Tools",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Expanded utilities for querying your universe of data. Explicit parameters for querying in addition to a randomization query tool.",
			long: "",
			link: "/features/selectortools/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "Customizable Tasks",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Customizable task responses allow all users to focus on pertinent issues. Field or view verbose responses based on user preferences.",
			long: "",
			link: "/features/selectortools/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "Risk Manager",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Leverage artificial intelligence and historical findings to monitor and stay on-top of potential risks.",
			long: "",
			link: null,
			type: "additional",
			essentials: false,
			pro: false,
			enterprise: true,
		},
		{
			title: "Record Tracker",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"View full narratives of records in one integrated place by using timelines within each record.",
			long: "",
			link: "/features/changetracker/",
			type: "additional",
			essentials: false,
			pro: false,
			enterprise: true,
		},
		{
			title: "Retrospective Physician Queries",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Intuitively analyze and report coders' physician queries on compliance, appropriateness, and efficiency.",
			long: "",
			link: null,
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "CDI Communication",
			get slug() {
				return formatSlug(this.title);
			},
			short:
				"Integrate communication with any first-party or third-party CDI team.",
			long: "",
			link: "/features/changetracker/",
			type: "additional",
			essentials: false,
			pro: false,
			enterprise: true,
		},
	],
};

export default featureList
