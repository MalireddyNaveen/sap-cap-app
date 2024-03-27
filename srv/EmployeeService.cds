using { demo.db as db } from '../db/data-module';
@path :'/EmployeeSRV'
service EmployeeService {
    entity Employee as projection on db.Employee;
    entity Address as projection on db.Address;

}