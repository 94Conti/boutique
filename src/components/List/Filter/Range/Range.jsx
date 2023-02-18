import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './Range.css';

const Range = ({maxLimit, range, handleRange}) => {

    const [min, max] = range;

    return (
        <div>
            <RangeSlider className='range'
                         max={maxLimit}
                         value={range}
                         onInput={handleRange}/>
            <p>Price between {min}€ and {max}€</p>
        </div>
    )
}

export default Range;
