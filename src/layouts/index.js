import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"

const linkStyle = css({ float: `right` })

const styles = css({ margin: '2em' });

export default ({ children, data }) =>
    <g.Div>
        <div className="off-canvas off-canvas-sidebar-show">
            <Link className="off-canvas-toggle btn btn-primary btn-action" to="#sidebar-id">
                {/*off screen toggle button */}
                <i className="icon icon-menu"/>
            </Link>

            <div id="sidebar-id" className="off-canvas-sidebar">
                <Link className={`d-block p-2 my-2`} to={`/`}>
                    <div className="h4 p-2">
                        <span className="icon icon-emoji mr-2" />Logo
                    </div>
                </Link>

                <div className="divider"/>
                {/*off screen sidebar*/}
                <div className="accordion-container">
                    <input type="checkbox" id="accordion-1"
                           name="accordion-checkbox" hidden/>

                   {/* <details className="accordion" open>
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
                    </details>*/}
                    <div>
                        <ul className="menu menu-nav">
                            <li className="menu-item">
                                <div className="menu-badge">
                                    <span className="icon icon-arrow-right text-muted" />
                                </div>
                                <Link to="#">Settings</Link>
                            </li>
                            <li className="menu-item">
                                {/*<div className="menu-badge">
                                    <span className="icon icon-arrow-right text-muted" />
                                </div>*/}
                                <Link to="#">Other Header</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <Link className="off-canvas-overlay" to="#close"/>

            <div className="off-canvas-content">

                {/*<Link to={`/about/`}>
                    About
                </Link>*/}

                {children()}
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
