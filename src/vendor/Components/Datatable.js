import React from 'react'
import Button from './Button'
import { Icon } from './Icon'
import Input from './Input'
import Searchbar from './Searchbar'

export default function Datatable({
    keyName = 'id',
    data,
    actions,
    addText = 'Nouveau'
}) {
    return (
        <div className="datatable">
            <div className="dt-header d-table-header d-flex jcb aic pl-3 pt-2 pr-3">
                <Button sm icon="plus" />
                <div className="w-50">
                    <Searchbar />
                </div>
                <div className="d-flex">
                    <span className="m-2" title="Imprimer"><Icon color="midnightblue" name="print" /></span>
                    <span className="m-2" title="Exporter en PDF"><Icon color="red" name="pdf" /></span>
                    <span className="m-2" title="Exporter en EXCEL"><Icon color="blue" name="excel" /></span>
                </div>
            </div>
            <div style={{overflow: 'auto'}}>
                <table>
                    <thead>
                        <tr>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
