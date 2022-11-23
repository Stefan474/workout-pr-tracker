import React, { useState } from "react";

const ExercisesForm = () => {
  const [isActive, setIsActive] = useState(false);

  const formHandlerTrue = () => {
    setIsActive(true);
  };

  const formHandlerFalse = () => {
    setIsActive(false);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    setIsActive(false);
  };

  const exerciseChangeHandler = (e) => {
    const exercise = e.target.value;
  };
  const weightChangeHandler = (e) => {
    const weight = e.target.value;
  };
  const setsChangeHandler = (e) => {
    const sets = e.target.value;
  };
  const repsChangeHandler = (e) => {
    const reps = e.target.value;
  };
  const messageChangeHandler = (e) => {
    const message = e.target.value;
  };

  let formContent = (
    <div>
      <h2 className="text-white text-3xl mb-3">Push records every day!</h2>
      <button className="btn btn-primary mb-5" onClick={formHandlerTrue}>
        Add a new exercise!
      </button>
      ;<p className="text-white mb-6">Here are your PRs to beat, king:</p>
    </div>
  );

  //Form component that will pass the arguments through the submitHandler into the item component.
  if (isActive === true) {
    formContent = (
      <div>
        <form className="flex-col">
          <h3 className="text-2xl text-white mb-5">Log your PR!</h3>
          <input
            type="text"
            placeholder="Exercise name"
            className="input input-bordered input-info w-full max-w-xs mb-2"
            onChange={exerciseChangeHandler}
            required
          />
          <br></br>
          <input
            type="number"
            placeholder="Exercise weight"
            className="mb-2 input input-bordered input-info w-full max-w-xs"
            onChange={weightChangeHandler}
            required
          />
          <br></br>
          <input
            type="number"
            placeholder="How many sets king?"
            className="mb-2 input input-bordered input-info w-full max-w-xs"
            onChange={setsChangeHandler}
            required
          />

          <br></br>
          <input
            type="number"
            placeholder="How many reps king?"
            className="mb-2 input input-bordered input-info w-full max-w-xs"
            onChange={repsChangeHandler}
            required
          />
          <br></br>
          <input
            type="text"
            placeholder="Any message to yourself king? Notes?"
            className="input input-bordered input-info w-full max-w-xs mb-2"
            onChange={messageChangeHandler}
            required
          />
          <br></br>
          <button
            className="btn btn-primary mx-1 mt-3"
            onClick={formHandlerFalse}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary mx-1 mt-3">
            Submit
          </button>
        </form>
      </div>
    );
  }

  return <div>
    {formContent}
    </div>;
};

export default ExercisesForm;
