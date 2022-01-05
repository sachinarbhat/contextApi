import React from "react";

const dataContext=React.createContext()

let DataProvider = dataContext.Provider
let DataConsumer = dataContext.Consumer

export default dataContext
export {DataProvider,DataConsumer}