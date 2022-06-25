import contentful from "contentful";

export const contentfulClient = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID || import.meta.env.CONTENTFUL_SPACE_ID,
	accessToken:
		process.env.CONTENTFUL_CONTENT_DELIVERY ||
		import.meta.env.CONTENTFUL_CONTENT_DELIVERY,
});

export const contentfulItems = async (content) => {

	let contentfulItems = await contentfulClient.getEntries({
		content_type: content,
		order: '-sys.createdAt',
		limit:  3
		}).then(entries => {
			return entries.items
			}
	).catch(err => {
		console.log(err)
	});
	return contentfulItems
}
