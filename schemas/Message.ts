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
      type: 'boolean',
      name: 'all',
      title: 'Send to all stumps'
    },
    {
      type: 'boolean',
      name: 'graduation',
      title: 'Show after graduation'
    },
    {
      type: 'boolean',
      name: 'unlocksRatCage',
      title: 'Unlocks RAT CAGE'
    },
    {
      type: 'boolean',
      name: 'unlocksMealwormVat',
      title: 'Unlocks MEALWORM VAT'
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
      name: 'richDescription',
      title: 'Description (Rich Text)',
      of: [{
        type: 'block',
        marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  description: 'Read https://css-tricks.com/use-target_blank/',
                  type: 'boolean'
                }
              ]
            },
          ]  
        }
      }]
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
