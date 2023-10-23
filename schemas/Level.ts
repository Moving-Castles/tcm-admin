export default {
    name: 'level',
    title: 'Level',
    icon: () => '📈',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Level',
            name: 'level',
            type: 'number',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Content (Start)',
            name: 'content_start',
            type: 'contentEditor',
        },
        {
            title: 'Content (End)',
            name: 'content_end',
            type: 'contentEditor',
        },
    ],
    preview: {
        select: {
            title: 'title',
            level: 'level',
        },
        prepare(selection: any) {
            const { title, level } = selection;
            return {
                title: `(${level}) ${title}`,
            };
        },
    },
}
