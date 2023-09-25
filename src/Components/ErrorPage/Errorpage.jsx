import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <h2>404 Error</h2>
            <p>Page not found</p>
            <p>Go back to <a href="/">Home</a></p>
            <br />
            <Link to="/">
                <button>
                Go back
                </button>
              </Link>
        </div>
    );
};

export default Errorpage;