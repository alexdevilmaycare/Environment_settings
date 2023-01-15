class P {
  constructor(firstName, LastName) {
    this.firstName = firstName;
    this.LastName = LastName;
  }

  getName() {
    return `${this.firstName} ${this.LastName}`;
  }

  getFirstName() {
    return `${this.firstName}`;
  }
}

export default P;
