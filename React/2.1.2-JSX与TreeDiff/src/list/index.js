import React,{Component} from 'react'

class List extends Component{
  render () {
    const data = ['a','b','c','d']
    const nodes = [<div>a</div>,<div>b</div>]
    const a = 'a'
    const obj = {a:1,b:2}

    const showTitle = false
    return (
      <div>
        {data.map((item,index) => {
          if(index%2!==1){
            return null
          }

          return (
            <p>{item}</p>
          )
        })}


        {showTitle && <h3>title</h3>}
        {showTitle ? <h3>title</h3> : <p>no title</p>}
      </div>
    )
  }
}

export default List
