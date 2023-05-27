export interface DriverList {
    nationalId: string
}

export interface ValidData {
    name: string
}

export interface DriverData {
    addresses: AddressData | null
    bcDate: string | null
    bcNo: string
    bcPlace: number 
    bcPlaceProvince: number 
    bcSerial: string
    birthDate: string
    birthPlace: number
    birthPlaceProvince: number
    cityNo: number
    contractorId: number
    custNo: number
    diplomaId: number
    economicCode: string | null
    email: string | null
    family: string
    father: string
    fullAddress: string
    fullName: string
    gender: number
    income: number
    introLetter: string | null
    jobId: number
    married: number
    mobileNo: string
    name: string
    nationalCode: string
    nationalId: string | null
    plateType: number
    provinceNo: number
    transferPlateId: number
    userId: number
    telNo: string
}

export interface AddressData {
    fullAddress: string | null
    custNo: number | null
    addressType: number | null
    provinceNo: number | null
    cityNo: number | null
    zipCode: string | null
    district: string | null
    street: string | null
    avenue: string | null
    alley: string | null
    plaque: string | null
    postBox: string | null
    cityName: string | null
}