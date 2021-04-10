import React, { useState } from 'react';
import './ProductCounter.css';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Index = ({...props}) => {
	const [counter, setCounter] = useState(1);

	function count(increment = 1){
		return evt => {
			if (increment === -1 && counter === 1) return;
			setCounter(counter + increment);
		}
	}

  return (
    <div className="ProductCounter" {...props}>
    	<button type="button" className="ProductCounter__Btn" disabled={counter === 1} onClick={count(-1)}>
    		<RemoveIcon/>
    	</button>
    	<span>{counter}</span>
    	<button type="button"  className="ProductCounter__Btn" onClick={count()}>
    		<AddIcon/>
    	</button>
    </div>
  )
}

export default Index;