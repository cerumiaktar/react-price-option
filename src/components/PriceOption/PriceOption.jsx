import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features, duration } = option;
    return (
        <div className='bg-blue-600 text-white p-7 rounded-lg flex flex-col'>
            <h4 className='text-3xl font-medium text-center mb-3'>{name}</h4>
            <h1 className='text-center mb-6'>
                <span className='text-4xl'>{price}</span>
                <span className='text-xl'>/mon</span>
            </h1>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-6 bg-green-700 w-full py-2 text-xl font-medium rounded-xl'>Buy Plan</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;