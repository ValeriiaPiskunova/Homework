class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

const employees = [
  new Employee("Ivan Polinovski", "Manager", 7500),
  new Employee("Max Smith", "Developer", 4000),
  new Employee("Bob Brown", "Security", 3500),
];

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = '<table border="1">';
    html += "<tr><th>Name</th><th>Position</th><th>Salary</th></tr>";

    for (let employee of this.employees) {
      html += `<tr>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.salary}</td>
            </tr>`;
    }

    html += "</table>";
    return html;
  }
}

const empTable = new EmpTable(employees);
document.getElementById("employee-table").innerHTML =
  empTable.getHtml();
