// UC8 Adding the script for the salary range update when user is entering the data.
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary—output');
output.textContent = salary.value;
salary.addEventListener('input', function() 
{
    output.textContent = salary.value; 
});
