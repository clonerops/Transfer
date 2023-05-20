import React, { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartDataLabels
);


interface IProps {
    data: any
    label: string
}

export const Chart:FC<IProps> = ({ data, label }) => {
  const options: any = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
            family: "IRANSans",
          }
        },
        title: {
          display: true,
          font: {
            size: 12,
            family: "IRANSans",
          }
        }
      },
      y: {
        ticks: {
          font: {
            size: 12,
            family: "IRANSans",
          }
        },
        title: {
          display: true,
          font: {
            size: 12,
            family: "IRANSans",
          }
        }
      }
    },
    responsive: true,
    plugins: {
      datalabels: {
        // display: true,
        color: 'orange',
        right: 80,
        labels: {
          title: {
            font: {
              family: "IRANSans",
              weight: 'bold'
            }
          },
        }
      },
      tooltip: {
        padding: 10,
        footerSpacing: 0,
        boxHeight: 10,
        titleFont: {
          family: "IRANSans",
        },
        bodyFont: {
          size: 14.2,
          family: "IRANSans",
        },
      },
      legend: {
        labels: {
          color: "rgb(255, 99, 132)",
          font: {
            family: "IRANSans", // Add your font here to change the font of your legend label
          }
        },
        position: 'top',
      },
    },
  };
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = data?.map((s: any) => s.statusDesc);
  // const nums = ['1', '2', '3', '4', '5', '6', '7'];
  const dataSet = {
    labels,
    datasets: [
      {
        label: label,
        fill: true,
        data: data?.sort((a: any, b: any) => a.id - b.id).map((s: any) => s.count),
        fontFamily: 'IRANSans',
        borderWidth: 2,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },

    ],
  };
  return <div className='w-100' style={{ marginRight: 'auto', marginLeft: 'auto' }}>
    <Line options={options} data={dataSet} />
  </div>
}
