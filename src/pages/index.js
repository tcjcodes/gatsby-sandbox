import React from "react"
import Helmet from 'react-helmet'
import g from "glamorous"
import Link from "gatsby-link"
import "./theme.scss"
import { Column, Columns, Content, Notification, Title } from 'bloomer';

export default ({ data }) => {
    return (
        <div>
            <Helmet title={data.site.siteMetadata.siteTitle} />
            <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
                Amazing Pandas Eating Things
            </g.H1>
            <Title>
                {data.allMarkdownRemark.totalCount} Posts
            </Title>
            <Columns isCentered>
                <Column isSize='1/3'>
                    <Notification isColor='success' hasTextAlign='centered'> isOneThird </Notification>
                </Column>
                <Column isSize={{mobile: 8}}>
                    <Notification isColor='warning' hasTextAlign='centered' isSize={{mobile: 8}}> Mobile: 8  </Notification>
                </Column>
                <Column>
                    <Notification isColor='danger' hasTextAlign='centered'> Third column </Notification>
                </Column>
                <Column>
                    <Notification isColor='primary' hasTextAlign='centered'> Fourth column </Notification>
                </Column>
            </Columns>
            {data.allMarkdownRemark.edges.map(({ node }) =>
                <Content key={node.id}>
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
                </Content>
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
