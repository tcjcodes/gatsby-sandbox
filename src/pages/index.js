import React from "react"
import Link from "gatsby-link"
import {themeData} from "../util/theme";
import Subheading from "../components/subheading";

const PageHeading = ({title, navLink, navText}) => (<header className="navbar"
                                                            css={{marginBottom: '1.25em',}}>
    <section className="navbar-section">
        <div className=''
             css={{paddingBottom: '1.25em', width: '40%', borderBottom: `1px solid ${themeData.colors.grayLight}`}}>
            <Subheading bold>{title}</Subheading>
        </div>
    </section>
    <section className="navbar-section">
        <div className='text-right'
             css={{paddingBottom: '1.25em', width: '20%', borderBottom: `1px solid ${themeData.colors.grayLight}`}}>
            <Subheading>
                <Link to={navLink}>{navText}</Link>
            </Subheading>
        </div>
    </section>
</header>)

export default ({data}) => {
    return (
        <div className="">
            <div css={{
                borderBottom: `1px solid ${themeData.colors.gray}`
            }}>
                <div className="container grid-xl">
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
                <div className="container grid-xl p-2">
                    <div id='myContent' css={{marginTop: '1rem',}} className='p-2'>
                        <section className='pb-2'>
                            <PageHeading title='Favorites' navLink='#' navText='Edit'/>
                            <div className="columns">
                                {['Kanye West', 'SZA', 'Beyonce', 'Solange Knowles', 'Jay-Z',].map((artist, index) =>
                                    <div key={artist}
                                         className={`column col-2 ${index == 0 && 'col-mr-auto'} ${index > 0 && index < 4 && 'col-mx-auto'} ${index == 4 && 'col-ml-auto'}`}>
                                        <div className="card my-2">
                                            <div className="card-image">
                                                <img className="img-responsive" src="http://via.placeholder.com/480x640"
                                                     alt="OS X El Capitan"/>
                                            </div>
                                            <div className="card-header" css={{}}>
                                                <div className="card-title h5">{artist}</div>
                                                <div className="card-subtitle text-ellipsis"><Subheading>Lorem ipsum
                                                    dolores</Subheading></div>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </section>

                        <section className='pb-2' css={{ marginTop: '2.5rem', }}>
                            <PageHeading title='Filtered' navLink='#' navText='Edit'/>
                            <div className="columns">
                                {['Rihanna', 'SZA', 'Post Malone', 'Beyonce', 'Idina Menzel',].map((artist, index) =>
                                    <div key={artist}
                                         className={`column col-2 ${index == 0 && 'col-mr-auto'} ${index > 0 && index < 4 && 'col-mx-auto'} ${index == 4 && 'col-ml-auto'}`}>
                                        <div className="card my-2">
                                            <div className="card-image">
                                                <img className="img-responsive" src="http://via.placeholder.com/480x640"
                                                     alt="OS X El Capitan"/>
                                            </div>
                                            <div className="card-header" css={{}}>
                                                <div className="card-title h5">{artist}</div>
                                                <div className="card-subtitle text-ellipsis"><Subheading>Lorem ipsum
                                                    dolores</Subheading></div>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </section>
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
