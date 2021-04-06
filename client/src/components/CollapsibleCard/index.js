import React, { useState } from 'react';
import './CollapsibleCard.css';
import PropTypes from 'prop-types';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Index = ({title, children}) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleCollapsible = evt => {
		evt.stopPropagation();
		setIsCollapsed(!isCollapsed);
	}

	return (
		<>
			<button type="button" className="CollapsibleCard__Toggler" onClick={toggleCollapsible}>
				{ title }
				{ isCollapsed 
					? <ArrowDownIcon className="Icon"/>
					: <ArrowUpIcon className="Icon"/> }
			</button>
			<div className={`CollapsibleCard__Content ${isCollapsed && "CollapsibleCard__Content--Collapse"}`}>
				{children}
			</div>
		</>
	)
}

Index.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
}

Index.defaultProps = {
	title: 'Card heading'
}

export default Index;