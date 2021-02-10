import { FETCH_CHART_DATA, FETCH_CHART_DATA_FAILED } from '../types/types'


export const setMonthlySales = () => {
  return {
      type: FETCH_CHART_DATA
  };
};

export const fetchDataFailed = () => {
  return {
      type: FETCH_CHART_DATA_FAILED
  };
};