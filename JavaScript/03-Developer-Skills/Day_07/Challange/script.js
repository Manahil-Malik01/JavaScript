//challange
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}°C in ${i + 1} day${i + 1 > 1 ? "s" : ""} `;
  }

  console.log(str + "...");
};

printForecast(data1);
printForecast(data2);
