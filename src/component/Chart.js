import React, { useState, useEffect } from 'react'

import { Column } from '@ant-design/plots'

const Chart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antfincdn/cK%24sTxSsah/stack-group-column.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const config = {
    data,
    xField: 'month',
    yField: 'value',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'name',
  }

  return (
    <div>
      <Column {...config} />
    </div>
  )
}

export default Chart
