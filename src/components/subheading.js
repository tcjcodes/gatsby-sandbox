import React from "react"
import {css} from "glamorous"

const Subheading = ({bold, children, styles}) => (
    <span className={`${bold && 'text-bold'} text-uppercase text-gray pb-1`}
          css={{letterSpacing: '1px', ...styles}}>
    {children}
</span>);

export default Subheading;