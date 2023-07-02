export interface StaticLink {
    id: number
    name: string
    content: string
    description: string
}
export interface StaticLinkWithoutId {
    name: string
    content: string
    description: string
}

export interface Faq {
    id: number,
    question: string
    answer: string
}
export interface FaqWithoutId {
    question: string
    answer: string
}

export interface News {
    id: number,
    Title: string
    Content: string
    STATUS: string
    Type: string
    UserId: number
    Image: string
}
export interface NewsWithoutId {
    Title: string
    Content: string
    STATUS: number
    Type: number
    UserId: number
    Image: string
}

export interface Ticket {
    id: number,
    ticketDesc: string
    answerDesc: string
    ticketStatus?: number
    driverName?: string
}
export interface TicketWithoutId {
    ticketDesc: string
    answerDesc: string
    ticketStatus: number
    driverName?: string
}

export interface TicketSendData {
    fromDate: string
    toDate: string

}
export interface TicketAnswer {
    id: number
    answerDesc: string

}
