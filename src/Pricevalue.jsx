import React from 'react';

export default (props) => (
  <span>{new Array(parseInt(props.value, 10)).fill(props.quantity).fill(props.price).join()}</span>
);