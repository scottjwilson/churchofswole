import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

export default function TrainerPage({ data }) {
  return (
    <Layout>
      <h1 className="flex justify-center pt-3">Meet Our Trainers</h1>
      <div className="container mx-auto w-1/3">
        <div className="flex flex-col justify-center">
          {data.trainer.edges.map(({ node: trainer }) => {
            return (
              <div key={trainer.id} className="flex flex-col items-center py-3">
                <Img fixed={trainer.image.fixed} />
                <div className="flex flex-col items-center py-4">
                  <h3 className="py-1">{trainer.name}</h3>
                  <h3 className="py-1">${trainer.pricePerHour}/hour</h3>
                  <Link to={`/trainers/${trainer.name}`}>
                    <p>More Info</p>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
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
