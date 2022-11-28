import React, { useState } from "react";
import NewExercise from "./NewExercise";

function ListedExercises(props) {
  const handleDeletion = (deletedExercise) => {
    props.handleDeletion(deletedExercise);
  };
  let i = 0;

  return (
    <>
      <ul className=" mt-1 flex flex-row flex-wrap mx-auto mb:flex-col">
        {props.exerciseData.map((something, index) => (
          <NewExercise
            key={index}
            exercise={something.exercise}
            sets={something.sets}
            weight={something.weight}
            message={something.message}
            reps={something.reps}
            deleteComponent={handleDeletion}
          />
        ))}
      </ul>
      <button className="btn btn-primary" onClick={()=>console.log(props)}>log props in listed</button>
    </>
  );
}

export default ListedExercises;
