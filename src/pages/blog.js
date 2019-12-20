import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol>
        {data &&
          data.allMarkdownRemark.edges.map(edge => {
            return (
              <Link to={`/blog/${edge.node.fields.slug}`}>
              <li>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
              </Link>
            )
          })}
      </ol>
    </Layout>
  )
}

export default BlogPage
