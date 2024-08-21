import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return <div>
        <p>{error.status}</p>
        <Link to="/">Back to Home</Link>
    </div>
};

export default Error;