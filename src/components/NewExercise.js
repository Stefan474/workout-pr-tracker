import React, {useState, useEffect} from "react";


function NewExercise(props) {

    let effectHandler = false;

      useEffect(() => {
          if(effectHandler == false){         
          setExercise(props.exercise)
          setWeight(props.weight)
          setSets(props.sets)
          setReps(props.reps)
          setMessage(props.message)
          setId(props.id)
          }
     })

    const [exercise, setExercise] = useState(props.exercise);
    const [weight, setWeight] = useState(props.weight);
    const [sets, setSets] = useState(props.sets);
    const [reps, setReps] = useState(props.reps);
    const [message, setMessage] = useState(props.message);
    const [id, setId] = useState(props.id);

    const dataHandler = (data) => {
        setExercise(data.exercise)
        setWeight(data.weight)
        setSets(data.sets)
        setReps(data.reps)
        setMessage(data.message)
        setId(data.id)

        console.log(data);
    }

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
        effectHandler = true;
      }


  return (
    <li className="p-3 mx-auto bg-black/20 rounded-md mb-6 border-x-2">
        <div>
      
      <h3 className="text-white mb-1 text-2xl">{exercise.slice(0,20)}</h3>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Sets</div>
          <div className="stat-value">{sets.toString().slice(0,3)}</div>
          <div className="stat-desc">Your Willpower!</div>
        </div>

        <div className="stat">
          <div className="stat-title">Weight</div>
          <div className="stat-value">{weight.toString().slice(0,3)}</div>
          <div className="stat-desc"> Your Strength!</div>
        </div>

        <div className="stat">
          <div className="stat-title">Reps</div>
          <div className="stat-value">{sets.toString().slice(0,3)}</div>
          <div className="stat-desc">Your Endurance!</div>
        </div>
      </div>
      <p className="text-white max-w-xs mx-auto mt-3">Note: {exercise.slice(0,20)}</p>
      
      <br></br>

        {/* <button className="btn btn-primary" onClick={() => (props.deleteComponent(exercise))}>Delete PR</button> */}

   {/* <div>
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
          onClick={console.log(weight)}
          className="btn btn-primary mx-1 mt-3"
        >
          Submit
        </button>
      </form>
          <div className="modal-action">
            <a href="#" className="btn" onClick={updateHandler}>
              Yay!
            </a>
          </div>
        </div>
      </div>

    </div> */}
    </div>
    </li>
  );
}

export default NewExercise;
