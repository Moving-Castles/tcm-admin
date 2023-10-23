export default {
    name: 'loading',
    icon: () => '🚚',
    title: 'Loading',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'contentEditor',
        },
    ],
}
