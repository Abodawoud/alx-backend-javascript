export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments: (allEmployees) => Object.keys(allEmployees).length,
  };
  return report;
}
