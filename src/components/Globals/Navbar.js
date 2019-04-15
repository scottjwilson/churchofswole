import React, { Component } from "react"
import { Link } from "gatsby"
export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/gyms",
        text: "gyms",
      },
      {
        id: 3,
        path: "/trainers",
        text: "trainers",
      },
    ],
  }

  navbarHandler = () => {
    console.log("hi")
  }

  render() {
    return (
      <div className="container">
        <nav>
          <Link to="/">
            <h2>Church of Swole</h2>
          </Link>

          <ul>
            {this.state.links.map(link => {
              return (
                <li key={link.id}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    )
  }
}
