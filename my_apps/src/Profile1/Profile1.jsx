import classes from "./../Profile1/Profile1.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile1 = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          className={classes.imgTown}
          src="https://jdmhobby.ru/_sh/30/3040.jpg"
          alt="Town"
        />
      </div>
      <div>
        <img
          className={classes.imgAvatar}
          src="https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg"
          alt="Avatar"
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile1;
