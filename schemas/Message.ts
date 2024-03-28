export default {
  title: 'Message',
  icon: () => '📩',
  name: 'message',
  type: 'document',
  fields: [
    {
      type: 'boolean',
      name: 'tutorial',
      title: 'Show during tutorial only'
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title'
    },
    {
      type: 'text',
      name: 'description',
      title: 'Description'
    },
    {
      type: 'image',
      name: 'attachment',
      title: 'Attachment'
    },
  ]
}
