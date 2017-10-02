import React, { Component, PropTypes } from 'react'

//ref定义真实节点名
export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input//获取真实节点
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.f = ''
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}