import React from 'react';
import {Button} from 'reactstrap';

function CompleteCheckmark () {
  const styles = {
    borderRadius: "100%",
    border: "0.25rem solid #5cb85c",
    color: "#5cb85c",
    fontWeight: "900"
  };

  return (
    <Button style={styles} color="white">&#10003;</Button>
  );
}

export default CompleteCheckmark;
