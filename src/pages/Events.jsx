import { useState } from "react";
import { studentData } from "../assets/TableData";
import StripedTable from "../components/Table";

const Events = () => {
  const [studentsWithBirthdayToday, setStudentsWithBirthdayToday] = useState(
    []
  );

  const getStudentsWithBirthdayToday = () => {
    const today = new Date();
    const todayMonth = today.getMonth() + 1; // Months are zero-indexed, so we add 1 to get the current month.
    const todayDay = today.getDate();

    const studentsWithBirthdayToday = studentData.filter((student) => {
      const [studentYear, studentMonth, studentDay] = student.dob
        .split("-")
        .map(Number);

      return studentMonth === todayMonth && studentDay === todayDay;
    });

    return studentsWithBirthdayToday;
  };

  // Update state with the students who have their birthday today
  useState(() => {
    const studentsToday = getStudentsWithBirthdayToday();
    setStudentsWithBirthdayToday(studentsToday);
  }, []);

  return (
    <div className="base--container">
      <h2 className="secondary--title">Students with Birthday Today</h2>
      {studentsWithBirthdayToday.length === 0 ? (
        <p>No students have their birthday today.</p>
      ) : (
        <StripedTable
          columns={[
            { Header: "Sr. No", accessor: "id" },
            { Header: "Name", accessor: "name" },
            { Header: "Email", accessor: "email" },
            { Header: "Phone", accessor: "phone" },
            { Header: "Course", accessor: "course" },
          ]}
          data={studentsWithBirthdayToday}
        />
      )}
    </div>
  );
};

export default Events;
