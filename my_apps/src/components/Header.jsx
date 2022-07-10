import classes from "./../componentsStyle/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"
        alt="Что то не так ;с"
      />
    </header>
  );
};

export default Header;
