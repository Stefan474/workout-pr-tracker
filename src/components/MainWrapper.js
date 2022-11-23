import React from "react";

const MainWrapper = () => {
  return (
    <div className="flex flex-row justify-center align-middle h-screen">
      <div className="card glass w-9/12 text-center place-self-center">
        <div className="card-body">
          <h1 className="card-title flex-col text-4xl mb-5 text-white">
            Workout Tracker!
          </h1>
          <h2 className="text-white text-3xl">Push records every day!</h2>
          <p className="text-white">Here are your PRs to beat, king.</p>
         
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
