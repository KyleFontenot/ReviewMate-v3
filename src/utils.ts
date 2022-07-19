import metadata from './layouts/metadata.js'

export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

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

export class defaultOpenGraph {
	title: string;
	description: string;
	canonical: string;
	// image: URL;
	imageAlt: string;
	basic: {
		title: string;
		type: string;
		image: string;
		url: string;
	};
	image: {
		url: string;
		secureUrl: string;
		type: "image/jpeg" | "image/webp" | "image/png";
		width: number;
		height: number;
		alt: string;
	};

	constructor(
		title: string = 'ReviewMate',
		description: string = "An all-in-one software platform for medical code auditing. Streamline medical code auditing workflows by expediting findings, integrating communication, maintaining fidelity, and optimizing workflow through automation.",
		image: string = "/ReviewMate-op.jpg",
		imageAlt: string = "ReviewMate's overview of main features.",
		url: string = metadata.canonical
	) {
		this.canonical = metadata.canonical || "https://deft-cuchufli-bfd7e3.netlify.app/";
		this.description = description;
		this.basic = {
			title: title,
			type: "website",
			image: image,
			url: url,
		};
		this.image = {
			url: image,
			secureUrl: image,
			type: "image/jpeg",
			width: 1024,
			height: 512,
			alt: imageAlt || "ReviewMate's brand logo",
		};
	}
}

export class pageOpenGraph extends defaultOpenGraph {
	constructor(
		slug: string,
		description: string,
	) {
    let title = slug ? `ReviewMate - ${slug}` : `ReviewMate`
	super(
		title,
		description,
	);
  }
}

export class ArticleOpenGraph extends defaultOpenGraph {
	basic: {
		type: "article";
		title: string;
		image: string;
		url: string;
	};
	image: {
		url: string;
		secureUrl: string;
		type: "image/jpeg" | "image/webp" | "image/png";
		width: number;
		height: number;
		alt: string;
	};
	article: {
		publishedTime?: Date;
		author?: string;
	};
	optional: {
		title: string;
		description: string;
		siteName: string;
	};

	constructor(
		title: string,
		description: string,
		image: string,
		imageAlt: string,
		published?: Date,
		author?: string
	) {
		title = `${title}`;
		super(
			title,
			description,
			image,
			imageAlt,
			metadata.canonical.concat(formatSlug(title))
		);
		this.basic = {
			type: "article",
			title: title,
			image: image,
			url: metadata.canonical.concat(formatSlug(title)),
		};
		this.image = {
			url: image,
			secureUrl: image,
			type: "image/jpeg",
			width: 1024,
			height: 512,
			alt: imageAlt,
		};
		this.article = {
			publishedTime: published,
			author: author,
		};
		this.optional = {
			title: title,
			description: description,
			siteName: "review-mate.com",
		};
	}
}