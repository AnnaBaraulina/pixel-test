import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'font-sans font-semibold rounded-full flex justify-center items-center',

  size: {
    lg: 'text-lg h-[48px] px-[28px] py-[16px]',
    md: 'text-md h-[35px] px-[18px] py-[10px]',
  },

  theme: {
    primary: 'bg-primary-1 text-black',
    gray: 'bg-gray-98 text-black',
  },
};

const Button = ({ className = null, to = null, size, theme, children, ...otherProps }) => {
  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={clsx(styles.base, styles.size[size], styles.theme[theme], className)}
      to={to}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
