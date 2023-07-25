import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  const { cardId } = useParams();
  return (
    <div>Card ID: {cardId}</div>
  )
}

export default CardDetails