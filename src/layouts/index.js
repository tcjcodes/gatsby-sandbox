import React from "react"
import "../util/glamor-plugins";
import {themeData} from "../util/theme.js";
import g, {ThemeProvider} from "glamorous"
import Link from "gatsby-link"
import SidebarSection from "../components/sidebar-section";

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
    <ThemeProvider theme={themeData}>
        <g.Div id='root'>
            <div className="off-canvas off-canvas-sidebar-show">
                <Link className="off-canvas-toggle btn btn-primary btn-action" to="#sidebar-id">
                    {/*off screen toggle button */}
                    <i className="icon icon-menu"/>
                </Link>

                <div id="sidebar-id" className="off-canvas-sidebar"
                     css={{
                         backgroundColor: themeData.colors.white,
                         minHeight: '100vh', width: '15rem', padding: '1.25rem',
                         borderRight: `1px solid ${themeData.colors.gray}`
                     }}>
                    <div className="p-2 my-2">
                        <Link className={`d-block`} to={`/`}>
                            <div className="h4 pl-2">OFTEN
                            </div>
                        </Link>
                    </div>

                    <SidebarSection heading='Main'>
                        <ul css={{paddingTop: 0,}} className="menu menu-nav text-bold">
                            {['Home', 'Artists', 'Albums', 'Tracks', 'Genres']
                                .map((val, index) => <li key={index}
                                                         className="menu-item">
                                    <div className="menu-badge"
                                         css={{padding: '0.75em'}}>
                                        <span className="icon icon-arrow-down text-gray"/>
                                    </div>
                                    <Link
                                        css={{padding: '0.75em'}} to="#">{val}</Link>
                                </li>)}
                        </ul>
                    </SidebarSection>

                    <SidebarSection heading='Recent Activity' iconButton='arrow-right'>
                        <div className='p-2'>
                            <div className="pt-1 tile mb-2">
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
                                            css={{backgroundColor: themeData.colors.primary}}>
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
                                    <small className="text-muted text-gray">3:58 PM</small>
                                </div>
                            </div>
                        </div>
                    </SidebarSection>
                </div>

                <Link className="off-canvas-overlay" to="#close"/>

                <div className="off-canvas-content" css={{padding: 0,}}>
                    {children()}
                </div>
            </div>
        </g.Div>
    </ThemeProvider>

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
