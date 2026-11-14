

const Employeedetail = () => {
  const empdetail={
    EmployeeID: "EMP101",
    Name: "Priya",
    Designation: "React Developer",
    Salary:"₹35,000",
    Company: "TCS"
  }
  return(
    <>
    
    <div className="bg-amber-500 p-15">
        <h1>Task-2</h1>
        <h1><b>Employeedetail</b></h1>
        <h2> Employee ID:: {empdetail.EmployeeID}</h2>
        <h2>Name: {empdetail.Name}</h2>
        <h2>Designation : {empdetail.Designation}</h2>
        <h2>Salary : {empdetail.Salary}</h2>
        
        
    </div>
    </>
)}

export default Employeedetail