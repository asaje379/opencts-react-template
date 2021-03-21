import React from 'react'
import Button from './vendor/Components/Button'
import { useLanguage } from './vendor/Globals/LanguageProvider'

export default function Test() {

    const { getTraductionOf } = useLanguage();

    return (
        <div>
            <Button icon="plus">{getTraductionOf('welcome')}</Button>
            <Button expand>{getTraductionOf('welcome')}</Button>
            <Button color="info">{getTraductionOf('welcome')}</Button>
            <Button color="success">{getTraductionOf('welcome')}</Button>
            <Button outlined>{getTraductionOf('welcome')}</Button>
            <Button color="danger">{getTraductionOf('welcome')}</Button>
            <Button color="secondary">{getTraductionOf('welcome')}</Button>
            <Button color="secondary" outlined>{getTraductionOf('welcome')}</Button>
            <Button color="dark">{getTraductionOf('welcome')}</Button>
        </div>
    )
}
