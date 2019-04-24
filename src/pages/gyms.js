import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default function GymPage({ data }) {
  return (
    <Layout>
      <h1 className="flex justify-center pt-3">Explore Our Gyms</h1>
      <div className="container mx-auto py-2 w-1/3">
        <div className="flex flex-col justify-center">
          {data.gym.edges.map(({ node: gym }) => {
            return (
              <div key={gym.id} className="flex flex-col items-center py-6">
                <div className="flex flex-col items-center py-4">
                  <h3 className="py-1">{gym.address}</h3>
                  <Img fixed={gym.image.fixed} />
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
    gym: allContentfulGym {
      edges {
        node {
          id
          address
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
