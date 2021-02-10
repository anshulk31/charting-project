import React, {useState} from 'react'
import styled from 'styled-components'

import LineChart from './components/Charts/LineChart'
import Header from './components/UI/Header/index'
import PieChart from './components/Charts/PieChart'

const Toolbar = styled.div`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #40b9af;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`

const ChartContainer = styled.div`
  position: relative;
  margin: auto;
  height: 80vh;
  width: 80vw;
  padding: 100px;
`
const Select = styled.select`
  height: 38px;
  border: none;
  float: right;
  margin-right:5px;
  background-color: #40b9af;
`

const App  = () => {

  const [chartType, setChartType] = useState('line')

  const changeChart = (e) => {
    setChartType(e.target.value)
  }

  return (
    <>
      <Toolbar>
          <Header/>
          <nav>
            <Select onChange={changeChart}>
            <option value="line">Line Chart</option>
            <option value="pie">Pie Chart</option>
          </Select>
          </nav>
      </Toolbar>
      <ChartContainer>
        {(chartType === 'line') ? <LineChart /> : <PieChart /> }
      </ChartContainer>
    </>
  );
}

export default App;
