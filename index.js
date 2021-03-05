// Write your solution in this file!
const employee = {
    name: 'Eric',
    streetAddress: 'Monaco Way'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { name: 'Sam' }, {streetAddress: '11 Broadway'});
}    

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee['name'] = 'Sam';
    employee['streetAddress'] = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
   return Object.assign({}, employee, {name: undefined });    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}


