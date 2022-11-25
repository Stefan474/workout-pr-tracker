import React, {useState, useEffect} from "react";
import UpdateNewExercise from "./UpdateNewExercise";

function NewExercise(props) {

    
    useEffect(() => {
        setExercise(props.exercise)
        setWeight(props.weight)
        setSets(props.sets)
        setReps(props.reps)
        setMessage(props.message)
    })

    const [exercise, setExercise] = useState(props.exercise);
    const [weight, setWeight] = useState(props.weight);
    const [sets, setSets] = useState(props.sets);
    const [reps, setReps] = useState(props.reps);
    const [message, setMessage] = useState(props.message);

    const dataHandler = (data) => {
        setExercise(data.exercise)
        setWeight(data.weight)
        setSets(data.sets)
        setReps(data.reps)
        setMessage(data.message)

        console.log(data);
    }

    
  return (
    <li className="p-3 mx-auto bg-black/20 rounded-md mb-6">

      
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
          <div className="stat-value">{reps.toString().slice(0,3)}</div>
          <div className="stat-desc">Your Endurance!</div>
        </div>
      </div>
      <p className="text-white max-w-xs mx-auto mt-3">Note: {message.slice(0,30)}</p>
      
    <UpdateNewExercise exercise={exercise} weight={weight} sets={sets} message={message} reps={reps} onSubmitForm={dataHandler}/>
 

    </li>
  );
}

export default NewExercise;
