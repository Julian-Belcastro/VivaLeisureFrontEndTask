import { FC, useState } from 'react';
import {
  ModalTitle,
  ModalFieldInput,
  ModalItemList,
  VoucherModalState,
  ModalCheckout,
  ModalContentProps,
} from '../../types/modalTypes';
import { mockModalCheckout, mockModalListItems } from '../../mockData';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

const VouchersModalContent: FC<ModalContentProps> = (props) => {
  // Initialise input field and modal state values
  const [inputValue, setInputValue] = useState('');
  const [voucherModalState, setVoucherModalState] = useState(
    VoucherModalState.vouchers
  );

  // reset content states
  function closeModal() {
    props.closeModal(false);
    setInputValue('');
    setVoucherModalState(VoucherModalState.vouchers);
  }

  // Handle voucher selection
  function selectItem(item: string) {
    setInputValue(item);
  }

  // Handle the input submission - for this task it's just used to handle the modal enum state change
  const submitInput = () => {
    switch (voucherModalState) {
      case VoucherModalState.vouchers:
        setVoucherModalState(VoucherModalState.membership);
        break;
      case VoucherModalState.membership:
        setVoucherModalState(VoucherModalState.complete);
        break;
      default:
        setVoucherModalState(VoucherModalState.vouchers);
    }
  };

  // section 1 - vouchers display and code input field
  const Title: FC<ModalTitle> = ({ title }) => (
    <div className='titleContainer'>
      <div className='titleText'>{title} </div>
      <div className='titleClose' onClick={closeModal}>
        <CloseIcon />
      </div>
    </div>
  );

  const FieldInput: FC<ModalFieldInput> = ({
    title,
    placeholder,
    buttonText,
    separator,
  }) => (
    <>
      <div className='fieldInputContainer'>
        <div className='titleText'>{title} </div>
        <div className='inputRow'>
          <input
            type='text'
            placeholder={placeholder}
            value={inputValue}
            className={`inputField ${inputValue !== '' && 'greenOverride'}`}
            onChange={() => {}}
            onClick={() => selectItem('HIREMEPLEASE!')}
          />
          <button
            disabled={inputValue === ''}
            className='button'
            onClick={submitInput}
          >
            {buttonText}
          </button>
        </div>
        {separator && (
          <div className='fieldInputContainerSeparator'>
            <div className='start' />
            <div className='middle'>or </div>
            <div className='end' />
          </div>
        )}
      </div>
    </>
  );

  const ModalItemList: FC<ModalItemList> = ({ listTitle, items }) => (
    <>
      <div className='modalItemList'>
        <div className='titleText'>{listTitle} </div>
        {items.map((item, index) => (
          <div className='item' key={index}>
            <div className='itemDiscount'>{item.discount} </div>
            <div className='itemExpiry'>{item.expiry} </div>
            <div className='itemCode'>{item.code} </div>
            <div className='itemAction' onClick={() => selectItem(item.code)}>
              {item.actionText}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // section 2 - voucher confirmation / checkout
  const ModalCheckoutList: FC<ModalCheckout> = ({
    title,
    locationMajor,
    locationMinor,
    membershipPlanTitle,
    membershipPlanValue,
    membershipAmountTitle,
    membershipAmountValue,
    modalListItem,
    firstPaymentDate,
    discountedPriceTitle,
    joiningFee,
    activationFee,
    passFee,
    costTitle,
    costValue,
  }) => (
    <>
      <div className='modalCheckoutListContainer'>
        <div className='titleText'>{} </div>
      </div>
    </>
  );

  const ModalCloseApplyCoupling: FC<{}> = () => (
    <div className='ModalCloseApplyCouplingContainer'>
      <button className='button gray' onClick={closeModal}>
        CLOSE
      </button>
      <button className='button citrus' onClick={submitInput}>
        APPLY
      </button>
    </div>
  );

  // section 3 - Purchase/checkout success confirmation
  const ModalCompletionCard: FC<{}> = () => (
    <div className='ModalCompletionCardContainer'>
      <div className='completeClose' onClick={closeModal}>
        <CloseIcon />
      </div>
      <div className='completeIconContainer'>
        <DoneIcon className='completeIcon' />
      </div>
      <div className='completeTitleContainer'>
        <div> Congratulations! </div>
      </div>
      <div className='completeTextContainer'>
        <div> The voucher has been applied successfully. </div>
      </div>
      <div className='completeCloseContainer'>
        <button className='button citrus' onClick={closeModal}>
          CLOSE
        </button>
      </div>
    </div>
  );

  //logic per section has been separated by enum *VoucherModalState*
  return (
    <>
      {voucherModalState === VoucherModalState.vouchers && (
        <div className='vouchersView'>
          <Title title='Apply voucher' />
          <FieldInput
            title='Do you have a voucher code?'
            placeholder='Enter your voucher code here'
            buttonText='APPLY'
            separator={true}
          />
          <ModalItemList
            listTitle='Your available vouchers'
            items={mockModalListItems}
          />
        </div>
      )}

      {voucherModalState === VoucherModalState.membership && (
        <div className='membershipView'>
          <Title title='Apply voucher' />
          <ModalCheckoutList
            title={mockModalCheckout.title}
            locationMajor={mockModalCheckout.locationMajor}
            locationMinor={mockModalCheckout.locationMinor}
            membershipPlanTitle={mockModalCheckout.membershipPlanTitle}
            membershipPlanValue={mockModalCheckout.membershipPlanValue}
            membershipAmountTitle={mockModalCheckout.membershipAmountTitle}
            membershipAmountValue={mockModalCheckout.membershipAmountValue}
            modalListItem={mockModalCheckout.modalListItem}
            firstPaymentDate={mockModalCheckout.firstPaymentDate}
            discountedPriceTitle={mockModalCheckout.discountedPriceTitle}
            joiningFee={mockModalCheckout.joiningFee}
            activationFee={mockModalCheckout.activationFee}
            passFee={mockModalCheckout.passFee}
            costTitle={mockModalCheckout.costTitle}
            costValue={mockModalCheckout.costValue}
          />
          <ModalCloseApplyCoupling />
        </div>
      )}

      {voucherModalState === VoucherModalState.complete && (
        <div className='completeView'>
          <ModalCompletionCard />
        </div>
      )}
    </>
  );
};

export default VouchersModalContent;
