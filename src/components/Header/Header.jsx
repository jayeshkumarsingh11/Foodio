import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>Your Cravings Delivered</h2>
        <p>
          Explore a world of taste with our thoughtfully prepared menu, featuring exceptional dishes for every craving. We use only the best ingredients and expert techniques to bring you a truly elevated and satisfying meal, every single time.
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
