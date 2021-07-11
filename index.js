// Write your solution in this file!
const employee = {
    name: 'Jay',
    streetAddress: '123 marion ave'
}

function updateEmployeeWithKeyAndValue(object, key, value){
    return Object.assign({}, object, {[key]: value});
}
 
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key){
    const newobject = Object.assign({}, object);
    delete newobject[key];
    return newobject;
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return employee;
}