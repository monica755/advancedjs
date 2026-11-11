
const StudentProfile = () => {

    const students = {  
        Name:"Moni",Age:"22",
        Course:"IT",City:"Nagapattinam"
    }



  return (
    <>
    
    <div className="bg-amber-300 justify-center p-15">
        <h1>Task-1</h1>
        <h1><b>Student profile </b></h1>
        <h2>Name : {students.Name}</h2>
        <h2>Age: {students.Age}</h2>
        <h2>City : {students.City}</h2>
        
    </div>
    </>
  )}


export default StudentProfile