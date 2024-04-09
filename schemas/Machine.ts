export default {
    title: 'Machine',
    icon: () => '🏭',
    name: 'machine',
    type: 'document',
    fields: [

        {
            title: 'Machine type',
            name: 'machineType',
            type: 'string',
            options: {
                list: [
                    { title: 'None', value: '0' },
                    { title: 'Inlet', value: '1' },
                    { title: 'Outlet', value: '2' },
                    { title: 'Player', value: '3' },
                    { title: 'Splitter', value: '4' },
                    { title: 'Mixer', value: '5' },
                    { title: 'Dryer', value: '6' },
                    { title: 'Boiler', value: '7' },
                    { title: 'Centrifuge', value: '8' },
                    { title: 'Grinder', value: '9' },
                    { title: 'Rat Cage', value: '10' },
                    { title: 'Mealworm Vat', value: '11' }],
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
    ],
    preview: {
        select: {
            title: 'title',
            machineType: 'machineType',
        },
        prepare(selection: any) {
            const { title, machineType } = selection;
            return {
                title: `(${machineType}) ${title}`,
            };
        },
    },
}
