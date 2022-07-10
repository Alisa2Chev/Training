import classes from "./../Post/MyPost.module.css";

const MyPost = (props) => {
  return (
    <div className={classes.item}>
      <img
        className={classes.Ava}
        src="https://cs10.pikabu.ru/post_img/big/2020/05/22/11/1590174280160932814.jpg"
      />
      {props.message}
      <span>{props.like}</span>
    </div>
  );
};

export default MyPost;
