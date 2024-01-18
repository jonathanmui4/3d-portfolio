export const initialState = {
    name: "",
    email: "",
    message: "",
    error: "",
    succeeded: false,
};

export const contactFormReducer = (state, action) => {
    switch (action.type) {
        case "EDIT_NAME":
            return {
                ...state,
                name: action.payload,
                error: "",
                succeeded: false,
            };
        case "EDIT_EMAIL":
            return {
                ...state,
                email: action.payload,
                error: "",
                succeeded: false,
            };
        case "EDIT_MESSAGE":
            return {
                ...state,
                message: action.payload,
                error: "",
                succeeded: false,
            };
        case "SET_ERROR":
            return { ...state, error: action.payload, succeeded: false };
        case "CHANGE_SUCCEEDED":
            return {
                ...state,
                succeeded: action.payload,
                name: "",
                email: "",
                message: "",
            };

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
