import contentful from "contentful";

export const contentfulClient = contentful.createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID || process.env.CONTENTFUL_SPACE_ID,
	accessToken:
		import.meta.env.CONTENTFUL_CONTENT_DELIVERY ||
		process.env.CONTENTFUL_CONTENT_DELIVERY,
	resolveLinks: true,
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
		console.log(err);
		return err
	});
	return contentfulItems
}
