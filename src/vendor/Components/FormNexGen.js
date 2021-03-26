import React, { useCallback, useState } from 'react'
import { objectSimplify } from '../Globals/variables';
import Button from './Button';
import Input from './Input';

export default function FormNexGen({
    model,
    button,
    onSubmit
}) {

    const getDefaultValues = useCallback(() => {
        const names = Object.keys(model);
        const defaultValue = {};
        names.forEach(it => defaultValue[it] = {
            value: model[it].default,
            valid: ['', null, undefined].includes(model[it].default) ? false : true
        });
        return defaultValue;
    }, [model]);

    const [value, setValue] = useState(getDefaultValues());
    const isValid = useCallback(() => {
        const status = Object.values(value).map(el => el.valid);
        return !status.includes(false);
    }, [value]);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(objectSimplify(value, 'value'));
        setValue(getDefaultValues());
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {Object.keys(value).map((item, index) => <div key={index}>
                    <Input
                        type={model[item].type}
                        placeholder={model[item].label}
                        onChange={v => {
                            setValue({ ...value, [item]: v });
                            console.log(value)
                        }}
                        value={value[item].value}
                        {...model[item].attrs} />
                </div>)}
                <div style={{
                    textAlign: button.position
                }}>
                    {isValid() && <Button type="submit" {...button.attrs}>{button.title}</Button>}
                </div>
            </form>
        </div>
    )
}
