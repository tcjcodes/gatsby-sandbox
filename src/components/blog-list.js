import React from "react"
import Link from "gatsby-link"
import g from "glamorous"
import { Content } from 'bloomer';

const BlogList = ({ posts }) => <div>{posts.map(({ node }) =>
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

export default BlogList;