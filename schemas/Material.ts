export default {
  title: 'Material',
  icon: () => '🧅',
  name: 'material',
  type: 'document',
  fields: [

      {
          title: 'Material type',
          name: 'materialType',
          type: 'string',
      },
      {
          title: 'Category',
          name: 'category',
          type: 'string',
          options: {
              list: [
                { title: "Product", value: "PRODUCT" },
                { title: "Complex", value: "COMPLEX" },
                { title: "Solid", value: "SOLID" },
                { title: "Liquid", value: "LIQUID" },
                { title: "Organism", value: "ORGANISM" },
                { title: "Food", value: "FOOD" },
                { title: "Drug", value: "DRUG" },
                { title: "Generic", value: "GENERIC" },
                
              ]
          },
          validation: (Rule: any) => Rule.required(),
      },
      {
          title: 'Title',
          name: 'title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
      },
      {
          title: 'Description',
          name: 'description',
          type: 'text',
      },
      {
        type: 'image',
        name: 'image',
        title: 'Image'
      },
  ],
  preview: {
      select: {
          title: 'title',
          materialType: 'materialType',
      },
      prepare(selection: any) {
          const { title, materialType } = selection;
          return {
              title: `(${materialType}) ${title}`,
          };
      },
  },
}
