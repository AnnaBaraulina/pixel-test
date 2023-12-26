import clsx from 'clsx';
import PropTypes from 'prop-types';

const styles = {
  base: 'font-sans text-16 text-gray-94 font-light border border-solid rounded-full shadow-sm',
  size: {
    lg: 'w-[504px] h-[60px] px-4',
  },
  theme: {
    primary: 'bg-primary-1/20 border-primary-1/60',
  },
};

const Input = ({ className, size, theme, placeholder, ...otherProps }) => (
  <input
    type="email"
    placeholder={placeholder}
    className={clsx(styles.base, styles.size[size], styles.theme[theme], className)}
    {...otherProps}
  />
);

Input.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  placeholder: PropTypes.string,
};

export default Input;
