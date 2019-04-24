import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function({ data }) {
  const { name, pricePerHour, regimen } = data.contentfulTrainer
  const { fixed } = data.contentfulTrainer.image

  return (
    <Layout>
      <div className="flex container flex-col items-center mx-auto w-1/3 pt-3 h-screen">
        <h1 className="pb-3">{name}</h1>
        <Img fixed={fixed} />
        <p className="py-3">{regimen}</p>
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
        fixed(width: 250) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`
