import React, {useState} from "react";
import ExercisesForm from "./ExercisesForm";
import ListedExercises from "./ListedExercises"

const MainWrapper = () => {

  const exerciseData = [{
    exercise: 'Bicep Curl',
    weight: 20,
    sets: 3,
    reps: 15, 
    message: "Pog, let's go man."
  }]

  const [passedData, setPassedData] = useState(exerciseData);
  
  const exerciseDataHandler = (enteredExerciseData) => {
      setPassedData(previousExercises => {
        return [enteredExerciseData, ...passedData]
      });
    }
   
  
  return (
    <div className="flex flex-row justify-center align-middle h-screen">
      <div className="card glass w-9/12 text-center place-self-center shadow-xl overflow-y-scroll h-3/5 max-h-4/5}">
        <div className="card-body">
          <h1 className="card-title flex-col text-4xl mb-5 text-white">
            Workout PR Tracker!
          </h1>
          
          <ExercisesForm onSubmitFormProp={exerciseDataHandler}/>

          <ListedExercises exerciseData={passedData}/>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
