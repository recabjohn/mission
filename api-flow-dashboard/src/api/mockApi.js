// Mock API functions simulating backend calls

export const getTransactionHistoryList = async (submissionId) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return {
    historyId: `HIST${submissionId.toUpperCase()}12345`
  };
};

export const getHistoryDetails = async (historyId) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    { id: 1, amount: 100, status: "Success" },
    { id: 2, amount: 250, status: "Pending" },
    { id: 3, amount: 75, status: "Success" },
  ];
};
