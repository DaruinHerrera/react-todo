import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {    
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem)
          setLoading(false) 
        } catch (error) {
          setError(error);
        }
      }, 5000);
    });
    const saveItem = (newItem) => {
        try {
          const stringifiedItem = JSON.stringify(newItem);
          localStorage.setItem(itemName, stringifiedItem);
          setItem(newItem);
        } catch (error) {
          setError(error);
        }
      };
     
      // si retorna más de un estado se cambio de enviar un array [] a un objeto {}
      return {
        item,
        saveItem,
        loading,
        error,
      };
    }
    
export {useLocalStorage}