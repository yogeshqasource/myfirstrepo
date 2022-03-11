import { useSelector, useDispatch } from 'react-redux';

export default function MyInput() {

    const dispatch = useDispatch()

    const inputValue = useSelector((state) => state.homeReducer.inputValue);

    const handleInput = (e) => {
        dispatch({ type: 'updateInputValue', data: e.target.value });
    }

    return (<input type={'text'} value={inputValue} onChange={(e) => handleInput(e)}/>);
}