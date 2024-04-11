class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and setter for code attribute
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Method to display the currency in the specified format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
