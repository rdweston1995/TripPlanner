import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../actions/authActions";
// import { getUserPosts } from "./../actions/postAction";
import { getAllPosts } from "./../actions/postAction";
import axios from "axios";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  componentDidMount() {
    console.log(this.props.auth.user);

    axios.get("/api/posts/uploads/" + this.props.auth.user.id)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  logPosts = () => {
    // console.log(this.state);
    for(let i = 0; i < this.state.posts.length; i++){
      console.log(this.state.posts[i]);
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <Link to="/upload" className="btn-flat waves-effect">
              Upload
            </Link>

            <button
              onClick={this.logPosts}
              className="btn btn-large waves-effect waves-light hoverable"
              >Get posts</button>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // getUserPosts: PropTypes.func.isRequired
  getAllPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  // { logoutUser, getUserPosts }
  { logoutUser, getAllPosts }
)(Profile);