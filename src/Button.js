import btnCss from './Button.module.css';
import PropTypes from 'prop-types';

function Button({name}){
    return (
        <button className={btnCss.black}>{name}</button>
    )
}

Button.propTypes = {
  name: PropTypes.string.isRequired
}
export default Button;