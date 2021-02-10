import React from 'react';
import styled from 'styled-components'

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #40b9af;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: auto;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
`

const spinner = () => (
    <Spinner/>
);

export default spinner;