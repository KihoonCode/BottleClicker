import React from 'react';

const ClickButton = ({clickHandler, helper}) => {
  return (
    <button onClick={() => clickHandler(helper)}> Create!! </button>
  )
}

export default ClickButton;
