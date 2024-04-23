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
      type: 'string',
      name: 'sender',
      title: 'Sender'
    },
    {
      type: 'text',
      name: 'description',
      title: 'Description'
    },
    {
      type: 'array',
      name: 'attachments',
      title: 'Attachment',
      of: [
        {
          type: 'object',
          name: 'attachment',
          title: 'Attachment',
          fields: [

            {
              type: 'image',
              name: 'image',
              title: 'Attachment'
            },
            {
              type: 'string',
              name: 'filename',
              title: 'Filename'
            },
          ]
        }
      ]
    },
  ]
}
