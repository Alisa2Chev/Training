import classes from "./../Profile1/Profile1.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile1 = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          className={classes.imgTown}
          src="https://www.deutschland.de/sites/default/files/styles/crop_story_content/public/media/image/living-in-germany-city-frankfurt-skyline.jpg?h=11bad672&itok=ceoK8ZeZ"
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
