const featureList = {
	auditing_modules: [
		{
			title: "Inpatient",
			short:
				"Thorough IPPS auditing capability is one of our many core standards in ReviewMate's system.",
			long: "",
			link: "/features/inpatient/",
			type: "auditingmodules",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Outpatient",
			short:
				"Outpatient prospective payment systems extend our core standard auditing features.",
			long: "",
			link: "/features/outpatient/",
			type: "auditingmodules",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "ProFee",
			short:
				"Physician Fee schedule and/or Physician office auditing is among the other core auditing standards.",
			long: "",
			link: "/features/profee/",
			type: "auditingmodules",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "ASC",
			short:
				"Free-standing ambulatory surgery center is a first-class citizen to the standard auditing capabilities.",
			long: "",
			link: "/features/ASC/",
			type: "auditingmodules",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "CMS-HCC (Risk Adjustment)",
			short:
				"CMS(centers for medical service), Hierirachal Condition Categories, Risk Adjustment. Belong to every plan tier.",
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
			title: "Accuracy Manager",
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
			title: "Document Manager",
			short:
				"Share files such as reports, imported spreadsheets, and training materials between different administration levels. HIPAA compliant, and supported by clear version controlling.",
			long: "",
			link: "/features/documentmanager/",
			type: "functionalities",
			essentials: true,
			pro: true,
			enterprise: true,
		},
		{
			title: "Education Tracking",
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
			title: "Customizable Tasks",
			short:
				"Customizable task responses allow all users to focus on pertinent issues. Field or view verbose responses based on user preferences.",
			long: "",
			link: "/features/selectortools/",
			type: "additional",
			essentials: false,
			pro: true,
			enterprise: true,
		},
		// {
		// 	title: "Automation Workflows",
		// 	short: "Configurable automation tasks for reducing redundant tasks.",
		// 	long: "",
		// 	link: "/features/automation/",
		// 	type: "additional",
		// 	essentials: false,
		// 	pro: true,
		// 	enterprise: true,
		// },
		// {
		// 	title: "Task Workflows",
		// 	short:
		// 		"Modularized chunks of work give auditors, reviewers, administrators, and even clients, direct accountability and concise communication. **facilitate communicate inline with audits. ",
		// 	long: "",
		// 	link: "/features/usertraining/",
		// 	type: "additional",
		// 	essentials: false,
		// 	pro: false,
		// 	enterprise: true,
		// },
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
	],
};

export default featureList
