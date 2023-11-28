import LatestPhotos from "./LatestPhotos";
import Pagination from "./Pagination";

const Home = () => {
    return(
        <div className="container-fluid tm-container-content tm-mt-60">
        <LatestPhotos/>
        <Pagination/>
        </div>
    );
};
export default Home;