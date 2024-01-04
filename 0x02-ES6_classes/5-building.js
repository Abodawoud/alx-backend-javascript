export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('SQFT must be a number');
    }

    this._sqft = sqft;

    if (this.constructor !== Building) {
      if (!this.evacuationWarningMessage) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSQFT) {
    if (typeof newSQFT !== 'number') {
      throw new TypeError('SQFT must be a number');
    }
    this._sqft = newSQFT;
  }
}
