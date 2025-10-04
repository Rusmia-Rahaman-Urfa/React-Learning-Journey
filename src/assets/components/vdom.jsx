import React from 'react'

export default function Vdom() {
  const [friends, setFriends] = React.useState([
    "Sakib",
    "Abir",
    "Srejon",
    "Kawser",
    "Rahique",
  ]);
  const [friend, setFriend] = React.useState("");

  return (
    <>
      <div className="container">
        <ul>
          {friends.sort().map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
        <div className="input-container">
          <input
            type="text"
            value={friend}
            onChange={(e) => setFriend(e.target.value)}
          />
          <button onClick={() => setFriends([...friends, friend])}>Add</button>
        </div>
      </div>
    </>
  );
}
