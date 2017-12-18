import React from "react"
import Helmet from 'react-helmet'
import g from "glamorous"
import { Column, Columns, Title } from 'bloomer';
import "./theme.scss"
import Sandbox from '../components/sandbox';

export default ({ data }) => {
    return (
        <div>
            <Helmet title={data.site.siteMetadata.siteTitle}/>
            <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
                Amazing Pandas Eating Things
            </g.H1>
            <Title>
                {data.allMarkdownRemark.totalCount} Posts
            </Title>
            <Sandbox posts={data.allMarkdownRemark.edges} />
            {/*<BlogList posts={data.allMarkdownRemark.edges}/>*/}
        </div>
    )
}

export const query = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
