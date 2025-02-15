import { Link } from 'react-router-dom';

function Button({ children, disabled = false, to, size = 'medium', type = 'primary', classNames = '', onClick, buttonType }) {
  const base = 'flex items-center border-[none] rounded-[--border-radius-sm] font-medium gap-2 ';

  const sizes = {
    small: 'text-[1.2rem] px-[0.8rem] py-[0.4rem] ',
    normal: 'text-[1.4rem] px-[1.2rem] py-[0.8rem] ',
    medium: 'text-[1.4rem] px-[1.6rem] py-[1.2rem] ',
    large: 'text-[1.6rem] px-[2.4rem] py-[1.2rem] ',
    mass: 'text-[2rem] px-[3.2rem] py-[1.6rem] ',
  };

  const types = {
    primary: 'text-[--color-grey-50] bg-[--color-brand-500] hover:bg-[--color-border-focus] ',
    secondary:
      'text-[--color-grey-700] bg-[--color-grey-200] border-[1px] border-[solid] border-[--color-grey-200] hover:bg-[--color-grey-300] ',
    danger: 'text-[--color-red-100] bg-[--color-red-700] hover:bg-[--color-red-800] ',
    icon: 'bg-none [transition:all_0.2s] hover:bg-[--color-grey-200] ',
    text: 'text-[--color-brand-500] text-center [transition:all_0.3s] bg-none hover:text-[--color-border-focus] active:text-[--color-border-focus] ',
  };

  const allClass = base + sizes[size] + types[type] + classNames;

  if (to)
    return (
      <Link to={to} className={allClass}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={allClass} type={buttonType}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={allClass} type={buttonType}>
      {children}
    </button>
  );
}

export default Button;
