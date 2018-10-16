// Making JavaScript Better

// TypeScript wiil try to protect you from portions of JavaScript that never worked.

[] + []; // JS will give you '', TS will give error

//
// other things that are nonsensical in JavaScript
// - don't give a runtime error (making debugging hard)
// - but TypeScript will give a compile time error (making debugging unnecessary)
//

{} + []; // JS: 0, TS: Error
[] + {}; // JS: '[object Object]', TS: Error
{} + {}; // JS: NaN or [object Object][object Object] depedning on browser, TS: Error
'hello' - 1; //JS: NaN, TS: Error

function add(a, b) {
    return;
    a + b; // JS : undefined, TS Error 'unreachable code detected'
}

// TypeScript lints JavaScript. Just doing a better job at it than other linters that don't have type information.
