const featureList = {
	auditing_modules: [
		{
			title: "Inpatient",
			//
			short: "IPPS.  facility inpatient accounts betwen. Inpatient hostpital stay. (Inpatient prospective payment system. )",
			long: "",
			link: "/features/inpatient/",
			type: "auditingmodules",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Outpatient",
			short: "Many features extend every aspect of outpatient auditing.  Outpaitent prospective payement system. Acute-care hospital outpatient payment system",
			long: "",
			link: "/features/outpatient/",
			type: "auditingmodules",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "ProFee",
			// !!!
			short: "Physician Fee schedule / Physician office auditing. **Platform",
			long: "",
			link: "/features/profee/",
			type: "auditingmodules",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "ASC",
			short: "Free-standing ambulatory surgery center .   ** platform" ,
			long: "",
			link: "/features/ASC/",
			type: "auditingmodules",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "CMS-HCC (Risk Adjustment)",
			// !!!
			short: "CMS(centers for medical service) Hierirachal Condition Categories / Risk Adjustment. **platform",
			long: "",
			link: "/features/ASC/",
			type: "auditingmodules",
			essentials: false,
			pro: true,
			enterprise: true,
		},
	],
	reporting: [
		{
			title: "Accuracy Manager (Reporting)",
			short:
				"View accuracy rates for different entities, groups, dates, by slicing result findings set parameters to obtain different sets of accuracy rates",
			long: "Customizable reports (including custom branding), along with many different templates to create consistent reporting effortlessly.",
			link: "/features/accuracymanager/",
			type: "functionalities",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Code Finder",
			short:
				"Reference specific code instances historically system-wide. Expand when codes were used previously etc.",
			long: "",
			link: "/features/accuracymanager/",
			type: "functionalities",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Document Manager",
			short:
				"Share files, such as reports, between different levels of administration levels. HIPAA compliant, and supported by clear version controlling.",
			long: "",
			link: "/features/documentmanager/",
			type: "functionalities",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Dashboards",
			short:
				"Customizable dashboards for organizing the data you need. Underline pertinent workflows for auditors, administrators, or create client dashboards for consuming results.",
			long: "",
			link: "/features/dashboards/",
			type: "functionalities",
			essentials: true,
			pro: true,
			enterprise: true,
		},
	],


	integration: [
		{
			title: "Multifactor Authentication",
			short:"Confirm fidelity with more complex sign-on options. Integration with Google Duo.",
			long: "",
			link: "/features/security/",
			type: "EMR",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "LDAP / Active Directory",
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
			short:
				"End-to-end VPN tunneling compatibility with SOC2 certified compliance.",
			long: "",
			link: "/features/security/",
			type: "EMR",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "Integration Manager",
			short:
				"Import spreadsheets, universes of data, or any other third-party source of data into a central resource. Manage, maintain, and navigate sources dynamically.",
			long: "",
			link: "/features/integrationmanager/",
			type: "EMR",
			essentials: false,
			pro: true,
			enterprise: true,
		},
	],

	analytics: [
		{
		title: "Staffing Analaytics",
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
			title: "Audit The Auditor",
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
			title: "User Training",
			short:
				"Directly assign training materials from either custom uploaded training resources such as videos, PDFs, and powerpoints, or use integrated nThrive's training modules.",
			long: "",
			link: "/features/usertraining/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "ReviewMate Insights (Benchmarking)",
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
			title: "Automation Workflows",
			short:
				"Configurable automation tasks for reducing redundant tasks.",
			long: "",
			link: "/features/automation/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		{
			title: "Task Workflows",
			short:
				"Modularized chunks of work give auditors, reviewers, administrators, and even clients, direct accountability and concise communication.",
			long: "",
			link: "/features/usertraining/",
			type: "additional",
			essentials: false,
			pro: false,
			enterprise: true,
		},
		{
			title: "Risk Manager",
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
			short:
				"Integrate communication with any first-party or third-party CDI team.",
			long: "",
			link: "/features/changetracker/",
			type: "additional",
			essentials: false,
			pro: false,
			enterprise: true,
		},
	]
}

export default featureList