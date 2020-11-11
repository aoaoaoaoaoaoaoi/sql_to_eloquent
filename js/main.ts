// js/main.ts
// TypeScriptの型指定を入れた
function sayHello(name: string): void {
    console.log(`Hello ${name}!`); // ES6のテンプレート文字列を使った
  }
  let myName: string = "TypeScript";
  sayHello(myName);