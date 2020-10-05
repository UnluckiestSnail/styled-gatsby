import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../layout/layout"

export const query = graphql`
query ($slug: String) {
  contentfulPost(slug: {eq: $slug}) {
    body {
      json
    }
    author
    date
    id
    slug
    title
  }
}

`

export default function Blog({
                data: {
                  contentfulPost
                }
              }) {
  console.log(contentfulPost)
  return (
    <Layout>
      <h1>{contentfulPost.title}</h1>
      <div>{contentfulPost.author}</div>
      <div>{contentfulPost.date}</div>
      {documentToReactComponents(contentfulPost.body.json)}
    </Layout>
  )
}