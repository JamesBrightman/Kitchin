export default {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'notes',
            title: 'Notes',
            type: 'array',
            of: [{type: 'string'}]
        }
    ],

    preview: {
        select: {
            title: 'title'
        },
        prepare(selection) {
            const {title} = selection;
            return Object.assign({}, selection, {
                title: title
            })
        },
    },
}
