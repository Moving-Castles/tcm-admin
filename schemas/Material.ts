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
          validation: (Rule: any) => Rule.required(),
      },
      {
        type: 'image',
        name: 'image',
        title: 'Image',
        validation: (Rule: any) => Rule.required(),
      },
      {
        title: 'Color',
        name: 'color',
        type: 'color',
        options: {
          disableAlpha: true,
          colorList: [
            "red",
            "yellow",
            "green",
            "blue",
            "purple",
            "orange",
            "brown",
            "#FF7F7F",
            "#800000",
            "#FFFF7F",
            "#808000",
            "#7FFF7F",
            "#008000",
            "#7F7FFF",
            "#000080",
            "#BF7FBF",
            "#800080",
            "#FFBF7F",
            "#804000",
            "#A67F5B",
            "#5B3A29",
            "#C0C0C0",
            "#808080",
            "grey",
            "black",
            "white"
          ]
        },
        validation: (Rule: any) => Rule.required(),
    },
      {
          title: 'Ticker',
          name: 'ticker',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
      },
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        title: 'Difficulty',
        name: 'difficulty',
        type: 'string',
        options: {
            list: [
                { title: 'Novice', value: '0' },
                { title: 'Intermediate', value: '1' },
                { title: 'Advanced', value: '2' },
                { title: 'Nightmare', value: '3' }
            ]
        },
        validation: (Rule: any) => Rule.required(),
    },
      {
          title: 'Category',
          name: 'category',
          type: 'array',
          of: [{type: 'string'}],
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
                { title: "Waste", value: "WASTE" },
                { title: "Unstable", value: "UNSTABLE" },
                { title: "Organism", value: "ORGANISM" },
                { title: "Polymer", value: "POLYMER" },
                { title: "Electronic", value: "ELECTRONIC" },
                { title: "Toxic", value: "TOXIC"}
              ]
          },
      },
      {
        name: 'hint',
        title: 'Hint',
        type: 'reference',
        to: [{type: 'message'}]
      },
      {
          title: 'Description',
          name: 'description',
          type: 'text',
      }
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
