export interface carDelayModel {
  billlandingid: number
  contractorDlvrDate: string
  dealerName: string
  deliverToDealerDate: string
  destinationDesc: string
  driveR_NAME: string
  iR_DeliverToDealerDate: string
  intervalTimeLong: number
  mI_ContractorDlvrDate: string
  originDesc: string
  prod_no: number
  transferTimeLong: string
  transferTimeLong_str: string
}

export interface CarStatusRequest {
  productNo: number
  chassisNo: string
}

export interface BillandingChart {
  fromDate: string
  toDate: string
  contr_id: number
}
export interface CarChart {
  fromDate: string
  toDate: string
  contr_id: number
}

export interface LandigStatus {
  BLandId: number
  BlandSerialNo: number
  fromDate: string
  toDate: string
  contId: number
  transType: string
  driverId: number
  originId: number
  destId: number
  StatusId: number
}
export interface TemporaryStatus {
  fromDate: string
  toDate: string
  contId: number
  driverId: number
  originId: number
  recDealerId: number
  destId: number
  StatusId: number
}
