export default abstract class Exporter {

  constructor() {

  }

  abstract get name():string
  abstract get instructions():string
  abstract get code():string

  //must be a language name recognized by highlight.js
  abstract get codeLanguage():string
}