import { createStore } from 'redux'
import { connect as _connect } from 'react-redux'

let defaultState = {
  openId: null,
  province: null,
  city: null,
  area: null
}
let reducer = function (state = defaultState, { type, value }) {
  switch (type) {
    case 'openId': {
      return { ...state, openId: value }
    }
    case 'province' : {
      return { ...state, province: value }
    }
    case 'city': {
      return { ...state, city: value }
    }
    case 'area': {
      return { ...state, area: value }
    }
    default: {
      return state
    }
  }
}
let mapStateToProps = function (state) {
  return { ...state }
}
let mapActionToProps = function (dispatch) {
  return {
    setOpenId (value) {
      dispatch({ type: 'openId', value })
    },
    setProvince (value) {
      dispatch({ type: 'province', value })
    },
    setCity (value) {
      dispatch({ type: 'city', value })
    },
    setArea (value) {
      dispatch({ type: 'area', value })
    }
  }
}
let connect = function (Comp) {
  return _connect(
    mapStateToProps,
    mapActionToProps
  )(Comp)
}
let store = createStore(reducer)

export {
  store,
  connect
}
