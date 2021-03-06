import "./UsersTable.css"
import Avatar from "../../Assets/Img/Avatar.svg"
import menu from "../../Assets/Img/menu.png";
import { useEffect, useState } from "react";
import LeftNext from "../../Assets/Img/LeftNext.svg"
import RightNext from "../../Assets/Img/RightNext.svg"

const UsersTable = () =>{
const [users, setUsers] = useState([]);

useEffect(() =>{
fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => setUsers(data))
},[])



return (
<div className="wrapper">
  <table className="users-table">
    <thead>
      <tr>
        <th scope="col">
          <input type="checkbox" />
        </th>
        <th>
          Name and ID

        </th>
        <th>
          Email
        </th>
        <th>Gender</th>
        <th>Country</th>
        <th>Activity (day)</th>
        <th>

        </th>
      </tr>
    </thead>

    {users.length > 0 && (
    <tbody>
      {users.map((user, i) =>(
      <tr className="tbody-tr" key={i}>
        <th className="tbody-checkbox">
          <input type="checkbox" />
        </th>
        <td>
          <span className="users-span">
            <img src={Avatar} alt="" className="users-avatar" />
            <span>
              <p>{user.name} </p>
              <p>ID {user.id*25060}</p>
            </span>
          </span>
        </td>
        <td>
          {user.email}
        </td>
        <td>Man</td>
        <td>{user.address.city}</td>
        <td>{user.id*10} min</td>
        <td>
          <button className="menu-btn">
            <img src={menu} alt="" />

          </button>
        </td>
      </tr>
      ))}
    </tbody>
    )}


  
  </table>
  <ul className="paginations-list">
      <li className="">
      <button >
        <img src={LeftNext} alt="" className="before-img" />
      </button>
      </li>
      <li className="">
      <button >
        from <b>18</b>
      </button>
      </li>
      <li className="">
      <button className="now-btn">
        1
      </button>
      </li>
      <li className="">
      <button  >
        <img src={RightNext} alt="" className="after-img" />
      </button>
      </li>
    </ul>

</div>
)
}

export default UsersTable;