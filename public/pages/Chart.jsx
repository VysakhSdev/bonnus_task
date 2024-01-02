import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import "./Chart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
function Chart() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //--------------------bar graph---------------------
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const labels = months;
  const chartData = [10, 20, 15, 25, 30, 10, 20, 15, 25, 30, 12, 22];

  const data = {
    labels,
    datasets: [
      {
        label: "products",
        data: chartData,
        backgroundColor: "#EDBF34",
      },
    ],
  };

  // --------------Schedule pie chart-----------------
  const staticDataPie = {
    USA: 20,
    UAE: 10,
    India: 30,
    Canada: 15,
    China: 3,
  };

  const dataPie = {
    labels: [
      `USA: ${staticDataPie.USA || 0}`,
      `UAE: ${staticDataPie.UAE || 0}`,
      `India: ${staticDataPie.India || 0}`,
      `Canada: ${staticDataPie.Canada || 0}`,
      `China: ${staticDataPie.China || 0}`,
    ],
    datasets: [
      {
        data: [
          staticDataPie.USA,
          staticDataPie.UAE,
          staticDataPie.India,
          staticDataPie.Canada,
          staticDataPie.China,
        ],
        backgroundColor: [
          "#3B8701",
          "#bf1a28",
          "#3D2B56",
          "#808080",
          "#0066cc",
        ],
        borderColor: ["#3B8701", "#bf1a28", "#3D2B56", "#808080", "#0066cc"],
        borderWidth: 1,
      },
    ],
  };

  //------Stacked Bar graph--------------
  const monthAxis = months;

  const appleValue = [5, 7, 6, 8, 9, 1, 3, 2, 4, 4, 6, 3, 5];
  const samsungValue = [2, 3, 4, 5, 6, 5, 7, 6, 8, 2, 4, 5];

  const dataStack = {
    labels: monthAxis,
    datasets: [
      {
        label: `Apple`,
        data: appleValue,
        backgroundColor: "#bf1a28",
      },
      {
        label: `Samsung`,
        data: samsungValue,
        backgroundColor: "#3B8701",
      },
    ],
  };

  const optionsStack = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    responsive: true,
  };

  return (
    <>
      <div className=" ">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <h4>Stacked BarGraph</h4>
              <Bar data={dataStack} options={optionsStack} />{" "}
            </div>
          </div>

          <div className="col-6">
            <div className="card">
              <h4>Bar Graph</h4>
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="card">
              <h4>Pie Chart</h4>
              <div style={{ height: "500px", width: "500px" }}>
                <Doughnut data={dataPie} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
