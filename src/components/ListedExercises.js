import React, { useState } from "react";
import NewExercise from "./NewExercise";

function ListedExercises(props) {
  const [exerciseProp, setExerciseProp] = useState(props.exerciseData.exercise);

  const testFunc = (e) => {
    console.log(props.exerciseData);
    props.exerciseData.map((something) => (
      <NewExercise
        exercise={something.title}
        sets={something.sets}
        weight={something.weight}
        message={something.message}
        reps={something.reps}
      />
    ));
  };
  let i=0;
  
  return (
    <ul className=" mt-1 flex flex-row col-2 flex-wrap mx-auto">
      {props.exerciseData.map((something) => (
        <NewExercise
          key = {i++}
          exercise={something.exercise}
          sets={something.sets}
          weight={something.weight}
          message={something.message}
          reps={something.reps}
        />
      ))}
    </ul>
  );
}

export default ListedExercises;
