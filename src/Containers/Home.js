import React, { Component } from 'react'
import  {ProductConsumer} from "../Context"
import {Table,Button} from "react-bootstrap"

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <ProductConsumer>
                    {(value) => {
                        return (
                            <Table size="lg" variant="dark" striped bordered hover>
                                <tbody>
                                    <tr>
                                        <th>TITLE</th>
                                        <th>INFORMATION</th>
                                        <th>COMPANY</th>
                                        <th>PRICE</th>
                                        <th>ACTION</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" value={value.title} onChange={(e)=>value.updateValue(e,'title')}/></td>
                                        <td><input type="text" value={value.info} onChange={(e)=>value.updateValue(e,'info')} /></td>
                                        <td><input type="text" value={value.company} onChange={(e)=>value.updateValue(e,'company')}/></td>
                                        <td><input type="text" value={value.price} onChange={(e)=>value.updateValue(e,'price')} /></td>
                                        <td><Button size="md" variant="success" onClick={()=>value.onSave(value.id)}>{value.id ? "SAVE" : "ADD NEW"}</Button></td>
                                    </tr>
                                    {value.allData.map(product=>{
                                        return(
                                            <tr>
                                                <td>{product.title}</td>
                                                <td>{product.info}</td>
                                                <td>{product.company}</td>
                                                <td>{product.price}</td>
                                                <td><Button size="md" variant="primary" onClick={()=>value.onEdit(product.id)}>EDIT</Button> | <Button size="md" variant="danger" onClick={()=>value.onDelete(product.id)}>DELETE</Button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                </Table>
                        )
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
