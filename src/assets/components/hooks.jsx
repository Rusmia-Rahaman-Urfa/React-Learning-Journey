import {useState} from 'react'

export default function Hooks() {
    let [age, setAge] = useState(15);
  return (
    <>
    <h1>Age is {age}</h1>
    <button onClick={() => {
        setAge((prev) => {
          prev += 5;
          return prev;
        });
    }} > Increment </button>
    <button onClick={() => {
        setAge((prev) => {
            prev -= 5;
            return prev;
        });
    }}
    > Decrement </button>
    <p>
        You are a {" "}
        {age < 18? (age < 6 ? "Baby": "Child") : age > 40 ? "Old" : "Adult"}
    </p>
    </>
  );
}
