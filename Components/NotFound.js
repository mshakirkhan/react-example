import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const errors = useRouteError();
  console.log(errors);
  return (
    <>
      <div>Not Found</div>
      <div>Status: {errors.status}</div>
      <div>Status Text: {errors.statusText}</div>
    </>
  )
}

export default NotFound