import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Info from "../components/info"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div
      style={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "25vh",
        width: "100%",
        background: "blue",
      }}
    >
      <h3>Why Join Our Gym?</h3>
    </div>
    <Info />
    <div
      style={{
        padding: "2rem",
        height: "25rem",
        background: "red",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ justifyContent: "center" }}>
        {" "}
        <h1 />
      </div>
      <div
        style={{
          padding: ".5rem",
          height: "200px",
          width: "240px",
          background: "blue",
        }}
      >
        <h4 style={{ textAlign: "center", margin: 0 }}>Raw Environment</h4>
        <p>We believe in the power of 'hole in the wall'</p>
      </div>
      <div
        style={{
          padding: "1rem",
          height: "200px",
          width: "240px",
          background: "blue",
        }}
      >
        <h1>Hey nigga</h1>
      </div>
      <div
        style={{
          padding: "1rem",
          height: "200px",
          width: "240px",
          background: "blue",
        }}
      >
        <h1>Hey nigga</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
