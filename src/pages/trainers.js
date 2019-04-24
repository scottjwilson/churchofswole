import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import Hero from "../components/hero"

export default function TrainerPage({ data }) {
  return (
    <Layout>
      <Hero img={data.img.childImageSharp.fluid} title="Meet Our Trainers" />
      <div className="container mx-auto w-1/3 pt-6">
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
    img: file(relativePath: { eq: "gymbg2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
