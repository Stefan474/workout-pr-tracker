import React, {useState, useEffect} from "react";
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
        return [enteredExerciseData, ...previousExercises]
      });
    }

    const deleteSetter = (enteredExerciseData) => {
       setPassedData(previousExercises => {
         return console.log(typeof(previousExercises))
      })


      console.log(passedData)
    }

    let newData;
    const deleteHandler = (deletedExercise) => {
      newData = passedData.filter(previousExercises => deletedExercise !== previousExercises.exercise
       
        )
      
      deleteSetter(newData)
      };
      
      
   
  
  return (
    <div className="flex flex-row justify-center align-middle h-screen">
      <div className="card glass w-9/12 text-center place-self-center shadow-xl overflow-y-auto h-4/6 max-h-4/5}">
        <div className="card-body justify-center">
          <h1 className="card-title flex-col text-4xl mb-5 text-white">
            Workout PR Tracker!
          </h1>
          
          <ExercisesForm onSubmitFormProp={exerciseDataHandler}/>

          <ListedExercises exerciseData={passedData} handleDeletion={deleteHandler}/>

          <button onClick={() => console.log(passedData)} className="btn"> Dugmad </button>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
