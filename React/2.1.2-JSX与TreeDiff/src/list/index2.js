import React,{Component} from 'react'

class List extends Component{
  render () {
    const data = ['a','b','c','d']
    const nodes = [<div>a</div>,<div>b</div>]
    const a = 'a'
    const obj = {a:1,b:2}
    return (
      <div>
        {data.map(item => <p>{item}</p>)}

        <div>
          {data}
        </div>

        <h3>nodes:</h3>

        <div>
          {nodes}
        </div>

        <h3>char</h3>
        {a}
        {<div>a</div>}
        {obj}
      </div>
    )
  }
}

export default List
