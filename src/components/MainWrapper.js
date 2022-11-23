import React from "react";
import ExercisesForm from "./ExercisesForm";

const MainWrapper = () => {

  const itemValue = () => {

  }
  return (
    <div className="flex flex-row justify-center align-middle h-screen">
      <div className="card glass w-9/12 text-center place-self-center">
        <div className="card-body">
          <h1 className="card-title flex-col text-4xl mb-5 text-white">
            Workout PR Tracker!
          </h1>
          
          <ExercisesForm />
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
