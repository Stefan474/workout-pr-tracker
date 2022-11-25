import React, { useState } from "react";

const ExercisesForm = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [enteredExercise, setExercise] = useState('');
  const [enteredWeight, setWeight] = useState('');
  const [enteredSets, setSets] = useState('');
  const [enteredReps, setReps] = useState('');
  const [enteredMessage, setMessage] = useState("");

  const formHandlerTrue = () => {
    setIsActive(true);
  };

  const formHandlerFalse = () => {

    setIsActive(false);
    setExercise('');
    setWeight('');
    setSets('');
    setReps('');
    setMessage('');
  };

  const submitFormHandler = (e) => {
    const exerciseData = "";
    if (enteredExercise !== '' && enteredWeight !== '' && enteredSets !== '' && enteredReps !== ''){
    e.preventDefault();

    const exerciseData = {
      exercise: enteredExercise,
      weight: enteredWeight,
      sets: enteredSets,
      reps: enteredReps,
      message: enteredMessage
    }
    props.onSubmitFormProp(exerciseData);

    formHandlerFalse();
  }
    
  };

  const exerciseChangeHandler = (e) => {
    setExercise(e.target.value);
  };
  const weightChangeHandler = (e) => {
    setWeight(e.target.value);
  };
  const setsChangeHandler = (e) => {
    setSets(e.target.value);
  };
  const repsChangeHandler = (e) => {
    setReps(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  let formContent = (
    <div>
      <h2 className="text-white text-2xl mb-5">Made by <span className="text-cyan-100	">Stefan</span> with React and Tailwind!</h2>
      <button className="btn btn-primary mb-5" onClick={formHandlerTrue}>
        Add a new exercise!
      </button>
      ;<p className="text-white mb-1 text-lg">Here are your PRs to beat, king:</p>
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
            placeholder="Notes for yourself? (30 ch max)"
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
          <button type="submit" onClick={submitFormHandler} className="btn btn-primary mx-1 mt-3">
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
