import { useSelector } from 'react-redux';
export default function Label(props)  {

  const inputValue = useSelector((state) => state.homeReducer.inputValue);

    return (
      <label style={{...props.style, fontWeight: 'bold'}}>
          {inputValue}
      </label>

    );
}