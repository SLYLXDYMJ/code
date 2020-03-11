import styles from './index.module.scss'

import React from 'react'
import { connect } from '../../store'

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  
  render () {
    return (
      <div>
        我是页面模板
      </div>
    )
  }
}

export default connect(Page)