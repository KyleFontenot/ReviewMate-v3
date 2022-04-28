export default {
	name: "blogpost",
	type: "document",
	title: "Blog Post",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			name: "date",
			type: "date",
			title: "Date",
			options: {
				dateFormat: "M-D-YYYY",
				calendarTodayLabel: "Today",
			},
		},
		{
			name: "slug",
			type: "slug",
			title: "Slug",
			hidden: true,
			options: {
				source: "title",
				maxLength: 200, // will be ignored if slugify is set
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
			},
		},
		{
			title: "Poster",
			name: "poster",
			type: "image",
			options: {
				hotspot: false, // <-- Defaults to false
			},
			fields: [
				{
					name: "caption",
					type: "string",
					title: "Caption",
					options: {
						isHighlighted: true, // <-- make this field easily accessible
					},
				},
				{
					// Editing this field will be hidden behind an "Edit"-button
					name: "attribution",
					type: "string",
					title: "Attribution",
				},
			],
		},
		{
			title: "Body",
			name: "body",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "tag",
			title: "Tags",
			type: "tags",
			options: {
				predefinedTags: [
					{ label: "Inpatient", value: "inpatient" },
					{ label: "outpatient", value: "outpatient" },
					{ label: "Profee", value: "profee" },
					{ label: "ASC", value: "asc" },
					{ label: "CMS-HCC", value: "cms-hcc" },
					{ label: "APR-DRG", value: "apr" },
					{ label: "Accuracy Manager", value: "accuracymanager" },
					{ label: "Code Finder", value: "codefinder" },
					{ label: "Document Manager", value: "documentmanager" },
					{ label: "User Dashboards", value: "userdashboards" },
					{ label: "Client Dashboard", value: "clientdashboard" },
					{
						label: "Multi-factor Authentication",
						value: "multiauthentication",
					},
					{ label: "Integration Manager", value: "integrationmanager" },
					{ label: "LDAP / Active Directory", value: "ldap" },
					{ label: "VPN Integration", value: "vpn" },
					{ label: "Audit The Auditor", value: "audittheauditor" },
					{ label: "Workflow Analytics", value: "workflowanalytics" },
					{ label: "Time Tracking", value: "timetracking" },
					{ label: "User Training Module", value: "usertrainingmodule" },
					{ label: "Forms Designer", value: "formsdesigner" },
					{ label: "ReviewMate Insights", value: "reviewmateinsights" },
					{ label: "Sample Selector", value: "sampleselector" },
					{ label: "Customizable Workflows", value: "customizableworkflows" },
					{ label: "Task Workflows", value: "taskworkflows" },
					{ label: "Risk Manager", value: "riskmanager" },
					{ label: "Record Tracker", value: "recordtracker" },
					{ label: "HCC Analyzer", value: "hccanalyzer" },
					{ label: "Retrospective Queries", value: "retrospectivequeries" },
					{ label: "CDI Workflows", value: "cdiworkflows" },
				],
			},
		},
	],
};
