import { useState } from "react";

export default function LinkInput(props) {

  const [inputValue, setInputValue] = useState('');
  const [isInputInvalid, setIsInputInvalid] = useState(false);


  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  const fetchData = async() => {

    const response =  await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}.json`);

    if (!response.ok) {
      throw new Error('Could not fetch data');
    }

    const data = await response.json();
    return data;
  }


  const shortenLinkHandler = async () => {

    if (inputValue === '') {
      setIsInputInvalid(true);
      return;
    }

    props.onShortener(inputValue);


    const shortenURL = await fetchData();
    props.onShortener({
      original: inputValue,
      short: shortenURL.result.full_short_link,
    });

    setInputValue('')
    
  }
  

  return (
    <div className='container'>

      <div className="container__input">
        <input 
        type='text' 
        placeholder='shorten a link here' 
        onChange={inputChangeHandler} 
        className={isInputInvalid ? 'container__input__invalid' : ''}
        value={inputValue}
        ></input>
        
        {isInputInvalid && <small>please add a link</small>}
      </div>

      <button onClick={shortenLinkHandler}>Shorten it!</button>
    </div>
  )
};