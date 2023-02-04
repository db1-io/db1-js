export class DB1Error extends Error {
    db1: boolean;
    constructor(message: string) {
      super(message);
      this.name = "DB1Error";
      this.db1 = true;
    }
}

export class InternalError extends DB1Error {
    constructor(message: string) {
      super(message);
      this.name = "InternalError";
    }
}

export class NotFoundError extends DB1Error {
    constructor(message: string) {
      super(message);
      this.name = "NotFoundError";
    }
}

export class BadRequestError extends DB1Error {
    constructor(message: string) {
      super(message);
      this.name = "BadRequestError";
    }
}
