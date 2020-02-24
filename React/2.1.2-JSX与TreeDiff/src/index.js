
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
// import App from './demo2'
import Filter from './filter'

class Content extends Component{
  render () {
    return (
      <div>
        content
      </div>
    )
  }



}

class Item extends Component{
  render () {
    return (
      <div>
        {this.props.data}
      </div>
    )
  }

  componentDidMount () {
    console.log(this.props.data,'mount')
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(this.props.data,'update')
  }

  componentWillUnmount(){
    console.log(this.props.data,'unmount')
  }
}

class List extends Component{
  constructor (props) {
    super(props)
    this.state = {
      data : [
        'a','b','c','d'
      ]
    }
  }

  render () {
    return (
      <div>
        {this.state.data.map(item =><Item key={item} data={item}/>)}
      </div>
    )
  }

  componentDidMount () {
    window.list = this
  }

}
var data = ['a','b','c','d']
var data = ['b','c','d']

/*
no key
d unmount
index.js:34 b update
index.js:34 c update
index.js:34 d update
 */


/*
has key
a unmount
index.js:34 b update
index.js:34 c update
index.js:34 d update
 */



ReactDOM.render(<List />, document.getElementById('root'))
