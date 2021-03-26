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
    title = '',
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
        <button title={title} className={css} onClick={onClick} >
            {icon ? <>
                <Icon name={icon} size={sm ? '0.85': '1'} /> {children && <span className="mr-1"></span>}
            </> : null}
            {children}
        </button>
    )
}
