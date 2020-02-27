import React, {useState} from 'react';
import sortDataset from './sortDataset';

function DataTable (props) {
  const [dataset, setDataset] = useState(props.dataset);

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
          {props.labels.map((label, index) => {
            return (
              <td style={{padding: "0.5rem"}}>
                {label}
                <a className="sortAscending" href="/" onClick={() => setDataset(sortDataset(dataset, index))}>Up</a>
                <a className="sortDescending" href="/" onClick={() => console.log("hi")}>Down</a>
              </td>
            );
          })}
        </tr>
        {dataset.map(row => {
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
