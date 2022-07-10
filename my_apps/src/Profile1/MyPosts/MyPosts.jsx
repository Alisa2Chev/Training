import classes from "./../../Profile1/MyPosts/MyPosts.module.css";
import MyPost from "./../../Profile1/MyPosts/Post/MyPost";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Отправить</button>
      </div>
      <div className={classes.posts}>
        <MyPost message="Hi, how are u ?" />
        <MyPost message="It's my first post" />
        <MyPost message="It's my second post" />
        <MyPost message="GayGayGay" />
        <MyPost message="I lOve React ;3" />
      </div>
    </div>
  );
};

export default MyPosts;
