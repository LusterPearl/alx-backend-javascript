export default function createIteratorObject(report) {
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;
    const departments = Object.values(report.allEmployees);
  
    const iterator = {
      next: function() {
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
      [Symbol.iterator]: function() {
        return this;
      },
    };
  
    return iterator;
  }