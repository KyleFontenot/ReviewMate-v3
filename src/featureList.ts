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
			"Evaluate DRG assignment within any IPPS account type. Inpatient medical code audits are one of ReviewMate's specialty by responding to industry problems with accumen.",
			[
				"More than three-quarters of the nation's inpatient acute-care hospitals are paid under the Inpatient Prospective Payment System (IPPS). The IPPS methodology pays a flat rate based on the average charges across all hospitals for specific diagnoses, regardless of whether that particular patient costs more or less.",
				"Correct DRG assignment is critical to the health of your organization. Coding audits and using the proper tools will allow financial and compliant stability.",
				"The ReviewMate platform assists medical coding auditors analyze specific elements affecting DRG assignment and reimbursement.",
			],
			{ src: "/src/images/photos/rodnae.jpg", alt: "Doctors meeting together" },
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
			"Any medical record regarding outpatient procedures and services work as well as other accounts in ReviewMate's core suite. Correct APC assignment with reassuring ease.",
			[
				"The Outpatient Prospective Payment System (OPPS) is the system through which Medicare decides how much money a hospital or community mental health center will get for outpatient care provided to patients with Medicare. Reimbursement is based on Ambulatory Payment Classification (APC) assignment.",
				"Correct APC assignment is critical to the health of your organization. Coding audits and using the proper tools will allow financial and compliant stability.",
				"The ReviewMate platform assists medical coding auditors analyze specific elements affecting APC assignment and reimbursement.",
			],
			{
				src: "/src/images/photos/mart-production.jpg",
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
			"Physician Fee schedule and/or Physician Office auditing requires a deep insight into problematic instances of the field: insight ReviewMate excels in providing.",
			[
				"ProFee, or professional fee, refers to coding and billing the physician side of a patient encounter. ProFee coding covers the work performed by the provider and the reimbursement they will receive for the medical services performed.",
				"Because Profee billing directly affects providers, it can be more strict than other types of accounts. Because of the very narrow margin for error as an auditor, ReviewMate is prepared in addressing the exact punctuality that you need.",
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
			"Free-standing ambulatory surgery center accounts spawn many opportunities for firms to save incredible amounts of time and resources for both client and auditor.",
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
				"Hierarchical Condition Category (HCC) coding is a risk-adjustment model originally designed to estimate future health care costs for patients. HCC coding helps communicate patient complexity and paint a picture of the whole patient. In addition to helping predict health care resource utilization, RAF scores are used to risk adjust quality and cost metrics. By accounting for differences in patient complexity, quality and cost performance can be more appropriately measured.",
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
			"Choose from a range of parameters and gather custom accuracy rates. Arrange a group and pull the findings you need exactly.",
			[
				"Calculating and summarizing accuracy rates is a crucial task for your auditors, and important for your organization as a whole. With ReviewMate, your auditors become equipped with comprehensive tools that allows them to easily compile custom accuracy reports under a variety of different parameters.",
				"Using ReviewMate's Accuracy Manager, auditors can gather accuracy rates with a surgical precision in a way that connects directly with the rest of the ReviewMate suite of tools, including Reporting, Audit the Auditor, and Task Workflows. ",
				"Coders must have a low tolerance for inaccurate codes. Auditors will be able to gather a variety of accuracy rates across many different searching parameters, including searching by facilities (or groups of facilities), searching by coder or coder groups, searching by date ranges, and much more. Using ReviewMate, your auditors will have access to the tools they need to diagnose accuracy rates across a wide number of dimensions.",
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
				"Part of an auditor's job is investigating common patterns among different codes. The information from these investigations can often be used to direct areas of focus for future auditing. With ReviewMate, your auditors will gain the ability to easily investigate historically audited codes in order to analyze and figure out common findings.",
				"Using ReviewMate, your auditors will be able to run queries by specific codes, rather than having to use other parameters for their search, such as by task or by facility. This provides shortcuts to viewing the prevalence and other aspects of the code being searched, allowing your auditors to seek deeper patterns in your structures.",
				"By giving your auditors the power find records by code, you expand their ability to help your organization. With ReviewMate, you can make sure your auditors have the tools they need to do their job with efficiency and effectiveness. Armed with all of our tools, they will be ready to meet any challenge their job throws at them.",
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
				"It is essential for an auditor to have easy access to the cases they are auditing. With ReviewMate, your auditors will gain access to a customizable dashboard that will visually deliver the information your auditor needs to do their job effectively.",
				"The dashboard is easily modified by the auditor, allowing them to place custom pie charts, graphics, and tables that can be arranged to the needs of a particular auditor, placing an emphasis on their own individual workflow and preferences.",
				"It is most common for auditors to have to track progress across multiple different tasks simultaneously. ReviewMate's dashboard system enables them to improve their work by allowing them easy access to visually assess their own progress in a way that they prefer, empowering them to take their job performance into their own hands. ",
				"Dashboards aren't only useful for auditors, however ' auditors can also set up dashboards to visually present their progress or data to clients and coders, allowing them to communicate to interested parties in a way that is concise, efficient, and transparent.",
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
				"One of the best ways to increase worker productivity is to give your workers tools that allow them to do their work more efficiently. ReviewMate includes a templating system that allows a user to create or utilize existing templates to generate reports that have a consistent design. ",
				"The amount of templates you can create is unlimited, and automation tools such as templates can help make your auditor work faster and smarter. Not only can a single auditor make themselves more efficient, but because templates can be easily shared, individual auditors can share their templates with others, or companies can provide custom templates tailored to their specific organization systems.",
				"With ReviewMate's templates, the customization options are endless. Auditors have access to hundreds of different components with which to customize their templates, and every aspect of the templates can be arranged and formatted by your auditors. ReviewMate gives your auditors the empowerment they need to take their productivity into their own hands, resulting in a more efficient organization that benefits everyone.",
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
			"Easily digestible reports on accuracy with exact comment notes from all associated reviewers. Distributed coder login credentials allow for direct viewable transcripts for accountability.",
			[
				"Normally, only clients would receive reports, however ReviewMate strives to provide utility at all levels of use, whether you're a client, an auditor or a coder. Using the Coder Report Card system, coders can receive feedback on their coding after auditing, allowing them to improve their future performance. This creates a good system of communication and accountability for all parties.",
				"Coder Report Cards act as a more concise and automatic version of reports, and are designed specifically for coders. Coders have easy access to these report cards - they simply sign into ReviewMate using their on credentials, allowing them to review their report cards and examine their performance. As an alternative, documents (such as a PDF) can be generated and distributed to a coder.",
				"By using our Coder Report Card system, ReviewMate empowers both coders and auditors to provide accountability, allowing succinct communication across all levels of reports. Armed with the knowledge gained by their report cards, coders are presented with an opportunity to improve their craft, creating a positive work environment focused on growth and self-improvement.",
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
				"It is important that you have easy access to the work of your coders and auditors. That's why ReviewMate is designed to export your data quickly and efficiently. Once you have your auditors finish a report, or if you want to present a report-in-progress, ReviewMate gives you plenty of options for exporting the data through a wide variety of common formats, including PDF, Excel, and Word.",
				"The auditing industry can be tricky when it comes to interoperability - which is why ReviewMate supports the most common and standard document formats. ReviewMate is designed to operate with these formats, creating a smooth experience from the time coding begins, to auditing, to exporting.",
				"With ReviewMate, you'll always have easy access to your data, whether it's through the software or the exported reports. This can come in handy when reviewing the work of your auditors, or to present works in progress, enabling swift accountability, and by supporting these common formats, you can be sure that no matter how you have to submit them, ReviewMate will cover your needs.",
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
			"Ensure user identity with ReviewMate using modern and robust user authentication methods, allowing for more complicated sign-in options. Includes integration with Google Duo.",
			[
				"When it comes to the management of patient data, following HIPAA guidelines is an absolute must. ReviewMate takes the HIPAA requirements very seriously, and is designed with security of patient data in mind.",
				"Multi-factor authentication is a modem security strategy whereby users must verify their identity in multiple different ways before gaining access to a particular system. There are a variety of different ways to achieve this, depending on the level of security required. Often times, alongside having a username and password, a user might be required to receive a pin via a text to a phone number they've previously established, or through an email.",
				"Alongside password and email authentication, ReviewMate also uses the Google Duo service to further verify user fidelity. Google Duo is a video chatting service designed by Google, and is available on every app store for mobile devices and can authenticate users on a per-device policy. Google Duo integration is optional, and may be disabled with each user's setting.",
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
			"Connect directly into enterprise LDAP system from within ReviewMate. ReviewMate keeps a secure keychain for allowing seamless user authentication.",
			[
				`Lightweight Directory Access Protocol, or LDAP, is the common industry standard used when connecting to the database, or “universe of data”, of a hospital or firm. LDAP is used through a network to facilitate sharing files from these databases, particularly between different computers on the network.  Active Directory is a commonly used service that helps oversee and manage data connections on a network, and it is this service which communicates using LDAP.`,
				`With ReviewMate, LDAP and Active Directory is supported natively, allowing easy integration into ReviewMate's services. For example, ReviewMate's integration system allows users to manage data connections, and to apply them directly to different reviews and tasks. ReviewMate will connect directly to Active Directory systems using the LDAP, and allow for seamless user authentication.
`,
				`Security is important, which is why ReviewMate prioritizes ease of use when it comes to security options. By making these features easy to use, ReviewMate helps ensure that users utilize these features.`,
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
			"With options to configure and utilize a virtual private network with SOC2 certified compliance, ReviewMate allows users to have end-to-end security via VPN tunneling.",
			[
				"There's no reason to secure data if the connections that send the data is itself vulnerable. Connecting remotely to servers or individual computers, especially in the context of a hospital or any other firm that houses and transfers security-critical data, requires those connections to route through a VPN. ",
				"VPNs, or Virtual Private Networks, are a tool used for privatizing and securing data transfers. Whereas a typical network connection will connect directly from a computer to the network through a service provider, a VPN acts as a middleman between a service provider and the network in question. With a VPN, you can enhance security by further encrypting data beyond what your computer would do normally, while simultaneously stopping bad actors from analyzing movement of data.",
				"ReviewMate fully supports VPN configurations to seamlessly begin connecting to your servers holding critical patient data. With ReviewMate, you can ensure the connections are safe and secure, making it ready to handle PHI in a HIPAA-compliant manner.",
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
				"ReviewMate offers a variety of tools to track the time of your staff in a way which empowers both the subjective sense of progression and for the purposes of organization-wide transparency. This is essential not only for understanding performance, but for understanding how time is spent and what it is that time is spent on.",
				"ReviewMate groups records together as tasks, a unit that is used for analyzing progression. Metadata is then collected by ReviewMate for each task, which is made accessible directly with users and clients. This provides teams who have to overlook auditors with essential data with which to hold their auditors accountable.",
				"Tasks are automatically tracked and indexed by ReviewMate, however by nature audits are unpredictable within particular time constraints. To deal with this, users are provided with tools to augment the built-in time tracking software in order to claim additional time for more intensive auditing tasks. This ensures that, no matter how unpredictable the task becomes, your user has the ability to track all of the time that is used.",
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
			"Share files such as reports, imported spreadsheets, and training materials between different administration levels. HIPAA compliant, and supported by clear version control.",
			[
				"Document manager is a simple ECM system, in which you can easily update, track and manage your documents in a secure and HIPPA compliant environment. Document Manager is a module in the ReviewMate platform that allows users to store their audit related files in a centralized and secure location.",
				"In addition, they can easily share files with other users, departments, or certain user roles. Every file imported into the ReviewMate platform will reside in the Document Manager module, including files that are loaded via Integration Manager from an EMR or an abstracting system. Each document will be assigned a unique identifier to help manage version control and ensure proper availability and backup procedures are performed. The system will capture all necessary login information to identify users that accessed and downloaded the document.",
				"Only users with active credentials and have the proper access privileges can access files from the Document Manager. Document Manager works on all popular browsers and supports all known file extensions including Microsoft Word, Excel and PowerPoint, PDF, CSV, XML, JSON, TXT, JPG, PNG, BMP, GIF, HL7, EDI Files such as 837 and others.",
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
				"An auditor needs good selector tools to help them in their auditing. This makes good selector tools essential, and ReviewMate has a special focus on creating easy-to-use tools for all scenarios to help empower your auditors. A variety of different querying parameters are integrated for every auditing account to help extract the exact accounts you need from your database. ReviewMate also includes randomized selection as an additional way to query random accounts, helping to reduce the chance of errors, keeping your records spick and span (and compliant!).",
				"Not only does ReviewMate contain flexible manual selection tools, all querying and sample selections can be customized to run automatically, allowing your auditor to tailor their auditing process to their needs, improving productivity and reducing mistakes. Routine audits are the standard when it comes to end-user firms. With ReviewMate, these tasks are only a few clicks away from being automated, allowing tasks or findings to be automatically populated.",
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
				"When it comes to auditing, communication is key, and clear communication requires clear subjects to communicate. ReviewMate utilizes tasks, a unit of auditing information (such as a set of accounts) that index progression and communication notes. Using the ReviewMate task features, users are allowed a convenient way to interact with and share a compartmentalized set of findings.",
				"Users can add these findings to any dashboard, export them to be gathered into a report, or to isolate accountability using online logins with other end-users. Not only do tasks provide a convenient and clear way to divide an auditor's work, but it addresses the very important problem of differentiating between different clients and/or firms. Since auditors often balance whole jobs between their auditing and communication post-evaluation, ReviewMate allows auditors an easy way to retrieve necessary information.",
				"Simple and effective communication forms the backbone for any successful organization. Using ReviewMate's task system, you can make sure to capture the information you need in order to conduct clear and precise reviews of an auditor's work, thus enabling easy and intuitive communication.",
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
			"ReviewMate allows you to important entire spreadsheets, universes of data, and other third-party sources of data into one central resource, which can be managed, maintained, and navigated dynamically.",
			[
				`Secure and robust management of connections and data is crucial to any operation, and ease of use is critical for ensuring users follow through with security protocols. With ReviewMate, you get access to an integration management tool that enables a users to receive data from multiple sources, all under one interface that's easy to digest.`,
				`This is what we call an integration. Using ReviewMate's simple integration interface, users have the ability to manage and configure their different connections to various the various sources of their data. This allows for simple and effective management of the data and its security.`,
				`ReviewMate also streamlines the process for adding new connections to an integration using an easy, intuitive and user-friendly setup process. With ReviewMate's integration manager, you can directly pipe streams of data right into different reviews and tasks.`,
				`The integration system was designed with usability in mind, and having it enables users to securely and easily manage their different data streams. ReviewMate will empower your users by providing them with an easy-to-use interface for securing their data.`,
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
			"Review completed audits and reviews by adding layered documentation. Original data is referential and integrated.",
			[
				"Transparency is key for any successful organization. With ReviewMate, auditors are provided with the means to interact with other completed audits and to add comments or notes that are attached to specific code, a specific coder, or to auditors themselves. With these features, channels of communication are opened between the coder, the auditor, and any client, helping to provide context throughout an entire audit.",
				"Using these features that ReviewMate provides, communication is stacked in a manner similar to modern thread-based messaging that helps to enable transparency across entire chains of interactions. This allows for a more robust level of communication between all parties, and provides critical context to the different actions when reviewing an audit.",
				"Having this critical context is absolutely vital to reviewing and understanding a particular audit, whether it's a simple performance review or an investigation into the compliance of an auditor. When you use ReviewMate, you'll have all of the necessary tools at your disposal to examine auditors and their work, enabling a deeper level of control to efficiently make sure compliance is maintained. ",
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
			"Directly assign training materials from either custom uploaded training resources such as videos, PDFs, and PowerPoint presentations, or use integrated nThrive's training modules.",
			[
				"It's vital for your coders to stay educated with modern codes and practices. ReviewMate gives your auditors the ability to suggest training materials to coders when auditing. This communication is optional, but integral for providing resources to coders that need them for the purpose of improving their coding.",
				"Compliance is important, and mistakes can be easy to make and subtle in nature. ReviewMate's education tracking allows your auditors to not only correct mistakes, but to help prevent future mistakes in a way that is intuitive to coders, audits, and clients. It's a win-win situation for all - the coders can be trained to make less mistakes, auditors will then get to utilize their time more effectively, and organizations get a more robust work environment.",
				"The training materials for this feature are provided by nThrive, a well-developed service that provides tutorials and articles which are AHIMA compliant, and assist in billing education. In ReviewMate, all codes are indexable toward training materials, so suggesting a particular training material is as simple as clicking a button.",
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
				"ReviewMate Insights is an community of all ReviewMate users, assembled on the intent of improving common issues. Users can leverage insight for addressing topics such as most problematic coding errors. These types of insight are viewable to users, also contribute into artificial intelligence within ReviewMate to enhance user experience. ",
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
				"When it comes to auditing, you can never have too much data. ReviewMate is designed to provide your auditors with an intuitive way of investigating and analyzing different threads of changes within a record. With our tools in hand, your auditor will have complete transparency regarding all of the communication between all of the different parties involved, from the beginning of the diagnosis through to the rebuttal process. They'll have access to all of this information without having to switch to any other tools; it's all integrated in one place.",
				"Record compliance is integral for any medical organization. With ReviewMate's ingenious designs, you can help ensure your auditor will have access to all the information they need, right where they need it. Besides streamlining the record reviewing process, ReviewMate's integrated record tracking helps to reduce auditing errors, by making information accessible and easily reviewed, from the diagnosis to the rebuttal.",
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
				"	Understanding why and by whom a particular code has been submitted is integral to a productive auditing environment. In order to help streamline the experience for your auditors, ReviewMate provides them with Physician Query Analysis – allowing your auditors to visually examine the submitted physician queries for each code with ease.",
				"Physician queries are a necessity to guarantee compliance and provide context for your auditors. Using the Physician Query Analysis, your auditors will gain the ability to view physician queries right within the timeline of the record being reviewed - giving them a clear and concise view of the chronological order of all events within the record. ",
				"ReviewMate provides your auditors with the tools they need to do their job quickly and efficiently. Armed with the Physician Query Analysis, your can enable your auditors to make sure your business stays compliant.",
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
			"Integrate communication with any first-party or third-party CDI team within ReviewMate.",
			[
				"ReviewMate is designed with the idea that one tool should cover all of your needs. ReviewMate includes functionality for communicating to and connecting with CDI teams. This functionality is fully integrated right into the standard reporting workflows!",
				"In the course of auditing, it is often the case that auditors will have to send reports and other information to an external Clinical Documentation Improvement (CDI) team. Using ReviewMate, your auditor has the ability to aggregate their findings and easily report it to a CDI team. ",
				"Once an auditor has gathered the information they need, ReviewMate makes sure that sending it to the CDI team is a breeze. Auditors can connected an external CDI team through email, by exporting documents, or using a special client-facing login portal, allowing the CDI team to maintain an updated and accurate account of a particular record. Clinical documentation improvement is an essential part of making sure your records are compliant. With easy access to documents using ReviewMate, you can rest assured that your CDI team will have everything they need to do their job.",
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
