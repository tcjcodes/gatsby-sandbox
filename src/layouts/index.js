import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"

const linkStyle = css({ float: `right` })

export default ({ children, data }) =>
    <g.Div
        margin={`0 auto`}
        maxWidth={700}
        padding='2em'
        paddingTop='1.5em'
    >
        <Link to={`/`}>
            <g.H3 marginBottom='2em' display={`inline-block`}>
                {data.site.siteMetadata.title}
            </g.H3>
        </Link>
        <Link className={linkStyle} to={`/about/`}>
            About
        </Link>
        {children()}
    </g.Div>

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
