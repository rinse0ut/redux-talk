import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { getPosts } from '../selectors'
import List from '../components/List'

class PostContainer extends Component {
  
  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <List
        items={posts}
      />
    )
  }
}  

function mapStateToProps(state) {
  return {
    posts: getPosts(state),
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostContainer)