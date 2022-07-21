import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row } from 'antd'
import ItemsCard from '../components/ItemsCard'

const HomePage = () => {

  const [itemsData, setItemsData] = useState([])

  const getAllItems = async() => {
    await axios.get('/api/items/get-all-items').then((res) => {
      setItemsData(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }
  useEffect(() => {
    getAllItems()
  }, [])
  
  return (
      <DefaultLayout>
          <Row justify="space-between" align="middle">
        {
          itemsData.map((item) => (
            <Col span={6}>
              <ItemsCard item={ item} />
            </Col>
          ))
              }
          </Row>
    </DefaultLayout>
  )
}

export default HomePage