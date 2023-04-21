import React, { useState } from 'react'
import Counter from './components/counter/Counter';
import Paragraph from './components/paragraph/Paragraph';
import Jurnal from './components/jurnal/Jurnal';

const employees = [
  { name: 'SALAMAT', surname: 'BAIKE', days: 20, salaryPerDay: 80 },
  { name: 'Dastan', surname: 'aaa', days: 15, salaryPerDay: 40 },
  { name: 'Emir', surname: 'bbb', days: 22, salaryPerDay: 60 },
  { name: 'Sheraman', surname: 'ccc', days: 15, salaryPerDay: 55 },
  { name: 'Albina', surname: 'kkk', days: 18, salaryPerDay: 44 },
  { name: 'Azret', surname: 'hhh', days: 10, salaryPerDay: 22 },
  { name: 'Mirdin', surname: 'Agai', days: 20, salaryPerDay: 70 },
  { name: 'Bayish', surname: 'zzz', days: 16, salaryPerDay: 33 },
  { name: 'Adilet', surname: 'Gazybekov', days: 11, salaryPerDay: 16 },
  
  { name: 'Aidana', surname: 'pppp', days: 5, salaryPerDay: 28 },
  { name: 'Ilim', surname: 'ttt', days: 12, salaryPerDay: 72 },
  ];

  // массив для всех дней
  const dataDaysArr = [];
  // массив для всех рабочих ставок
  const dataSalaryArr = [];
  
  // собираем все дни и рабочие ставки в массивы
  employees.forEach(item => {
    dataDaysArr.push(item.days);
    dataSalaryArr.push(item.salaryPerDay);
  })

  let sum = 0;

  const toSummAll = function () {
    let arr1 = dataDaysArr;
    let arr2 = dataSalaryArr;
    sum = arr1.reduce((a, b, c) => a + (arr1[c] * arr2[c]), 0);
  };
  toSummAll();





const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = function() {
    setCounter(counter + 1);
  }
  const decrement = function() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <Counter counter={counter} increment={increment} decrement={decrement} />
      <Paragraph/>
      <Jurnal employees={employees} dataDaysArr={dataDaysArr} dataSalaryArr={dataSalaryArr} sum={sum}/>
    </div>
  )
}

export default App