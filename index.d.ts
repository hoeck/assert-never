/**
 * Helper function for exhaustive checks of discriminated unions.
 * https://basarat.gitbooks.io/typescript/docs/types/discriminated-unions.html
 *
 * @example
 * <pre><code>
 * type A = {type: 'a'};
 * type B = {type: 'b'};
 * type Union = A | B;
 *
 * function doSomething(arg: Union) {
 *   if (arg.type === 'a') {
 *     return something;
 *   }
 *
 *   if (arg.type === 'b') {
 *     return somethingElse;
 *   }
 *
 *   // TS will error if there are other types in the union
 *   // Will throw an Error when called at runtime. Use `assertNever(arg, true)`
 *   // instead to fail silently.
 *   return assertNever(arg);
 * }
 * </code></pre>
 */
export default function assertNever(value: never, noThrow?: boolean): never;
