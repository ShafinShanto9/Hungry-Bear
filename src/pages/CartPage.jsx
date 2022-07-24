import { Table } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import {DeleteOutlined} from '@ant-design/icons'

const CartPage = () => {

    const {cartItems} = useSelector(state=> state.rootReducer)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Image',
            dataIndex: 'Image',
            render: (Image, record)=> <img src={Image} width={60} height={60} />
        },
        {
            title: 'Price',
            dataIndex: 'price'
        },
        {
            title: 'Quantity'
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: (id, record)=> <DeleteOutlined />
        }
    ]


  return (
      <DefaultLayout>
          <div>CartPage</div>
          <Table columns={columns} dataSource={cartItems}/>
    </DefaultLayout>
  )
}

export default CartPage