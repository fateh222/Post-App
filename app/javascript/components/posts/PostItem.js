import React from "react"
import PropTypes from "prop-types"
import Timestamp from "react-timestamp"
class PostItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isHovered: false,
    }

  }

  componentDidMount() {
    var self = this;
    this._timer = setInterval(() => { self.forceUpdate() }, 1000);
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  handleHover = () => {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  excerptPostItem = ( description ) => {
    return  ( description.length > 300 ) ? description.slice(0,300) + " ..... " : description
  }

  render() {
    const { post } = this.props
    let cardClass = this.state.isHovered ? "card show-card" : "card hide-card";
    return(
      <div className="single-post">
        <div className={ cardClass } onMouseEnter={ this.handleHover } onMouseLeave={ this.handleHover }>
          <div className="card-body">
            <div className="title-body">
              <h5 className="card-title float-left">{ post.title }</h5>
              <span className="float-right"><Timestamp time={ post.created_at } precision={4} /></span>
            </div>
            <hr/>
            <div className="text-body">
              <p className="card-text">{ this.excerptPostItem( post.text ) }</p>
              <a href="#" className="btn btn-outline-primary float-right">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PostItem.propTypes = {
  post: PropTypes.object
};

export default PostItem
