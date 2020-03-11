import styles from './index.module.scss'

import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from '../../store'

class Comp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  
  render () {
    return (
      <div>
        我是组件模板
      </div>
    )
  }
}

export default withRouter(
  connect(Comp)
)