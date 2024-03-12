import { Icon } from '@iconify/react';
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, iconType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {iconType ? (
        <span className="button-icon">
          <Icon icon={iconType} />
        </span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
