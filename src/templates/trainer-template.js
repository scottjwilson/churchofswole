import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function({ data }) {
  const { name, pricePerHour, regimen } = data.contentfulTrainer
  const { fixed } = data.contentfulTrainer.image

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-inbetween",

          width: "100%",
        }}
      >
        <h1>{name}</h1>
        <Img fixed={fixed} />
        <p style={{ paddingTop: "2rem" }}>{regimen}</p>
        <Link to="/trainers">
          <p>Go Back</p>
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulTrainer(id: { eq: $id }) {
      name
      pricePerHour
      regimen
      image {
        fixed(width: 400) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`
