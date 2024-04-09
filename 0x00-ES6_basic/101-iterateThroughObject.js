export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.values(report.allEmployees);

  const iterator = {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const department = departments[currentDepartmentIndex];
      const employee = department[currentEmployeeIndex];

      currentEmployeeIndex++;

      if (currentEmployeeIndex >= department.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      }

      return { value: employee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return iterator;
}
