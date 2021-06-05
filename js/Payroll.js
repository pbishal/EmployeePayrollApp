// UC8 Adding the script for the salary range update when user is entering the data.
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary—output');
output.textContent = salary.value;
salary.addEventListener('input', function() 
{
    output.textContent = salary.value; 
});
// UC 9 PopulateOnSubmit
const save = () => {
    try {
        let EmployeePayroll = createEmployeePayroll();
    }
    catch (e) {
        return e;
    }
}
const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayroll();
    try {
        employeePayrollData.name = getInputValueById('#name');
    }
    catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+","+getInputValueById('#month')+","+getInputValueById('#year');
    employeePayrollData.startDate = new Date(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let sellItems = [];
    allItems.forEach(item => {
        if (item.checked)
            sellItems.push(item.value);
    });
    return sellItems;
}
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}