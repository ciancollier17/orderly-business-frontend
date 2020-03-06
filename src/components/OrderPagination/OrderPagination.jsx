import React from 'react';
import {Button} from 'reactstrap';

function OrderPagination (props) {
  const buttonStyles = {
    backgroundColor: "#ffffff",
    color: "#555555",
    marginTop: "1rem",
    marginBottom: "1rem"
  };

  return (
    <div>
      {props.prev ? <Button style={{...buttonStyles, float: "left"}} onClick={props.prev}>Newer</Button> : ""}
      {props.next ? <Button style={{...buttonStyles, float: "right"}} onClick={props.next}>Older</Button> : ""}
      <hr style={{clear: "both"}} />
    </div>
  );
}

export default OrderPagination;
