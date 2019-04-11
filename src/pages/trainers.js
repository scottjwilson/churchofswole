import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

export default function TrainerPage({ data }) {
  return (
    <Layout>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
        }}
      >
        Meet Our Trainers
      </h2>
      <div style={{ display: "flex" }}>
        {data.trainer.edges.map(({ node: trainer }) => {
          return (
            <div
              key={trainer.id}
              style={{
                padding: "1rem",
                margin: "1rem 0",
                justifyItems: "space-inbetween",
              }}
            >
              <Img fixed={trainer.image.fixed} />
              <h3>{trainer.name}</h3>
              <h3>${trainer.pricePerHour}/hour</h3>
              <Link to={`/trainers/${trainer.name}`}>
                <p>More Info</p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    trainer: allContentfulTrainer {
      edges {
        node {
          id
          name
          pricePerHour
          image {
            fixed(width: 250) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
