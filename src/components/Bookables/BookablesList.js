import { useState } from "react";
import { bookables } from "../../static.json";
import { FaArrowRight } from "react-icons/fa";

export default function BookablesList() {
  //   const group = "Rooms";
  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);
  const groups = [...new Set(bookables.map((b) => b.group))];
  //   function nextBookable () {
  //     setBookableIndex(i => (i + 1) % bookablesInGroup.length);
  //   }
    
  function newGroup(group) {
    setGroup(group);
    setBookableIndex(0)
  }
  return (
    <div>
      <select value={group} onChange={(e) => newGroup(e.target.value)}>
        {groups.map((g) => (
          <option value={g} key={g}>
            {g}
          </option>
        ))}
      </select>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((b, i) => (
          <li key={b.id} className={i === bookableIndex ? "selected" : null}>
            <button className="btn" onClick={() => setBookableIndex(i)}>
              {b.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        <button
          className="btn"
          onClick={() => {
            setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
          }}
          autoFocus
        >
          <FaArrowRight />
          <span>Next</span>
        </button>
      </p>
    </div>
  );
}
