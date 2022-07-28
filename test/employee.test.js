const Employee = require('../lib/Employee')

test('can make employee object', () => {
    const employeeTest = new Employee()
    expect(typeof(employeeTest)).toBe('object')
});

test('name is being returned', () => {
    const employeeTest = new Employee('John')
    expect(employeeTest.name).toBe('John');
});

test('employee ID is entered properly', () => {
    const employeeTest = new Employee('John','id')
    expect(employeeTest.id).toBe('id');
});

test('Testing to make sure the email is entered correctly.', () => {
    const email = "johndoe@gmail.com";
    const employeeTest = new Employee('John', 'id', email)
    expect(employeeTest.email).toBe(email);
});

test('Testing to make sure the getName function works.', () => {
    const nameTest = "John";
    const employeeTest = new Employee(nameTest)
    expect(employeeTest.getName()).toBe(nameTest)
});

test('Testing to make sure the getId function works.', () => {
    const idTest = 4
    const employeeTest = new Employee('John', idTest)
    expect(employeeTest.getId()).toBe(idTest);
});

test('Testing to make sure the getEmail function works.', () => {
    const emailTest = "johndoe@gmail.com"
    const employeeTest = new Employee('John', 4, emailTest)
    expect(employeeTest.getEmail()).toBe(emailTest);
});

test('Testing to make sure the role functions properly.', () => {
    const returnValue = "Employee";
    const employeeTest = new Employee('John', 4, "johndoe@gmail.com")
    expect(employeeTest.getRole()).toBe(returnValue);
});