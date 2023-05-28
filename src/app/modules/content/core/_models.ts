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