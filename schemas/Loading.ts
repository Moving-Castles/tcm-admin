export default {
    name: 'loading',
    title: 'Loading',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title (english)',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content (english)',
            type: 'contentEditor',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        }
    ],
}
