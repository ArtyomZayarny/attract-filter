export const getName = (id, arr) => {
    const result = arr.filter(item => item.id === id);
    const item = result.length > 0 ? result[0] : {};
    const name = item.hasOwnProperty('name') ? item.name : '';
    return name;
}