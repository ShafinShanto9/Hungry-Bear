import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import {DeleteOutlined,EditOutlined} from '@ant-design/icons'
import { Button, Modal, Table } from 'antd'

const Items = () => {

  const dispatch = useDispatch()
  const [itemsData, setItemsData] = useState([])
  const [addEditModalVisibility,setAddEditModalVisibility] = useState(false)

  const getAllItems = async () => {

    dispatch({type: 'showLoading'})
    await axios.get('/api/items/get-all-items').then((res) => {

      dispatch({type: 'hideLoading'})
      setItemsData(res.data);

    }).catch((error) => {
      
      dispatch({type: 'hideLoading'})
      console.log(error);
    })
  }
  useEffect(() => {
    getAllItems()
  }, [])

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
          title: 'Category',
          dataIndex:'category'
        },
        
        {
            title: 'Price',
            dataIndex: 'price'
        },
        {
            title: 'Action',
            dataIndex: '_id',
          render: (id, record) => (
            <div className='d-flex'>
              <DeleteOutlined className='mx-2'/>  
              <EditOutlined className='mx-2'/>
            </div>
            )
        }
    ]


  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h3>Product Items</h3>
        <button
          className='px-4'
          onClick={()=>setAddEditModalVisibility(true)}
          style={{ backgroundColor: '#9E6051', color: 'white', border: 'none', textAlign: 'center', borderRadius: '5px' }}>Add Item</button>
      </div>
      <Table columns={columns} dataSource={itemsData} />

      <Modal visible={addEditModalVisibility} title="ADD New Item" footer={false}>

      </Modal>
    </DefaultLayout>
  )
}

export default Items