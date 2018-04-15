export const exampleReducer = (state = { text: "..." }, action) => {
    switch (action.type) {
        case "EXAMPLE_CHANGE_TEXT":
            return { text: action.payload }

        default:
            return state;
    }
}