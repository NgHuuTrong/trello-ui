import { Dropdown, Space } from 'antd';
import { FaAngleDown } from 'react-icons/fa';

function DropdownAnt({ type, title, items }) {
  const header =
    'mr-1 flex h-11 rounded p-2 text-lg font-semibold text-[--color-text] hover:bg-[--color-grey-200]';
  const info =
    'h-12 w-12 ml-2 flex items-center justify-center rounded-full bg-[--color-dark] p-2 text-sm font-semibold text-white hover:bg-[--color-grey-300] hover:text-[--color-dark]';

  const menuProps = {
    items: items.map((item, id) => {
      return {
        key: item.id,
        label: (
          <a href="/" className='flex justify-center items-center'>
            <div className='flex-[1] object-contain'>
              <img src={item.img} alt="image_alt" />
            </div>
            <div className='flex-[3]'>
              <div>{item.title}</div>
              <div>{item.des}</div>
            </div>
          </a>
        ),
      };
    }),
  };

  return (
    <>
      <Dropdown menu={menuProps} trigger={['click']} arrow={true}>
        <button
          className={`${
            type === 'info' ? info : header
          } px-[1.5rem] py-[0.5rem] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]`}
        >
          <span onClick={(e) => e.preventDefault()}>
            <Space size='small' className='flex items-center'>
              <span className='text-[1.2rem]'>{title}</span>
              {type === 'header' && <FaAngleDown size='1.4rem' />}
            </Space>
          </span>
        </button>
      </Dropdown>
    </>
  );
}

export default DropdownAnt;
