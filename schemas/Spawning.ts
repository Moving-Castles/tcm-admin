export default {
    name: 'spawning',
    title: 'Spawning',
    icon: () => '🐣',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor',
        }
    ],
}
