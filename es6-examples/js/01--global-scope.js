var globalVariable = 'I’m in the global scope';
let notGlobalVariable = 'I’m not in the global scope';

console.log('The value of globalVariable is “' + window.globalVariable + '”');
console.log('Is globalVariable in window? “' + ('globalVariable' in window) + '”');
console.log('Are globalVariable and window.globalVariable equal? “' + (globalVariable === window.globalVariable) + '”');

console.log('The value of notGlobalVariable is “' + window.notGlobalVariable + '”');
console.log('Is notGlobalVariable in window? “' + ('notGlobalVariable' in window) + '”');
console.log('Are notGlobalVariable and window.notGlobalVariable equal? “' + (notGlobalVariable === window.notGlobalVariable) + '”');
