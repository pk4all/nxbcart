import React, { createContext, useState,ReactNode } from 'react';
type CurrencyContextType = {
    currency?: string;
    changeCurrency?: (newCurrency: string) => void;
}
type CurrencyComponentProps = {
    children: ReactNode;
  };
  
  const CurrencyContext = createContext<CurrencyContextType>({});

  export const CurrencyProvider = ({ children}:CurrencyComponentProps) => {
    const [currency, setCurrency] = useState('₹');
  
    const changeCurrency = (newCurrency: string) => {
      setCurrency(newCurrency);
    };
    return (
      <CurrencyContext.Provider value={{ currency, changeCurrency }}>
        {children}
      </CurrencyContext.Provider>
    );
  };
  export default CurrencyContext;
  