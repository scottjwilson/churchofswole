import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function hero({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <span className="text-white text-2xl md:text-3xl">{title}</span>

      {children}
    </BackgroundImage>
  )
}

hero.defaultProps = {
  title: "default title",
  styleClass: "gymbg",
}

// const Hero = () => (
//   <div
//     style={{
//       height: "35vh",
//       background: "purple",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >
//     <h2>Transformation Starts From Spirit</h2>
//   </div>
// )

// export default Hero
