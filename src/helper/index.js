export const formatDate = (date) => {
    const inputDate = new Date(date);
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return inputDate.toLocaleDateString('en-US', options);
}