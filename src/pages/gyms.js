import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default function GymPage({ data }) {
  return (
    <Layout>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "4rem",
        }}
      >
        Explore Our Gyms
      </h1>
      <div className="container mx-auto py-8 w-1/3">
        <div className="flex flex-col justify-center">
          {data.gym.edges.map(({ node: gym }) => {
            return (
              <div key={gym.id} className="flex flex-col items-center py-6">
                <Img fixed={gym.image.fixed} />
                <div className="flex flex-col items-center py-4">
                  <h3 className="py-1">{gym.address}</h3>
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
            id
            fixed(width: 500) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
