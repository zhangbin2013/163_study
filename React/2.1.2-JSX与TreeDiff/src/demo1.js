import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div>
        header
      </div>
    )
  }

  componentDidMount () {
    console.log('header mount')
  }

  componentWillUnmount () {
    console.log('header unmount')
  }
}

class Content extends React.Component {
  render () {
    return (
      <div>
        Content
      </div>
    )
  }

  componentDidMount () {
    console.log('Content mount')
  }

  componentWillUnmount () {
    console.log('Content unmount')
  }
}

class Demo1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      header: false
    }
  }
  render () {
    return (
      <div>
        {this.state.header ? <Header /> : <Content />}
      </div>
    )
  }
}
