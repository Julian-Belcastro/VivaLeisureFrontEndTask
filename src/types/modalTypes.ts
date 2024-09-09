// Types for the modal have been split/grouped for clarity

// Modal/Modal content props
export interface ModalProps {
  isOpen: boolean;
  setIsOpen: any;
  content: any;
}

export interface ModalContentProps {
  closeModal: any;
}

// Modal Content types
export type ModalTitle = {
  title: string;
};

export type ModalFieldInput = {
  title: string;
  placeholder: string;
  buttonText: string;
  separator: boolean;
};

export type ModalItemList = {
  listTitle: string;
  items: ModalListItem[];
};

export type ModalListItem = {
  discount: string;
  expiry: string;
  code: string;
  actionText: string;
};

export type ModalCheckout = {
  title: string;
  locationMajor: string;
  locationMinor: string;
  membershipPlanTitle: string;
  membershipPlanValue: string;
  membershipAmountTitle: string;
  membershipAmountValue: number;
  modalListItem: ModalListItem;
  firstPaymentDate: string;
  discountedPriceTitle: string;
  joiningFee: number;
  activationFee: number;
  passFee: number;
  costTitle: string;
  costValue: number;
};

export enum VoucherModalState {
  vouchers,
  membership,
  complete,
}
