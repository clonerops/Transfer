export const setDate = () => {
    let date: any = new Date();
    let yesterday = date - 1000 * 60 * 60 * 72 * 2;   // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)
    return new Date(yesterday);
}