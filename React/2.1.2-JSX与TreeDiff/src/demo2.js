import React from 'react'

class Item extends React.Component {
  render () {
    return (
      <div>
        {this.props.value}
      </div>
    )
  }

  componentWillUpdate (nextProps, nextState) {
    console.log(this.props.value, 'update')
  }

  componentDidMount () {
    console.log(this.props.value, 'mount')
  }

  componentWillUnmount () {
    console.log(this.props.value, 'unmount')
  }
}

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ['a', 'b', 'c', 'd']
    }
  }
  render () {
    return (
      <div>
        {this.state.data.map(item => <Item value={item} key={item}/>)}
      </div>
    )
  }

  componentDidMount () {
    window.list = this
  }

}

export default List
