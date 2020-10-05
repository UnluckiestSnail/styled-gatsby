import React from "react"
import {
  PostCard,
  PostCardTitle,
  PostCardAuthor,
  PostCardDate,
} from "./post-card.elements"

export default ({ title, author, date, slug }) => {
  return (
    <PostCard>
      <PostCardTitle to={`/post/${slug}`}>{title}</PostCardTitle>
      <PostCardAuthor>{author}</PostCardAuthor>
      <PostCardDate>{date}</PostCardDate>
    </PostCard>
  )
}
