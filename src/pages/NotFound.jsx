import { useNavigate } from "react-router-dom";

const NotFound = () => {
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
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
