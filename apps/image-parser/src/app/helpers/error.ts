interface APIError {
  status: number;
  error: Error;
}

export const error = (status: number, message: string): APIError => {
  return {
    status,
    error: new Error(message),
  };
};

export const handleError = (err: APIError, req, res) => {
  res.status(err.status || 500);
  res.send(err.error.message);
};
