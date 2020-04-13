import React from 'react';
import IconWithText from './IconWithText';
import { FaStar } from "react-icons/fa";

function Stars(props){
  const { amount } = props;
  return <IconWithText icon={<FaStar/>} text={amount} iconColor={"yellow"} textColor={"black"} />
}

export default Stars;