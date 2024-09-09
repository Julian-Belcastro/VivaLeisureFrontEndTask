import { ModalListItem, ModalCheckout } from './types/modalTypes';

export const mockModalListItems: ModalListItem[] = [
  {
    discount: '10% Off',
    expiry: 'Expiry: 31/07/2024',
    code: 'YOUR10OFF',
    actionText: 'USE THIS VOUCHER',
  },
  {
    discount: '$50.00 Off',
    expiry: 'Expiry: 31/07/2024',
    code: 'YOUR50OFF',
    actionText: 'USE THIS VOUCHER',
  },
];

export const mockModalCheckout: ModalCheckout = {
  title: 'YOUR MEMBERSHIP',
  locationMajor: 'TUGGERANONG, ACT',
  locationMinor: 'Upper level, shop 10 South Point, Tuggeranong ACT 2900',
  membershipPlanTitle: 'Membership plan',
  membershipPlanValue: 'Your plan DD',
  membershipAmountTitle: 'Membership amount',
  membershipAmountValue: 100.0,
  modalListItem: { discount: '', expiry: '', code: '', actionText: '' },
  firstPaymentDate: '30/07/2024',
  discountedPriceTitle: 'Discounted price after applying voucher',
  joiningFee: 0.0,
  activationFee: 0.0,
  passFee: 0.0,
  costTitle: 'Cost per fortnight',
  costValue: 80.0,
};
