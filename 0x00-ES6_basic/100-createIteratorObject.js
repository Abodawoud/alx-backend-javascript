export default function createIteratorObject(report) {
  const keys = Object.keys(report.allEmployees);
  const names = [];

  keys.forEach((ele) => names.push(report.allEmployees[ele]));
  return names.flat();
}
