import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

// const LoadSubreddit = ({dispatch}) => (
//   <button onClick={() => dispatch(fetchPosts('newzealand'))}>
//     Fetch Posts
//   </button>
// )
class LoadSubreddit extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subreddit : ''
    }

  this.handleChange = this.handleChange.bind(this)  
  }
  
  handleChange (e) {
    console.log(e.target.value, this.state.subreddit)
    this.setState( 
      {[e.target.name]: e.target.value 
    })     

  }

  handleSubmit(e ) {
    e.preventDefault()
    this.props.dispatch(fetchPosts(this.state.subreddit))
  }


  render() {
    return <div> 

      <form onSubmit={this.handleSubmit.bind(this)}>
        <input name='subreddit' onChange={this.handleChange}type="text" placeholder='Enter subreddit'/>
        <input type="submit" value="Fetch Posts" />
      </form>

     </div>
  }

}


export default connect()(LoadSubreddit)
