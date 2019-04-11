import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div
    style={{
      background: "#1a1d2b",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <ul
      style={{
        width: 900,
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",

        fontSize: ".9rem",
        margin: "0 auto",
        paddingTop: ".5rem",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gyms/">Gyms</Link>
      </li>
      <li>
        <Link to="/trainers/">Trainers</Link>
      </li>
    </ul>
  </div>
)

export default Menu
