import React, { Component } from 'react'
import {rowData} from "./appData"

const ProductContext = React.createContext()
class ProductProvider extends Component {
    state = {
        allData: rowData,
        id: '',
        title: '',
        info: '',
        company: '',
        price: '',
        updateEdit:[]
    }
    //Updating the input value...................................
    updateValue = (e,text) => {
        if (text === "title") {
            this.state.title = e.target.value;
        }
        if (text === "info") {
            this.state.info = e.target.value;
        }
        if (text === "company") {
            this.state.company = e.target.value;
        }
        if (text === "price") {
            this.state.price = e.target.value;
        }
        const tempData = [this.state.id,this.state.title,this.state.info,this.state.company,this.state.price]
        this.setState({
            updateEdit:tempData
        })
    }
    //Edit the data functionality..........................................
    getIndex = (id) => {
        const product = this.state.allData.find(item => item.id === id)
        return product;
    }
    onEdit= (id)=>{
        const tempProduct = this.state.allData
        const index = tempProduct.indexOf(this.getIndex(id))
        const selectedProduct = tempProduct[index]
        this.setState({
            id: selectedProduct['id'],
            title: selectedProduct['title'],
            info: selectedProduct['info'],
            company: selectedProduct['company'],
            price:selectedProduct['price']
        })
    }

    //After edit save or add new data the data functionality................................
    onSave = (id) => {
        if (id!=="") {
            const saveRecord = this.state.allData
            const index = saveRecord.indexOf(this.getIndex(id))
            const record = saveRecord[index]
            record['title'] = this.state.updateEdit[1]
            record['info'] = this.state.updateEdit[2]
            record['company'] = this.state.updateEdit[3]
            record['price'] = this.state.updateEdit[4]
            this.setState({
                allData: [...this.state.allData],
                id:'',title:'',company:'',price:'',info:''
            })
        }
        else {
            const maxId = Math.max(...this.state.allData.map(item => item.id === id))
            const newId = maxId + 1
            const newRecord = []
            newRecord['title'] = this.state.updateEdit[1]
            newRecord['info'] = this.state.updateEdit[2]
            newRecord['company'] = this.state.updateEdit[3]
            newRecord['price'] = this.state.updateEdit[4]
            this.setState({
                allData: [...this.state.allData,newRecord],
                id:'',title:'',company:'',price:'',info:''
            })
        }
    }
    // delete the existing record...........................
    onDelete = (id) => {
        const tempData = this.state.allData
        const updatedData = tempData.filter(item => item.id !== id)
        this.setState({
            allData:updatedData
        })
    }

    render() {
        //console.log(this.state.allData)
        //console.log(this.state.allData)
        return (
            <div>
                <ProductContext.Provider value={{ ...this.state, onEdit: this.onEdit,onSave:this.onSave,updateValue:this.updateValue,onDelete:this.onDelete}}>
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}
export const ProductConsumer = ProductContext.Consumer
export { ProductProvider,ProductContext}