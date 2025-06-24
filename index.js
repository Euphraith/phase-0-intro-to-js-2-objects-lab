const employee = {
    name:"wanjiru",
    streetAddress:" Nairobi"
}

 function updateEmployeeWithKeyAndValue(employee, key,value){
    return {
        ...employee,
        "name" : 'Sam',
        "streetAddress":"11 Broadway"

    }
 }

 function destructivelyUpdateEmployeeWithKeyAndValue( employee, key, value) {
    employee[key]=value
    return {
        name: 'Sam',
        "streetAddress":"12 Broadway"
    }
 }

 function deleteFromEmployeeByKey(employee, key ){
    const newEmployee = {...employee};
    delete newEmployee['name'];
    return newEmployee;
   
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key ){
    delete employee[ key];
    return employee;
 }