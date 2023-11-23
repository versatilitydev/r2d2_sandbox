import { Link } from "react-router-dom"; // Replace with actual path
import { CyberNoesisPhoto } from "../../settings/constants";

function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link to="/">
        <img className="h-12 w-22" src={CyberNoesisPhoto} alt="Your Company" />
      </Link>
    </div>
  );
}

export default Logo;
