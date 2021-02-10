import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Line } from 'react-chartjs-2'

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
    chartData.forEach(el => months.push(el.Month));
    return months;
  }

  const getMonthlySalesData = () => {
    let monthSales = [];
    chartData.forEach(el => monthSales.push(el.Sales_Figure));
    return monthSales;
  }

  const data = {
    labels: getMonths(),
    datasets: [
      {
        label: "JBL SALES",
        data: getMonthlySalesData(),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  }

  let errorHandler = (error === true) ? <h1 style={{textAlign: 'center'}}>Data can't be loaded!</h1> : <Spinner />;
  return (
    <div>
      {(chartData.length !== 0) ? 
        <Line 
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            tooltips: {
              backgroundColor: 'rgb(132, 225, 225)',
              titleFontColor: 'rgb(10, 41, 41)',
              bodyFontColor: 'rgb(10, 41, 41)',
              displayColors: false,
              yAlign: 'bottom'
            },
            scales: {
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Monthly Sales via E-Commerce',
                    fontColor: '#C7C7CC',
                    fontSize: 20
                  }
                }
              ],
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Data in Thousands',
                    fontColor: '#C7C7CC',
                    fontSize: 20
                  }
                }
              ]  
            }  
          }}
      /> : errorHandler
    }
    </div>
  )
}

export default LineChart;