import { Table } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import {DeleteOutlined, PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons'

const CartPage = () => {

    const { cartItems } = useSelector(state => state.rootReducer)
    const dispatch = useDispatch()

    const increaseQuantity = (record) => {
        
        dispatch({
            type: 'updateCart',
            payload: { ...record, quantity: record.quantity + 1 }
        })
    }

    const decreaseQuantity = (record) => {
        if (record.quantity !== 1) {
            dispatch({
            type: 'updateCart',
            payload: { ...record, quantity: record.quantity - 1 }
        })
        }
    }

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
            title: 'Quantity',
            dataIndex: '_id',
            render: (id, record) => (
                <div>
                    <PlusCircleOutlined className='mx-3' onClick={()=>increaseQuantity(record)}/>
                    <b>{record?.quantity}</b>
                    <MinusCircleOutlined className='mx-3' onClick={()=>decreaseQuantity(record)}/>
                </div>
            )
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