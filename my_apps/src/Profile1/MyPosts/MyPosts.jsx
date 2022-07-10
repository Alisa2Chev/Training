import classes from "./../../Profile1/MyPosts/MyPosts.module.css";
import MyPost from "./../../Profile1/MyPosts/Post/MyPost";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
      </div>
      <div className={classes.posts}>
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
      </div>
    </div>
  );
};

export default MyPosts;
