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
        <MyPost message="Hi, how are u ?" like="17" />
        <MyPost message="It's my first post" like="22" />
        <MyPost message="It's my second post" like="14" />
        <MyPost message="GayGayGay" like="16" />
        <MyPost message="I lOve React ;3" like="3" />
      </div>
    </div>
  );
};

export default MyPosts;
