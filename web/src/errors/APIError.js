class APIError extends Error {
  constructor(errors, ...params) {
    super(...params);
    this.errors = errors;
  }

  getErrors() {
    return this.errors;
  }
}

export { APIError };
