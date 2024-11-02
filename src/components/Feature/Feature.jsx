import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
   
    return (
        <div className='flex items-center gap-3 mb-2'>
            <FaCheckCircle />
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string
}

export default Feature;