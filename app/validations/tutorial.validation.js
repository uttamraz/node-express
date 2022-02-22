'use-strict';
module.exports = {
    createValidation: {
        title: {
            isLength: {
                options: { min: 5 },
                errorMessage: 'Title should be at least 5 chars long',
            },
        },
        description: {
            isLength: {
                options: { min: 5 },
                errorMessage: 'Description should be at least 5 chars long',
            },
        },
        published: {
            isBoolean: true
        },
    },

    findOneValidation: {
        id: {
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            in: ['params', 'query'],
            errorMessage: 'ID is wrong',
            isInt: true,
            // Sanitizers can go here as well
            toInt: true,
        }
    }
};
