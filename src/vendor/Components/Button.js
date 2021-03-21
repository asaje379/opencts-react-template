import React, { useMemo } from 'react'
import { Icon } from './Icon';

export default function Button({
    color = 'primary',
    expand = false,
    rounded = false,
    outlined = false,
    sm = false,
    lg = false,
    icon = null,
    onClick,
    children
}) {

    const css = useMemo(() => {
        const prefix = 'btn';
        const col = prefix + '-' + color;
        let val = prefix + ' ' + col;
        if (expand) val += ' btn-expand';
        if (rounded) val += ' btn-rounded';
        if (outlined) val += ' btn-' + color + '-outline';
        if (sm) val += ' btn-sm';
        if (lg) val += ' btn-lg';
        return val;
    }, [color, expand, rounded, sm, lg, outlined]);

    return (
        <button className={css} onClick={onClick} >
            {icon ? <>
                <Icon name={icon} /> <span className="mr-1"></span>
            </> : null}
            {children}
        </button>
    )
}
