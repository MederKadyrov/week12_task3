import React, { useState } from "react";

const Jurnal = ({ employees, dataSalaryArr, dataDaysArr, sum }) => {
  // для дней
  const [dataDays, setDataDays] = useState(dataDaysArr);
  //   для зп
  const [dataSalary, setDataSalary] = useState(dataSalaryArr);
  //   сумма
  const [sumAll, setSumAll] = useState(sum);
  // суммирует все
  const toSummAll = function () {
    const arr1 = dataDaysArr;
    const arr2 = dataSalaryArr;
    const sum = arr1.reduce((a, b, c) => a + arr1[c] * arr2[c], 0);
    setSumAll(sum);
  };
  // высчитывает зп для одного
  const toSumOne = function (id) {
    return dataDays[id] * dataSalary[id];
  };
  // навешивается на инпут дней и изменяет массив для дней
  const inpChange = function (id, e) {
    let newData = dataDays;
    newData.splice(id, 1, e.target.value);
    setDataDays(newData);
  };
  // навешивается на инпут зп и изменяет массив для зп

  const inpSalaryChange = function (id, e) {
    let newData = dataSalary;
    newData.splice(id, 1, e.target.value);
    setDataSalary(newData);
  };

  return (
    <div>
      <table border="1">
        <tbody>
          {employees.map((item, index) => {
            let i = item.salaryPerDay * item.days;
            return (
              <tr key={item.name}>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>
                  <p>{item.surname}</p>
                </td>
                <td>
                  <input
                    type="text"
                    defaultValue={item.days}
                    onChange={(e) => {
                      inpChange(index, e);
                      toSummAll();
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    defaultValue={item.salaryPerDay}
                    onChange={(e) => {
                      inpSalaryChange(index, e);
                      toSummAll();
                    }}
                  />
                </td>
                <td>
                  <p>{toSumOne(index)}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>{sumAll}</p>
    </div>
  );
};

export default Jurnal;
