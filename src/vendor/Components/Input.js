import React, { useMemo, useState } from 'react'
import { deepCopie } from '../Globals/variables';
import { Icon } from './Icon';

export default function Input({
    accept = '',
    autocomplete = 'on',
    autofocus = false,
    disabled = false,
    max = null,
    maxLength = null,
    min = null,
    minLength = null,
    multiple = null,
    name = '',
    pattern = null,
    placeholder = 'Label placeholder',
    required = true,
    step = null,
    type = 'text',
    value = '',
    size = 'md',
    upper = false,
    icon = null,
    floating = true,
    onChange = () => {}
}) {

    const [inputValue, setInputValue] = useState(value);
    const [errors, setErrors] = useState([]);
    const [touched, setTouched] = useState(false);

    const handleChange = e => {
        const v = e.target.value;
        setInputValue(upper ? v.toUpperCase(): v);

        const validate = (globalCondition, localCondition, msg) => {
            if (globalCondition) {
                if (localCondition) {
                    if (!err.includes(msg + ' ')) {
                        err.push(msg + ' ')
                    }
                } else {
                    if (err.includes(msg + ' ')) {
                        err.splice(err.findIndex(i => i === msg + ' '), 1);
                    }
                }
            }
        }

        const err = deepCopie(errors);
        validate(required, v.length === 0, 'Ce champs est obligatoire');
        validate(type === 'email', !/[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,8}/.test(v), 'Adresse email non valide');
        validate(pattern, pattern && !pattern.test(v), 'Format non valide');
        validate(type === 'number' && min, Number(min) > Number(v), 'Valeur minimale: ' + min);
        validate(type === 'number' && max, Number(max) < Number(v), 'Valeur maximale: ' + max);
        validate(minLength, Number(minLength) > Number(v.length), 'Taille minimale: ' + minLength);
        validate(maxLength, Number(maxLength) < Number(v.length), 'Taille maximale: ' + maxLength);

        setErrors(err);
        onChange({
            value: upper ? v.toUpperCase(): v,
            valid: err.length === 0
        });
    };

    const attrs = useMemo(() => {
        const d = {};
        if (step) d.step = step;
        if (min) d.min = min;
        if (minLength) d.minLength = minLength;
        if (max) d.max = max;
        if (maxLength) d.maxLength = maxLength;
        if (pattern) d.pattern = pattern;
        if (multiple) d.multiple = multiple;
    }, [step, min, max, minLength, maxLength, pattern, multiple]);

    return (
        <div className={'input-container ' + size + ((!floating || type === 'date') ? ' nofloat': '')}>
            <input
                accept={accept}
                className={touched ? ' touched': ''}
                autoComplete={autocomplete}
                autoFocus={autofocus}
                disabled={disabled}
                name={name}
                id={name}
                required={required}
                value={inputValue}
                type={type}
                onChange={handleChange}
                onFocus={_ => setTouched(true)}
                {...attrs} />

            <label htmlFor={name}>
                {icon && <Icon size="0.75" name={icon} />} {placeholder} {required && '*'}
                </label>
            <div>
                <p>{errors.join(' -- ')}</p>
            </div>
        </div>
    )
}
