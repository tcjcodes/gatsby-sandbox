import React from "react"
import Helmet from 'react-helmet'
import g from "glamorous"
import Link from "gatsby-link"
import "./theme.scss"
import { Box, Tile, Title } from 'bloomer';

export default ({ data }) => {
    return (
        <div>
            <Helmet title={data.site.siteMetadata.siteTitle} />
            <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
                Amazing Pandas Eating Things
            </g.H1>
            <h4>
                {data.allMarkdownRemark.totalCount} Posts
            </h4>
            <Tile isAncestor>
                <Tile isSize={4} isVertical isParent>
                    <Tile isChild render={
                        props => (
                            <Box {...props}>
                                <Title>One</Title>
                                <p>...</p>
                            </Box>
                        )
                    } />
                    <Tile isChild render={
                        props => (
                            <Box {...props}>
                                <Title>Two</Title>
                                <p>...</p>
                            </Box>
                        )
                    } />
                </Tile>
                <Tile isParent>
                    <Tile isChild render={
                        props => (
                            <Box {...props}>
                                <Title>Three</Title>
                                <p>...</p>
                                <p>...</p>
                            </Box>
                        )
                    } />
                </Tile>
            </Tile>
            {data.allMarkdownRemark.edges.map(({ node }) =>
                <div key={node.id}>
                    <Link
                        to={node.fields.slug}
                        css={{ textDecoration: `none`, color: `inherit` }}
                    >
                        <g.H3 marginBottom='1em'>
                            {node.frontmatter.title}{" "}
                            <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
                        </g.H3>
                        <p>
                            {node.excerpt}
                        </p>
                    </Link>
                </div>
            )}
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
