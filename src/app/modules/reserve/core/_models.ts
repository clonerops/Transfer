export interface ReserveModel {
    id?: number
    AttendDateFrom: string
    AttendDateTo: string
    ProvinceId: number
    LadingLocId: number
}

export interface ConfirmReserve {
    id: number
    description: string
}