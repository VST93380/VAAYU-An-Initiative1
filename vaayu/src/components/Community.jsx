import React from "react";
import urlmap from "./../UrlHelper";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useAuth } from "./../Authcontext";

function BlogModal() {
  const auth = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    urlmap
      .post("/vaayu/comment", {
        username: auth.user.username,
        blogmsg: data.get("blogmsg"),
        title: data.get("title"),
        imagelink: data.get("imagelink"),
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          toast.success("BlogPost has been saved");
        } else {
          toast.error("error in saving the post");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div
        className="modal fade modal-lg"
        id="blogPostModal"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog bounce-in-top">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                  <span className="heading">
                    <i class="fa-solid fa-comments"></i>&nbsp;Post your
                    experience
                  </span>
                  <input
                    placeholder="title of the blog"
                    type="text"
                    className="input"
                    name="title"
                  />
                  <input
                    placeholder="image url"
                    id="mail"
                    type="text"
                    className="input"
                    name="imagelink"
                  />
                  <textarea
                    placeholder="Say Hello"
                    rows="10"
                    cols="30"
                    id="message"
                    name="blogmsg"
                    className="textarea"
                  ></textarea>
                  <div className="button-container">
                    <button type="submit" className="loginbtn">
                      <i class="fa-solid fa-paper-plane"></i>&nbsp;Post My Blog
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ReadMore(props) {
  return (
    <div
      className="modal fade modal-lg"
      id={props.modalId}
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="readmore_card">
              <button data-bs-dismiss="modal">
                <i class="fa-solid fa-circle-xmark fa-spin"></i>
              </button>
              <h2>
                <span>{props.comment.title}</span>
                <hr/>
              </h2>
              <div className="read_img">
                <img src={props.comment.imagelink} alt="Blog Image" />
              </div>
              <div className="blogmsg">
                <h4>{props.comment.username}'s review</h4>
                <hr />
                <p className="info">{props.comment.blogmsg}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogButton() {
  const auth = useAuth();
  return (
    <>
      {auth.user && (
        <div>
          <h2>
            Be a part of our community! Feel free to share your experience 😎
          </h2>
          <div>
            <button
              className="btn btn-primary loginbtn"
              data-bs-toggle="modal"
              data-bs-target="#blogPostModal"
            >
              Create blog
            </button>
          </div>
        </div>
      )}
      {!auth.user && (
        <h2>Register to Vaayu to Post Blogs! Your opinion matters! ✊</h2>
      )}
    </>
  );
}

function Card(props) {
  const words = props.comment.blogmsg.split(" ");
  const truncatedMessage = words.slice(0, 2).join(" ");
  const trunmsg = truncatedMessage + " ...";
  const modalId = `readMore-${props.index}`;

  return (
    <>
      <div>
        <div className="original_card tilt-in-fwd-tr">
          <div className="image">
            <img src={props.comment.imagelink} alt="Blog Image" />
          </div>
          <div className="content">
            <a href="#">
              <span className="title">{props.comment.title}</span>
            </a>
            <p className="desc">{trunmsg}</p>
            <a
              className="action loginbtn readmorebtn"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
            >
              Find out more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <ReadMore comment={props.comment} modalId={modalId} />
    </>
  );
}

function Community() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    urlmap
      .get("/vaayu/getcomments")
      .then((response) => {
        setComments(response.data); // Set comments in state
      })
      .catch((err) => {
        console.error(err);
      });
  }, [comments]);

  return (
    <div className="blog-vaayu-conatiner">
      <div className="slide-in-elliptic-top-fwd Blog_container">
        <BlogButton />
      </div>
      <div className="container">
        <div className="card-container">
          {/* Render multiple Card components with comment data as props */}
          {comments.map((comment, index) => (
            <Card key={index} comment={comment} index={index} />
          ))}
        </div>
      </div>
      <BlogModal />
    </div>
  );
}
export default Community;
