export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = message;
  error.message = message;
  return error;
};
