import React from "react";

function StudentList() {
  const students = [
    "Priya",
    { name: "Raj", age: 18, marks: ["hh", "dd", "dd"] },
    { name: "Aman", age: 20 },
  ];

  return (
    <ul>
      {/* {students.map((name, index) => (
        <li key={index}>{name}</li>
      ))} */}
      {students.map((item, index) => {
        return <li>{item.marks[1]}</li>;
      })}
    </ul>
  );
}

export default StudentList;
