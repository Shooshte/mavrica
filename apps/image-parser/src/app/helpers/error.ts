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
  // whatever you want here, feel free to populate
  // properties on `err` to treat it differently in here.
  res.status(err.status || 500);
  res.send({ error: err.error.message });
};
