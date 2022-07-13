export default function mostProfitableDepartment(salesData) {

  var saleMap = {}

  for (var i = 0; i < salesData.length; i++) {
    var data = salesData[i]
    saleMap[data.department] = 0
  }

  for (var i = 0; i < salesData.length; i++) {
    var data = salesData[i]
    var currentDepartmentTotal = saleMap[data.department]

    currentDepartmentTotal += data.sales
    saleMap[data.department] = currentDepartmentTotal
  }
  var currentMaxSales = 0
  var currentSales = ""
  for (const department in saleMap) {
    const currentDepartmentSales = saleMap[department]
    if (currentDepartmentSales > currentMaxSales) {
      currentMaxSales = currentDepartmentSales
      currentSales = department
    }

  }
  return currentSales



}
