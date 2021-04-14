import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './ProductCounter.css';

const Index = ({ onCount, ...props }) => {
	const [counter, setCounter] = useState(1);
    /**
     * - increments and decrements counter
     * 
     * @returns {undefined}
     */
	function count(increment = 1){
		return evt => {
			if (increment === -1 && counter === 1) return;
			setCounter(counter + increment);
            onCount(counter)
		}
	}

    return (
        <div className="ProductCounter" {...props}>
        	<button type="button" 
                className="ProductCounter__Btn" 
                disabled={counter === 1} 
                onClick={count(-1)}>
        		<RemoveIcon/>
        	</button>
        	<span>{counter}</span>
        	<button type="button"  className="ProductCounter__Btn" onClick={count()}>
        		<AddIcon/>
        	</button>
        </div>
    )
}

Index.propTypes = {
    onCount: PropTypes.func.isRequired
}

export default Index;