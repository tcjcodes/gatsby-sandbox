import React from "react"
import Subheading from "./subheading";
import {themeData} from "../util/theme";

const SidebarSection = ({heading, iconButton, children}) => (
    <div css={{margin: '1.25rem 0'}}>
        <div className="px-2 mx-2">
            {iconButton && <div className="clearfix text-gray">
                <Subheading>
                    <span className="float-left h6">
                        {heading}
                    </span>
                    <button css={{borderColor: themeData.colors.gray}}
                            className="btn bg-gray text-gray btn-block btn-sm btn-action circle float-right">
                        <i className={`icon icon-${iconButton}`}/></button>
                </Subheading>
            </div>}
            {!iconButton && <Subheading>{heading}</Subheading>}
            <div className="divider"/>
        </div>
        <div className='mb-2'>
            {children}
        </div>
    </div>
)

export default SidebarSection;