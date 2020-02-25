import React from 'react';

function DataTable (props) {
  const tableStyles = {
    width: "100%",
    border: "2px solid #5bc0de"
  };

  const labelRowStyles = {
    backgroundColor: "#5bc0de",
    color: "#222222"
  };

  const dataRowStyles = {
    backgroundColor: "#f7f7f7",
  };

  return (
    <div style={{padding: "1rem"}}>
      <h3>{props.title}</h3>
      <table style={tableStyles}>
        <tbody>
        <tr style={labelRowStyles}>
          {props.labels.map(label => {
            return <td style={{padding: "0.5rem"}}>{label}</td>;
          })}
        </tr>
        {props.dataset.map(row => {
          return (
            <tr style={dataRowStyles}>
              {row.map(cell => {
                return <td style={{padding: "0.5rem"}}>{cell}</td>;
              })}
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
