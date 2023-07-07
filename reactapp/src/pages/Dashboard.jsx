import React from 'react'
import Dashnav from '../components/Dashnav'
import DashTitle from '../components/DashTitle'

const Dashboard = () => {
  return (
    <div style={{'display':'flex'}}>
      <Dashnav/>
      <DashTitle/>
    </div>
  )
}

export default Dashboard
