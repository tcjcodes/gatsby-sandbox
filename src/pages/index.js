import React from "react"
import g from "glamorous"
import Link from "gatsby-link"
import {themeData} from "../util/theme";

export default ({data}) => {
    return (
        <div className="">
            <div css={{
                borderBottom: `1px solid ${themeData.colors.gray}`}}>
                <div className="container grid-lg">
                    <header className="navbar mb-2 p-2" css={{marginTop: '2em',}}>
                        <section className="navbar-section pt-2">
                            <span className="h4 mr-2">Artists</span>
                            <ul className="tab ml-2" css={{border: 0,}}>
                                {['All', 'Favorites', 'Filtered'].map(
                                    (val, index) => <li key={index}
                                                        className={`${index == 0 && 'active'} tab-item mx-1`}>
                                        <Link to='#'>
                                            {val}
                                        </Link>
                                    </li>)}
                            </ul>
                        </section>
                        <section className="navbar-section">
                            <button className="mr-2 btn btn-primary">Add Artist</button>
                            <button className="btn">Search</button>
                        </section>
                    </header>
                </div>
            </div>
            <div css={{background: themeData.colors.light, minHeight: '100vh',}}>
                <div className="container grid-lg p-2">
                    <div className='p-2'>
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
