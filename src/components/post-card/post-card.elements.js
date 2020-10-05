import styled from "styled-components";
import {
    Link
} from 'gatsby';

export const PostCard = styled.div `
    background-color: #ccc;
    color: #333;
    padding: 5px 10px;
    border: 1px solid #eee;
    border-radius: 5px;

    &:not(:last-child) {
        margin-bottom: 15px;
    }
`
export const PostCardTitle = styled(Link)
`
    font-size: 18px;
    text-decoration: none;
    color: inherit;
`
export const PostCardAuthor = styled.div `
    font-size: 16px;
`
export const PostCardDate = styled.div `
    font-size: 13px;
`