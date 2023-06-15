class ApiError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super();
        this.message = message;
        this.status = status;
    }

    static badRequest(message: string) {
        return new ApiError(message, 404);
    }

    static internal(message: string) {
        return new ApiError(message, 500);
    }
}

export default ApiError;
