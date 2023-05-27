export const validDate = (data: any) => {
    return data?.slice(0, 4) +
    '/' +
    data?.slice(6, 8) +
    '/' +
    data?.slice(4, 6)
}