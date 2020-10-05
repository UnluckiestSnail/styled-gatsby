import React from "react"
import Layout from "../layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import PostCard from "../components/post-card/post-card"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost {
        edges {
          node {
            author
            slug
            date
            title
            id
            body {
              body
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      {data.allContentfulPost.edges.map(({ node }) => {
        return (
          <PostCard
            key={node.id}
            title={node.title}
            author={node.author}
            date={node.date}
            slug={node.slug}
          />
        )
      })}
    </Layout>
  )
}

export default Home
