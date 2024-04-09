export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let index = 0;
  let employeeIndex = 0;

  return {
    next() {
      if (employeeIndex >= departments[index].length) {
        employeeIndex = 0;
        index++;
      }

      if (index < departments.length) {
        const department = departments[index];
        const employee = department[employeeIndex];
        employeeIndex++;
        return { value: employee, done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
