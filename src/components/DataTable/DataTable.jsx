import React, {useState, useEffect} from 'react';
import sortDataset from './sortDataset';

function DataTable (props) {
  const [dataset, setDataset] = useState(props.dataset);

  // If prop changes update the dataset state
  useEffect(() => {
    setDataset(props.dataset);
  }, [props.dataset]);

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

  const sortButtonStyles = {
    backgroundColor: "#5bc0de",
    border: "0",
    fontSize: "0.5rem"
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
                <div style={{display: "flex", alignItems: "center"}}>
                  <span>{label}</span>
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={sortButtonStyles} className="sortAscending" onClick={() => setDataset(sortDataset(dataset, index))}>U</button>
                    <button style={sortButtonStyles} className="sortDescending" onClick={() => setDataset(sortDataset(dataset, index, false))}>D</button>
                  </div>
                </div>
              </td>
            );
          })}
        </tr>
        {dataset.map((row, index) => {
          return (
            <tr key={"r" + index} style={dataRowStyles}>
              {row.map((cell, indexc) => {
                return <td key={"c" + indexc} style={{padding: "0.5rem"}}>{cell}</td>;
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
