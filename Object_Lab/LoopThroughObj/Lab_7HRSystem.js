const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };
  
  while (true) {
    const employeeName = prompt('Enter employee name (type "stop" to finish):');
  
    if (employeeName.toLowerCase() === 'stop') {
      break;
    }
  
    const employee = employees[employeeName.toLowerCase()];
  
    if (employee) {
      console.log(`Name: ${employeeName}, Salary: ${employee.salary}, Address: ${employee.address.district}, ${employee.address.province}`);
    } else {
      console.log('Not Found');
    }
  }
  