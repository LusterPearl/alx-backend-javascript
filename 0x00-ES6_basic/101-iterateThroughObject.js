export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = [];
  for (const department of Object.values(reportWithIterator)) {
    for (const employees of Object.values(department)) {
      employeeNames = employeeNames.concat(employees);
    }
  }
  return employeeNames.join(' | ');
}
