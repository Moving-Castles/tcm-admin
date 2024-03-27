export default {
  name: 'tutorial',
  title: 'Tutorial',
  icon: () => '🖇️',
  type: 'document',
  fields: [
      {
        name: 'steps',
        title: 'Steps',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'tutorial_step',
            title: 'Step',
            fields: [
              {
                name: 'description',
                title: 'Admin Description',
                type: 'string',
                validation: (Rule: any) => Rule.required(),
              },
              {
                name: 'explanation',
                title: 'Explanation',
                description: 'Client facing',
                type: 'text'
              },
            ]
          }
        ]
      }
  ],
}
