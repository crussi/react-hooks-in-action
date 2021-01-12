
import { useState } from "react";
import { users } from "../../static.json";

export default function UsersList () {
    const [userIndex, setUserIndex] = useState(0)
    const user = users[userIndex];
    const [hasDetails, setHasDetails] = useState(false);

    return (
        <>
        <ul className="users items-list-nav">
            {users.map((u,i) => (
                <li key={u.id} className={i === userIndex ? "selected" : null}>
                    <button className="btn" onClick={() => setUserIndex(i)}>
                        {u.name}
                    </button>
                </li>
            ))}
        </ul>

        {user && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>
                {user.title}
              </h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails(has => !has)}
                  />
                  Show Photo
                </label>
              </span>
            </div>

            <p>{user.notes}</p>

            {hasDetails && (
              <div className="item-details">
                <h3>{user.name}</h3>
                <img src={user.img} alt=""/>
              </div>
            )}
          </div>
        </div>
      )}


        </>
    );
}