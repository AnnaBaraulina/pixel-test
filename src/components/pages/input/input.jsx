import clsx from 'clsx';
import PropTypes from 'prop-types';

const styles = {
  base: 'font-sans text-16 font-light rounded-full border border-solid shadow-sm',
  size: {
    lg: 'w-[504px] h-[60px] px-4',
  },
  theme: {
    primary: 'bg-primary-1/20',
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
