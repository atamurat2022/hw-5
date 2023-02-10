import React from "react"
import Chart from "../Chart/Chart"

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: "январь", value: 0 },
    { label: "февраль", value: 0 },
    { label: "март", value: 0 },
    { label: "апрель", value: 0 },
    { label: "май", value: 0 },
    { label: "июнь", value: 0 },
    { label: "июль", value: 0 },
    { label: "август", value: 0 },
    { label: "сентябрь", value: 0 },
    { label: "октябрь", value: 0 },
    { label: "ноябрь", value: 0 },
    { label: "декабрь", value: 0 },
  ]
  for (const expense of expenses) {
    const expenseMonthIndex = expense.date.getMonth()
    chartDataPoints[expenseMonthIndex].value += expense.amount
  }
  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart
