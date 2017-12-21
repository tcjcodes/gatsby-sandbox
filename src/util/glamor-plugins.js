import {plugins} from "glamor";

plugins.add(({selector, style}) => {
    const newSelector = selector
        .split(',')
        .map(s => `#root ${s}`)
        .join(',')

    return {selector: newSelector, style}
});