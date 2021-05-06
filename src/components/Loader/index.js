import Loader from "react-loader-spinner";
import "./style.css";

const LoaderComponent = () => {
  return <div className="loaderContainer">
      <Loader type="ThreeDots" color="#e4e4e4" height={80} width={80} />
  </div>
}

export default LoaderComponent;