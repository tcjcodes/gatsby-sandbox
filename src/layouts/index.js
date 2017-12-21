import React from "react"
import g from "glamorous"
import Link from "gatsby-link"

const StyledAccordion = () => <details className="accordion" open>
    <summary className="accordion-header">
        <div className='c-hand px-2'>
            <i className="icon icon-arrow-right"/> Title
        </div>
    </summary>
    <div className="accordion-body">
        <ul className="menu menu-nav">
            <li className="menu-item">
                <Link to='#'>Menu Item</Link>
            </li>
            <li className="menu-item">
                <Link to='#'>Other</Link>
            </li>
        </ul>
    </div>
</details>;

export default ({children, data}) =>
    <g.Div>
        <div className="off-canvas off-canvas-sidebar-show">
            <Link className="off-canvas-toggle btn btn-primary btn-action" to="#sidebar-id">
                {/*off screen toggle button */}
                <i className="icon icon-menu"/>
            </Link>

            <div id="sidebar-id" className="off-canvas-sidebar" style={{width: '15rem', padding: '1.25rem',}}>
                <div className="p-2 my-2">
                    <Link className={`d-block`} to={`/`}>
                        <div className="h4 pl-2">OFTEN
                        </div>
                    </Link>
                </div>

                <div css={{marginTop: '1.25rem',}}>
                    <div className="px-2 mx-2">
                        <div className="mt-2 text-bold text-uppercase text-gray">Main</div>
                        <div className="divider"/>
                    </div>
                    <div className='mb-2 text-bold'>
                        <ul className="pt-1 menu menu-nav">
                            <li className="menu-item">
                                <div className="menu-badge">
                                    <span className="icon icon-arrow-right"/>
                                </div>
                                <Link to="#">Home</Link>
                            </li>
                            <li className="menu-item">
                                <div className="menu-badge ">
                                    <span className="icon icon-arrow-down text-gray"/>
                                </div>
                                <Link to="#">Artists</Link>
                            </li>
                            <li className="menu-item">
                                <div className="menu-badge">
                                    <span className="icon icon-arrow-down text-gray"/>
                                </div>
                                <Link to="#">Songs</Link>
                            </li>
                            <li className="menu-item">
                                <div className="menu-badge">
                                    <span className="icon icon-arrow-down text-gray"/>
                                </div>
                                <Link to="#">Packs</Link>
                            </li>
                            <li className="menu-item">
                                <div className="menu-badge">
                                    <span className="icon icon-arrow-down text-gray"/>
                                </div>
                                <Link to="#">Categories</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div css={{marginTop: '3rem',}} className='px-2 '>
                    <div className="my-2 ">
                        <div className="clearfix text-gray">
                                <span className="float-left text-bold text-uppercase h6">
                                Recent Activity
                                </span>
                            <button className="btn btn-block btn-sm btn-action circle float-right">
                                <i className="icon icon-arrow-right"/></button>
                        </div>
                        <div className="divider"/>
                    </div>
                    <div>
                        <div className="tile mb-2">
                            <div className="tile-icon">
                                <figure className="avatar avatar-md" data-initial="YL"
                                        css={{backgroundColor: '#5755d9'}}>
                                </figure>
                            </div>
                            <div className="tile-content text-ellipsis">
                                <span className="d-block text-bold tile-title">Yuen Lou</span>
                                <small className="d-block tile-subtitle text-muted ">Earth's Mightiest Heroes joined
                                    forces to take on
                                    threats that were too big for any one hero to tackle...
                                </small>
                                <small className="text-muted text-gray">5:00 PM</small>
                            </div>
                        </div>

                        <div className="tile my-2">
                            <div className="tile-icon">
                                <figure className="avatar avatar-md" data-initial="RP"
                                        css={{backgroundColor: '#5755d9'}}>
                                </figure>
                            </div>
                            <div className="tile-content text-ellipsis">
                                <span className="d-block text-bold tile-title">Regy Perlera</span>
                                <small className="d-block tile-subtitle text-muted ">Added "Small Paintbrush" to
                                    wishlist
                                </small>
                                <small className="text-muted text-gray">4:00 PM</small>
                            </div>
                        </div>
                        <div className="tile my-2">
                            <div className="tile-icon">
                                <figure className="avatar avatar-md" data-initial="LS"
                                        css={{backgroundColor: '#5755d9'}}>
                                </figure>
                            </div>
                            <div className="tile-content text-ellipsis">
                                <span className="d-block text-bold tile-title">Luc Succes</span>
                                <small className="d-block tile-subtitle text-muted ">Updated ft artist image_w with
                                    file
                                </small>
                                <small className="text-muted text-gray">4:58 PM</small>
                            </div>
                        </div>
                    </div>
                    {/*<ul className="pt-1 menu menu-nav">
                        <li className="menu-item">
                            <Link to="#">Settings</Link>
                        </li>
                        <li className="menu-item">
                            <div className="menu-badge">
                                    <span className="icon icon-arrow-right text-muted" />
                                </div>
                            <Link to="#">More Lists</Link>
                        </li>
                        <li className="menu-item">
                            <div className="menu-badge">
                                    <span className="icon icon-arrow-right text-muted" />
                                </div>
                            <Link to="#">Lorem Ipsum Menu</Link>
                        </li>
                    </ul>*/}
                </div>
            </div>

            <Link className="off-canvas-overlay" to="#close"/>

            <div className="off-canvas-content bg-gray" css={{minHeight: '100vh', }} style={{ padding: 0, }}>

                {/*<Link to={`/about/`}>
                    About
                </Link>*/}
                <div className=''>
                    <div className=" container grid-lg pb-2">
                        <header className="navbar mb-2">
                            <section className="navbar-section pt-2">
                                <span className="h3 mr-2">Artists</span>
                                <ul className="tab ml-2">
                                    <li className="tab-item active">
                                        <Link to={`/about/`}>
                                            All
                                        </Link>
                                    </li>
                                    <li className="tab-item">
                                        <Link to={`/about/`}>
                                            Featured
                                        </Link>
                                    </li>
                                    <li className="tab-item">
                                        <Link to={`/about/`}>
                                            Top
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                            <section className="navbar-section">
                                <button className="mr-2 btn btn-primary">Add Artist</button>
                                <button className="btn">Search</button>
                            </section>
                        </header>
                    </div>

                    <div css={{ background: '#ffffff', height: '100%', }}>
                        <div className="container grid-lg p-2">
                            {children()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
