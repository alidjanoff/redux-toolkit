// router
import { useNavigate } from "react-router-dom";

// Components
import Button from "../components/Button";

const NotFound = () => {
  // router
  const navigate = useNavigate();
  
  return (
    <section className="notFound">
      <div className="container">
        <div className="row">
          <div className="fourZeroFour">
            <div className="msgBox">
              <span>OH!</span>
            </div>
            <div className="statusCode">
              <div className="digit firstDigit">
                <span>4</span>
              </div>
              <div className="digit secondDigit">
                <span>0</span>
              </div>
              <div className="digit thirdDigit">
                <span>4</span>
              </div>
            </div>
            <h2 className="errorTitle">Sorry! Page not found</h2>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
