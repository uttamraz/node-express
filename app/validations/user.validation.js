'use-strict';
module.exports = {
    createValidation: {
        name: {
            isLength: {
                options: { min: 3 },
                errorMessage: 'Name should be at least 3 chars long',
            },
        },
        email: {
            isEmail: true,
            isLength: {
                options: { min: 3 },
                errorMessage: 'Email should be at least 3 chars long',
            },
        },
        active: {
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
