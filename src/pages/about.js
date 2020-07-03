import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/SEO"

const About = ({
    data: {
      about:{nodes},
    },
  }) => {
  const {info, stack, title, image} = nodes[0]
  return <Layout>
    <SEO title="About" description="山本泰佑の経歴を紹介するページです" />
    <section className="about-page">
      <div className="section-center about-center">
        <Image 
          fluid={image.childImageSharp.fluid} 
          className="about-img" 
        />
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack.map((item) => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
