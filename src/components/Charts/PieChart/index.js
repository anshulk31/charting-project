import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Pie } from 'react-chartjs-2'

import { setMonthlySales } from '../../../redux/actions/index'
import Spinner from '../../UI/Spinner'

const LineChart = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setMonthlySales())
  }, [])

  const chartData = useSelector(state => state.data)
  const error = useSelector(state => state.error)

  const getMonths = () => {
    let months = [];
    if(chartData === undefined){
      return;
    }
    chartData.forEach(el => months.push(el.Month));
    return months;
  }

  const getMonthlySalesData = () => {
    let monthSales = [];
    if(chartData === undefined){
      return;
    }
    chartData.forEach(el => monthSales.push(el.Sales_Figure));
    return monthSales;
  }

  const dynamicColors = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  const colorsArray = (size) => {
    let colors = []
    for(let i=0;i<size;i++){
        colors.push(dynamicColors());
    }
    return colors;
  }  

  const data = {
    labels: getMonths(),
    datasets: [
      {
        label: "CAR SALES",
        data: getMonthlySalesData(),
        backgroundColor: colorsArray(chartData.length)
      }
    ]
  }

  let errorHandler = (error === true) ? <h1 style={{textAlign:'center'}}>Data can't be loaded!</h1> : <Spinner />;

  return (
    <div>
      {(chartData.length !== 0) ? 
        <Pie 
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            legend: {
              position: 'bottom',
              labels: {
              },
            },
            tooltips: {
              enabled: true,
              backgroundColor: 'rgb(255, 225, 225)',
              titleFontColor: 'rgb(0, 0, 0)',
              bodyFontColor: 'rgb(0, 0, 0)',
              displayColors: false,
              callbacks: {
                label: function (tooltipItem, data) {
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                  });
                  var currentValue = dataset.data[tooltipItem.index];
                  var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                  return 'Sale ' + percentage + "%";
                },                    
                title: function (tooltipItem, data) {
                  return data.labels[tooltipItem[0].index];
                }
              }  
            }
          }}
      /> : 
      errorHandler }
    </div>
  )
}

export default LineChart;