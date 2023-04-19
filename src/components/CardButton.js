
import React from 'react';
import Button from 'react-bootstrap/Button';


const CardButton = ({ title, styleBtn }) => {
  const mainStyle = 'btn btn-success';
  return (
    <div className={styleBtn ? styleBtn : mainStyle}>{title ? title : 'btn'}
    </div>
  );
}
export default CardButton
