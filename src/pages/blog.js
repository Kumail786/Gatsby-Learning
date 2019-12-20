import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title,
            date
          }
         
          
         
        }
      }
    
    }
  }
  `)
  
  return (
    <Layout>
      <ol>
    {data && data.allMarkdownRemark.edges.map(edge=>{
return(
  <li>
    <h2>{edge.node.frontmatter.title}</h2>
<p>{edge.node.frontmatter.date}</p>
  </li>
)
    })


    }
    </ol>
      <h1>Blog Page</h1>
      <p>Post will show here</p>
    </Layout>
  )
 
}

export default BlogPage
