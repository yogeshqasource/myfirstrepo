export default function HomeReducer(state = { inputValue: '' }, action) {
    if (action.type === 'updateInputValue') {
        state = {...state, inputValue: action.data }
        // state.inputValue = action.data;
    }

    return state;
}