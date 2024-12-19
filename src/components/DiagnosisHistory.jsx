import { useEffect, useRef, useState } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip,
} from 'chart.js';

// Register required Chart.js components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Legend,
  Tooltip
);

const DiagnosisHistory = ({ data }) => {
  const chartRef = useRef(null);
  const [timeframe, setTimeframe] = useState(3);
  const [filteredData, setFilteredData] = useState([]);

  // Filter data based on the selected timeframe
  useEffect(() => {
    const endIndex = data.length; // Latest data
    const startIndex = Math.max(endIndex - timeframe, 0); // Calculate starting point
    const newFilteredData = data.slice(startIndex, endIndex);
    setFilteredData(newFilteredData);
  }, [timeframe, data]);

  // Initialize and update the chart
  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: filteredData.map((d) => `${d.month}, ${d.year}`),
        datasets: [
          {
            label: 'Systolic',
            data: filteredData.map((d) => d.blood_pressure.systolic.value),
            borderColor: 'rgba(230, 111, 210, 1)',
            backgroundColor: 'rgba(230, 111, 210, 0.2)',
            fill: false,
            tension: 0.4,
          },
          {
            label: 'Diastolic',
            data: filteredData.map((d) => d.blood_pressure.diastolic.value),
            borderColor: 'rgba(140, 111, 230, 1)',
            backgroundColor: 'rgba(140, 111, 230, 0.2)',
            fill: false,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Blood Pressure Over Time' },
        },
        scales: {
          y: { beginAtZero: false },
        },
      },
    });

    return () => chart.destroy(); // Cleanup on component unmount
  }, [filteredData]);

  return (
    <>
      <div className="diagnosis-history">
        <h2>Diagnosis History</h2>
        <div className="blood-pressure-box">
          <div className="chart-container">
            <canvas id="diagnosisChart" ref={chartRef}></canvas>
          </div>
          <div className="details-container">
            <select
              id="timeFrame"
              value={timeframe}
              onChange={(e) => setTimeframe(Number(e.target.value))}
            >
              <option value={3}>Last 3 months</option>
              <option value={6}>Last 6 months</option>
              <option value={9}>Last 9 months</option>
              <option value={12}>Last 12 months</option>
            </select>
            {filteredData.length > 0 && (
              <div id="details">
                <div className="details-list">
                  <h3>Systolic</h3>
                  <h2>{filteredData[filteredData.length - 1].blood_pressure.systolic.value}</h2>
                  <p>
                    <img src="images/icons/ArrowUp.svg" alt="" />{' '}
                    {filteredData[filteredData.length - 1].blood_pressure.systolic.levels}
                  </p>
                </div>
                <div className="details-list">
                  <h3>Diastolic</h3>
                  <h2>{filteredData[filteredData.length - 1].blood_pressure.diastolic.value}</h2>
                  <p>
                    <img src="images/icons/ArrowDown.svg" alt="" />{' '}
                    {filteredData[filteredData.length - 1].blood_pressure.diastolic.levels}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="blood-pressure-boxes">
          <div className="box respiratory-rate">
            <div className="img-box">
              <img src="images/icons/respiratory_rate.svg" alt="" />
            </div>
            <div className="info-box">
              <p>Respiratory Rate</p>
              <h3>{filteredData[filteredData.length - 1]?.respiratory_rate.value} bpm</h3>
              <span>{filteredData[filteredData.length - 1]?.respiratory_rate.levels}</span>
            </div>
          </div>
          <div className="box temperature">
            <div className="img-box">
              <img src="images/icons/temperature.svg" alt="" />
            </div>
            <div className="info-box">
              <p>Temperature</p>
              <h3>{filteredData[filteredData.length - 1]?.temperature.value}°F</h3>
              <span>{filteredData[filteredData.length - 1]?.temperature.levels}</span>
            </div>
          </div>
          <div className="box heart-rate">
            <div className="img-box">
              <img src="images/icons/HeartBPM.svg" alt="" />
            </div>
            <div className="info-box">
              <p>Heart Rate</p>
              <h3>{filteredData[filteredData.length - 1]?.heart_rate.value} bpm</h3>
              <span>{filteredData[filteredData.length - 1]?.heart_rate.levels}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosisHistory;