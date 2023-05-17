export interface AuthModel {
  jwtToken: string
  refreshToken?: string
}

export interface UserAddressModel {
  addressLine: string
  city: string
  state: string
  postCode: string
}

export interface UserCommunicationModel {
  email: boolean
  sms: boolean
  phone: boolean
}

export interface UserEmailSettingsModel {
  emailNotification?: boolean
  sendCopyToPersonalEmail?: boolean
  activityRelatesEmail?: {
    youHaveNewNotifications?: boolean
    youAreSentADirectMessage?: boolean
    someoneAddsYouAsAsAConnection?: boolean
    uponNewOrder?: boolean
    newMembershipApproval?: boolean
    memberRegistration?: boolean
  }
  updatesFromKeenthemes?: {
    newsAboutKeenthemesProductsAndFeatureUpdates?: boolean
    tipsOnGettingMoreOutOfKeen?: boolean
    thingsYouMissedSindeYouLastLoggedIntoKeen?: boolean
    newsAboutStartOnPartnerProductsAndOtherServices?: boolean
    tipsOnStartBusinessProducts?: boolean
  }
}

export interface UserSocialNetworksModel {
  linkedIn: string
  facebook: string
  twitter: string
  instagram: string
}

export interface UserModel {
  firstName: string
  lastName: string
  auth?: AuthModel
}

export interface AuthModelS {
  username: string
  password: string
  captchaToken: string
  captchaCode: string
}

export interface AuthenticationModel {
  // data?: CustomAuthModel
  id?: string
  dealerId?: number
  jwtToken?: string
  firstName?: string
  lastName?: string
  photo?: string
  username?: string
  refreshToken?: string
  tokenExpireTime?: string
  userContractors?: Array<string>
  userParkings?: Array<string>
  userRoles?: Array<string>
  roleMenus?: RoleMenu[]
}

export interface CustomAuthModel {
  id?: string
  dealerId?: number
  jwtToken?: string
  firstName?: string
  lastName?: string
  photo?: string
  username?: string
  refreshToken?: string
  tokenExpireTime?: string
  userContractors?: Array<string>
  userParkings?: Array<string>
  userRoles?: Array<string>
  roleMenus?: RoleMenu[]
}

export interface RoleMenu {
  icon_css?: string
  menu_url?: string
  menuname?: string
  menunno?: string
  parent?: string
  menu_order?: number
  children?: RoleMenu
}