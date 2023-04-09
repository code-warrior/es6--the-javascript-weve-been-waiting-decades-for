var globalVariable = `I’m in the global scope`;
let notGlobalVariable = `I’m not in the global scope`;

console.log(`4. The value of globalVariable is “' + window.globalVariable + '”`);
console.log(`5. Is globalVariable in window? “' + ('globalVariable' in window) + '”`);
console.log(`6. Are globalVariable and window.globalVariable equal? “' + (globalVariable === window.globalVariable) + '”`);

console.log(`8. The value of notGlobalVariable is “' + window.notGlobalVariable + '”`);
console.log(`9. Is notGlobalVariable in window? “' + ('notGlobalVariable' in window) + '”`);
console.log(`10. Are notGlobalVariable and window.notGlobalVariable equal? “' + (notGlobalVariable === window.notGlobalVariable) + '”`);
