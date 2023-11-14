
export default str => str.split('').reverse().join('');

const wrongReverse = (str) => str.split('').reverse().join('|');
export {wrongReverse};