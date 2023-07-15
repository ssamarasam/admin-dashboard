import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

const Teacher = ({ teacher, handleDelete, onEdit }) => {
  const { id } = useParams();

  return (
    <div>
      <h3>Details of the individual Teacher </h3>
      <p>Teacher# {id} </p>
      <p> TeacherName: {teacher.name}</p>
      <Card user={teacher} handleDelete={handleDelete} onEdit={onEdit} />
    </div>
  );
};

export default Teacher;
