// Write your solution in this file!
const employee = {}

function updateEmployeeWithKeyAndValue(employees, key, value) {
    const newEmployees = {...employees}
    newEmployees[key] = value
    return newEmployees
}

function destructivelyUpdateEmployeeWithKeyAndValue(employees, key, value) {
    employees[key] = value
    return employee
}

function deleteFromEmployeeByKey(employees, key) {
    const newEmployees = {...employees}
    delete newEmployees[key]
    return newEmployees
}

function destructivelyDeleteFromEmployeeByKey(employees, key) {
    delete employees[key]
    return employees
}