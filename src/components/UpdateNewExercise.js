import React, { useState } from "react";

function UpdateNewExercise(props) {
  const [exercise, setExercise] = useState(props.exercise);
  const [weight, setWeight] = useState(props.weight);
  const [sets, setSets] = useState(props.sets);
  const [reps, setReps] = useState(props.reps);
  const [message, setMessage] = useState(props.message);

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

  const updateHandler = () => {

    const data={
        exercise: exercise,
        weight: weight,
        sets: sets,
        reps: reps,
        message: message
  }
        
      props.onSubmitForm(data)
  }

  return (
    <div>
      <a href="#my-modal-2" className="btn">
        open modal
      </a>
      <div className="modal z-10" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <form className="flex-col">
        <h3 className="text-2xl text-white mb-5">Update your PR!</h3>
        <br></br>
        <input
          type="number"
          placeholder={`Old PR: ${weight} lbs`}
          className="mb-2 input input-bordered input-info w-full max-w-xs"
          onChange={weightChangeHandler}
          required
        />
        <br></br>
        <input
          type="number"
          placeholder={`Old PR: ${sets} sets`}
          className="mb-2 input input-bordered input-info w-full max-w-xs"
          onChange={setsChangeHandler}
          required
        />

        <br></br>
        <input
          type="number"
          placeholder={`Old PR: ${reps} reps`}
          className="mb-2 input input-bordered input-info w-full max-w-xs"
          onChange={repsChangeHandler}
          required
        />
        <br></br>
        <input
          type="text"
          placeholder="New note!"
          className="input input-bordered input-info w-full max-w-xs mb-2"
          onChange={messageChangeHandler}
          required
        />
        <br></br>
        <button
          className="btn btn-primary mx-1 mt-3"
          onClick={console.log("?")}
        >
          Cancel
        </button>
        <button
          onClick={updateHandler}
          className="btn btn-primary mx-1 mt-3"
        >
          Submit
        </button>
      </form>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UpdateNewExercise;
