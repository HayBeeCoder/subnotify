export const requiredParam = (param: string = "") => {
  const msg = `Param ${param} is required`;
  console.error(msg);
  throw new Error(msg);
  };
