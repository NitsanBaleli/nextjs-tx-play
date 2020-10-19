import JSONTree from "react-json-tree";
import AlertDialog from "../components/Dialog";

export const Employee = ({ employee }) => {
  const onClose = (reason) => {
    console.log(reason);
  };
  return (
    <>
      <JSONTree data={employee} />
      <h1>name: {employee.employee_name}</h1>
      <h2>salary: {employee.employee_salary}</h2>
      <h2>age: {employee.employee_age}</h2>
      <AlertDialog
        // buttonTitle={employee.employee_name}
        // title={employee.employee_name}
        employee={employee}
        onClose={onClose}
      ></AlertDialog>
    </>
  );
};
