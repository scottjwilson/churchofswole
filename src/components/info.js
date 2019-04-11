import React from "react"

import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    info: site {
      siteMetadata {
        title
        description
        author
        info
      }
    }
  }
`

export default function info() {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        const siteStuff = data.info.siteMetadata
        const { title, info, description, author } = siteStuff
        return (
          <div>
            <h2>title:{title}</h2>
            <h2>info:{info}</h2>
            <h2>description:{description}</h2>
            <br />
            <h2>author:{author}</h2>
          </div>
        )
      }}
    />
  )
}
