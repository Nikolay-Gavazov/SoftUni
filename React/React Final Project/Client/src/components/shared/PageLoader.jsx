import style from './Loader.module.css';
import { PulseLoader } from 'react-spinners';
const PageLoader = () => {
    return (
        <div className={style.spinner}>
      <PulseLoader color="#3498db" loading={true} size={50} margin={"2px"} />
    </div>
    )
}

export default PageLoader;