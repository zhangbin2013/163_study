
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
// import App from './demo2'

var list = <div>list</div>
class List extends Component{
  render () {
    return (
      <div>
        list {this.props.name}
      </div>
    )
  }

  componentDidMount () {
    console.log('list mount')
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('list update')
  }

  componentWillUnmount () {
    console.log('list update')
  }

}

class App extends Component {
  render () {
    return (
      <div>
        <List />
        <List/>
        {list}
        {list}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
