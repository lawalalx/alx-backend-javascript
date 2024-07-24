export default function createIteratorObject(report) {
  function* employeeIterator(departments) {
    for (const department of Object.values(departments)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return employeeIterator(report.allEmployees);
}
