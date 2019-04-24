import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import { graphql } from "gatsby"
import Hero from "../components/hero"

import { FaDungeon, FaDumbbell, FaUserFriends } from "react-icons/fa"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="Transformations Start from The Spirit"
    />
    <div className="join bg-black text-white px-4">
      <p className="mr-16 sm:text-md">Ready To Be Initiated?</p>
      <button class="cta bg-orange-dark hover:shadow-lg text-white py-2 px-4 border border-blue-darker rounded">
        Join Now!
      </button>
    </div>
    <div className="flex items-center mx-auto pt-12 ">
      <h2>Why Train With Us?</h2>
      <hr />
    </div>
    <div className="features flex flex-wrap container items-center mx-auto py-4 mb-12">
      <div className="w-full md:w-1/3 px-2 py-2">
        <div className="bg-grey-lightest h-64 rounded flex flex-col items-center justify-center shadow">
          <div className="text-orange">
            <FaDungeon style={{ fontSize: "4rem" }} />
          </div>
          <h2 className="py-2">Hole In The Wall</h2>
          <p className="text-sm px-4 py-2">
            We believe that enviornment is key. At our gyms, you'll find: brick
            structures, No Televisons, No Distractions. Just you and your
            glorious gains.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-2 py-2">
        <div className="bg-grey-lightest h-64 rounded flex flex-col items-center justify-center shadow">
          <div className="text-orange">
            <FaDumbbell style={{ fontSize: "4rem" }} />
          </div>
          <h2 className="py-2">World Class Trainers</h2>
          <p className="text-sm px-4 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            recusandae perferendis aperiam, necessitatibus aspernatur voluptates
            laborum esse nisi odio sunt!
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-2 py-2">
        <div className="bg-grey-lightest h-64 rounded flex flex-col items-center justify-center shadow">
          <div className="text-orange">
            <FaUserFriends style={{ fontSize: "4rem" }} />
          </div>
          <h2 className="py-2">Ongoing Support</h2>
          <p className="text-sm px-4 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            recusandae perferendis aperiam, necessitatibus aspernatur voluptates
            laborum esse nisi odio sunt!
          </p>
        </div>
      </div>
    </div>

    <div className="w-full bg-grey-lighter flex justify-center py-12">
      <h1>Our Pricing Options</h1>
    </div>

    <div className="w-full bg-grey-lighter py-8">
      <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
        <div className="sm:flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tr-none bg-white mt-4 flex flex-col">
          <div className="p-6 font-bold text-center">
            <h2>Starter</h2>
          </div>
          <div className="border-0 border-grey-light border-t border-solid text-sm">
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              1 Training Session
            </div>
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              1 Gym
            </div>
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              Anayltics
            </div>
          </div>
          <div className="text-center mt-16 mb-8">
            <button class="bg-transparent hover:bg-orange text-dark hover:text-white py-4 px-6 border border-orange hover:border-transparent rounded">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-white mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col">
          <div className="w-full p-6 bg-orange-light rounded font-bold text-center">
            <h2 className="uppercase">Dedicated</h2>
          </div>
          <div className="w-full border-0 border-grey-light border-t border-solid text-sm">
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              All Access
            </div>
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              3 Gyms
            </div>
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              5 Training Sessions
            </div>
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              All Access
            </div>
          </div>
          <div className="w-full text-center px-8 pt-8 text-xl mt-auto">
            $49.99
            <span className="text-grey-light italic line-through">$69.99</span>
          </div>
          <div className="text-center mt-8 mb-8">
            <button class="bg-transparent hover:bg-orange text-dark hover:text-white py-4 px-6 border border-orange hover:border-transparent rounded">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tl-none bg-white mt-4 flex flex-col">
          <div className="p-6 font-bold text-center">
            <h2>All-In</h2>
          </div>
          <div className="border-0 border-grey-light border-t border-solid text-sm">
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              Unlock All Gyms
            </div>
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              Open Smoothie Bar
            </div>
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              Unlimited Training
            </div>
            <div className="text-center border-0 border-grey-light border-b border-solid py-4">
              Apparel Kit
            </div>
          </div>
          <div className="w-full text-center px-8 pt-8 text-xl mt-auto">
            $89.99
            <span className="text-grey-light italic line-through">$109.99</span>
          </div>
          <div className="text-center mt-8 mb-8">
            <button class="bg-transparent hover:bg-orange text-dark hover:text-white py-4 px-6 border border-orange hover:border-transparent rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="pb-12" />
    </div>

    <div className="w-full flex justify-center py-12">
      <h1>Contact Us</h1>
    </div>
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-md">
        <form action="" className="bg-white shadow-md rounded px-8 py-8 mb-4">
          <div className="mb-6">
            <label
              htmlFor="Full Name"
              className="block text-grey-darker text-sm mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Full Name"
              className="block  text-grey-darker text-sm mb-2"
            >
              Email Address
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Full Name"
              className="block text-grey-darker text-sm mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Full Name"
              className="block text-grey-darker text-sm mb-2"
            >
              Message
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="text-center mt-8">
            <button class="bg-transparent hover:bg-orange text-dark hover:text-white py-4 px-6 border border-orange hover:border-transparent rounded">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "gymbg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
