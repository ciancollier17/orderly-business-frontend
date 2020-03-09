import React, {useState, useEffect} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import Chart from 'chart.js'
import generateBarChart from './generateBarChart';

function DataChart (props) {
  const [chart, setChart] = useState(0);

  useEffect(() => {
    let ctx = document.getElementById('testchart').getContext('2d');
    let displayedChart = generateBarChart(ctx, props.dataset, props.charts[chart].col, props.labels);
  }, [chart, props.dataset]);

  return (
    <div style={{padding: "1rem"}}>
      <Nav pills style={{fontSize: "0.8rem"}}>
        {props.charts.length > 1 ? props.charts.map((chartSettings, index) => {
          return (
            <NavItem>
              <NavLink active={chart == index} onClick={() => setChart(index)}>{chartSettings.nav}</NavLink>
            </NavItem>
          );
        }) : ""}
      </Nav>
      <h5 style={{textAlign: "center", marginTop: "1rem"}}>{props.charts[chart].title}</h5>
      <canvas id="testchart"></canvas>
    </div>
  );
}

export default DataChart;
