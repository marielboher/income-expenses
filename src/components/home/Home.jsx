import "./home.css";
import panaSvg from "../../assets/multimedia/pana.svg";

const Home = () => {
  return (
    <div>
      <div className="container-home">
        <div className="welcome">
          <h1>Payment for any business</h1>
          <div className="text-welcome">
            <p>
              Welcome to Expense Tracker, A aplication to manage your expenses
              and income.
            </p>
            <button className="signupBtn">
              GET STARTED
              <span className="arrow">
                <svg
                  fill="rgb(183, 128, 255)"
                  viewBox="0 0 320 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <img alt="home" src={panaSvg} className="img-home" />
      </div>
    </div>
  );
};

export default Home;
