import React from "react"
import Helmet from 'react-helmet'
import g from "glamorous"
import Link from "gatsby-link"

export default ({data}) => {
    return (
        <div className='p-2'>
            <Helmet title={data.site.siteMetadata.siteTitle}/>
            <div className="">
                <div className="">
                    <g.P display={"inline-block"} borderBottom={"1px solid"}>
                        Amazing Pandas Eating Things
                    </g.P>
                    <g.H2>
                        {data.allMarkdownRemark.totalCount} Posts
                    </g.H2>
                    {data.allMarkdownRemark.edges.map(({node}) =>
                        <div key={node.id}>
                            <Link
                                to={node.fields.slug}
                                css={{textDecoration: `none`, color: `inherit`}}
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
            </div>
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
