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

export const formatSlug = (title : string) => {
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

export const interpolateTags = (tag: string, paragraph: string) => {
	let split = tag.split("");
	split.splice(1, 0, "/");
	let closing = split.join("");
	let newPara = paragraph.replaceAll(tag, "").replaceAll(closing, "");
	return newPara;
};

export const assessShort = (short: string, long: string): string =>
	short.length < 181 ? short.concat(" " + long[0]).substring(0, 210) : short;

export class defaultOpenGraph {
	title: string;
	// length between 180 and 220 characters
	description: string;
	canonical: string;
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
		this.title = title;
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
		articleTitle: string,
		description: string,
		image: string,
		imageAlt: string,
		published?: Date,
		author?: string
	) {
		let title = `ReviewMate | ${articleTitle}`;
		super(
			title,
			description,
			image,
			imageAlt,
			metadata.canonical.concat(formatSlug(articleTitle))
		);
		this.basic = {
			type: "article",
			title: articleTitle,
			image: image,
			url: metadata.canonical.concat(formatSlug(articleTitle)),
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
			title: articleTitle,
			description: description,
			siteName: "review-mate.com",
		};
	}
}