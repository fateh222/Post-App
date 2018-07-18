import React from "react"
import PropTypes from "prop-types"
import PostItem from './PostItem'

class PostList extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      posts: props.posts
    };

  }
  render () {
    return (
      <div className="post-list">
        {
          this.state.posts.map(( post, index )=>{
            return(
              <PostItem
                key = { index }
                post = { post }
              />
            )
          })
        }
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array
};
export default PostList
