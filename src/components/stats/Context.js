import { createContext, useReducer, useState } from "react";

export const DetailContext = createContext(false);

export const DetailProvider = ({ children }) => {
  const [details, setDetails] = useState("");
  const [advancedDetails, setAdvancedDetails] = useState("");
  const [detailState, dispatch] = useReducer((detailState, action) => {
    switch (action.type) {
      case "show-timestamps":
        setDetails(action.payload);
        return { detailState: true, details: details.data, short: details.short };
      case "less":
        setDetails("");
        return { detailState: false, details: details.data, short: details.short };
      default:
        return detailState;
    }
  }, false);

  return (
    <DetailContext.Provider value={[detailState, dispatch]}>
      {children}
    </DetailContext.Provider>
  );
};
