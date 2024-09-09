import { FC, useState } from 'react';
import Modal from './modal';
import VouchersModalContent from './content/vouchersModalContent';

// The Initial appearance of the ['Vouchers' - You haven't applied a voucher yet] Landing box/page
const VouchersLanding: FC<{}> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <div className='vouchers-body'>
        <div className='box'>
          <div className='title'> Vouchers</div>
          <div className='content'>
            <div className='text'>You haven't applied a voucher yet</div>
            <button className='button' onClick={openModal}>
              APPLY VOUCHER
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        content={VouchersModalContent}
      />
    </>
  );
};

export default VouchersLanding;
