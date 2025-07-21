export const getEnviroment = () => {
  const env = import.meta.env;
  return {
    VITE_EVIUS: env.VITE_EVIUS,
    VITE_FINAL_KOMBAT: env.VITE_FINAL_KOMBAT,
  };
};
