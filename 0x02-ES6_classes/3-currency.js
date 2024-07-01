export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if ((typeof code !== 'string') && !!(this._code instanceof String)) {
      throw new TypeError('Code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if ((typeof name !== 'string') && !(this._name instanceof String)) {
      throw new TypeError('name must be a string');
    }
  }
}
