import React, { useState } from 'react'
import { Icon } from './Icon'

export default function Searchbar({
    onChange = () => { },
    placeholder = 'Rechercher'
}) {

    const [value, setValue] = useState('');

    return (
        <div className="searchbar">
            <div className="d-flex jcc aic">
                <div className="pl-2 pr-2">
                    <Icon name="search" />
                </div>
            </div>
            <input placeholder={placeholder} type="search" value={value} onChange={e => {
                const v = e.target.value;
                setValue(v);
                onChange(v);
            }} />
        </div>
    )
}
