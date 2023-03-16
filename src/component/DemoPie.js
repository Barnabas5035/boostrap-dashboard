import React from 'react'

import { Pie } from '@ant-design/plots'

const DemoPie = () => {
  const data = [
    {
      type: 'blue',
      value: 27,
    },
    {
      type: 'green',
      value: 25,
    },
    {
      type: 'purple',
      value: 18,
    },
    {
      type: 'yellow',
      value: 15,
    },
    {
      type: 'red',
      value: 10,
    },
    {
      type: 'cryan',
      value: 5,
    },
  ]
  const config = {
    appendPadding: 10,
    data,
    theme: 'dark',
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v) => `¥ ${v}`,
      },
    },
    label: {
      type: 'inner',
      offset: '-50%',
      autoRotate: false,
      style: {
        textAlign: 'center',
        fill: '#fff',
      },
      formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    },
    statistic: {
      title: {
        offsetY: -8,
        style: {
          color: '#fff',
        },
      },
      content: {
        style: {
          color: '#fff',
        },
        offsetY: -4,
      },
    },
    pieStyle: {
      lineWidth: 0,
    },
  }
  return (
    <div>
      <Pie {...config} />
    </div>
  )
}
export default DemoPie
