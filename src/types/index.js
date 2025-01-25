// import { AlertProps } from '@mui/lab';
// import { IUserState } from '@redux/slices/UserSlice';
// import { IAuthState } from '@redux/slices/AuthSlice';
// import { IProductsState } from '@redux/slices/ProductsSlice';
// import { ITecDocState } from '@redux/slices/TecDocSlice';
// import { ICartState } from '@redux/slices/CartSlice';
// import { IOrderState } from '@redux/slices/OrderSlice';
// import { INewsState } from '@redux/slices/NewsSlice';
// import { IMutualSettlementState } from '@redux/slices/MutualSettlementSlice';
// import { IProfileState } from '@redux/slices/ProfileSlice';

export interface IState {
    // user: IUserState;
    // auth: IAuthState;
    // products: IProductsState;
    // cart: ICartState;
    // tecDocParts: ITecDocState;
    // order: IOrderState;
    // news: INewsState;
    // mutualSettlement: IMutualSettlementState;
    // profile: IProfileState;
}

export interface IAction<T> {
    type: string;
    payload: T;
}

type keyCollection = number | string;

export type ObjectCollection<T> = {
    [key: keyCollection]: T;
};

export interface ICustomerDefault {
    customerId: number;
    customerName: string;
    customerCode: string;
    deliveryAddress: string;
    phone: string;
    personalAccount: string;
    regionShowAppQrCode: null;
}

export interface IGeneralData {
}

export interface IUser {
    id: number | null;
    currencyId: number | null;
    username: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    isSuperuser: boolean;
    isStaff: boolean;
    lang: string[];
    birthday: string;
    address: string;
    position?: string;
}

export type IContractor = {
    code: string;
    creditLimitCurrency: string;
    discountGroup: string;
    id: number;
    personalAccount: string;
    text: string;
};

export interface ILoadResult {
    // so, tried === true and loaded === false means Load Error

    loaded: boolean;
    tried: boolean;
    loading: boolean;
}

export interface IAlerts {
    message: string;
    severity: AlertProps['severity'];
    open?: boolean;
}

// export type IOrder = {
//   sessionKey?: string;
//   deliveryId?: number;
//   shoppingCartIdList
// }

export type ICurrency = {
    abbr: string;
    id: number;
    name: string;
    simbol: string;
};

export type ISelectItem = {
    value: string | number | boolean;
    label: string | number;
    key?: string | number;
};

export type IPhotos = {
    artPhotos?: Array<string>;
    galleryPhotos?: Array<string>;
    largePhotos?: Array<string>;
    mobilePhotos?: Array<string>;
    thumb?: string;
};

export type IStorage = {
    basePrice: number;
    characteristic?: any;
    currency: number;
    currencyCode: string;
    expectedDate?: any;
    id: number;
    quantityInt: number;
    storage: number;
    storageCostPerKilogramm?: number;
    storageCountryIsoCode2Symbols?: any;
    storageName: string;
    storageSupplierId: number;
    uuid?: string;
    count?: number;
    availability?: boolean;
};

export type TShortDataStorage = {
    id: number;
    name: string;
    itemCodeInAccountingSystem: string;
};

export type ICustomer = {

};

export interface ICustomerSettings {
    baseWarehouseMainSupplier: number;
    defaultContract: number;
}

export type TError = {
    status: number;
    data: any;
};

export type TCustomTypographyVariant =
    | 'inherit'
    | 'button'
    | 'overline'
    | 'caption'
    | 'subtitle4'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'subtitle5'
    | 'body3'
    | 'body4'
    | 'subtitle3';


