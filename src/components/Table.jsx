import Table from "react-bootstrap/Table";

function StripedRowExample({ data, type }) {
    
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          {/* <th>Age</th> */}
          {/* <th>DOB</th> */}
          <th>Course</th>
          {/* <th>College</th> */}
        </tr>
      </thead>
      <tbody>
        {data?.map((student) => (
          <tr key={student.phone}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            {/* <td>{student.age}</td> */}
            {/* <td>{student.dob}</td> */}
            <td>{student.course}</td>
            {/* <td>{student.college}</td> */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
