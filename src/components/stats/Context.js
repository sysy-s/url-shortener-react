import { createContext, useReducer } from "react";

export const DetailContext = createContext(false);

export const DetailProvider = ({ children }) => {
  const [detailIsOn, dispatch] = useReducer((detailIsOn, action) => {
    switch (action.type) {
      case "more":
        return { detailIsOn: true, details: action.payload };
      case "less":
        return { detailIsOn: false, details: [] };
      default:
        return detailIsOn;
    }
  }, false);

  return (
    <DetailContext.Provider value={[detailIsOn, dispatch]}>
      {children}
    </DetailContext.Provider>
  );
};
