import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./header"

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col min-h-screen text-grey-darkest">
          <Header siteTitle={data.site.siteMetadata.title} />

          <>{children}</>

          <footer className="bg-blue-darkest h-32">
            <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm ">
              <p className="text-white">
                Created by{" "}
                <a
                  href="https://scottwil.com"
                  className="font-bold no-underline text-white"
                >
                  Scott Wilson
                </a>
              </p>
            </div>
          </footer>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
