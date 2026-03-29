let handler: any;

export const setLoaderHandler = (fn: any) => {
  handler = fn;
};

export const setGlobalLoader = (status: boolean) => {
  if (handler) handler(status);
};