// Mock API functions simulating backend calls

export const getTransactionHistoryList = async (submissionId) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  return {
    TransactionHistory: [
      {
        HistoryID: "1049235",
        SubmissionNumber: "SN131293",
        TransactionNumber: "SN131293",
        ID: submissionId,
        SubmissionID: submissionId,
        EventName: "SaveEntity_2.1.0.1",
        UserActivity: "SaveEntity",
        UpdatedBy: "uiux11",
        CreatedBy: "uiux11",
        UpdatedDate: "2026-03-17 02:12:15.0",
        CreatedDate: "2026-03-17 02:12:15.0",
        ActivityDateTime: "2026-03-17 02:12:15.0",
      },
      {
        HistoryID: "1049236",
        SubmissionNumber: "SN131294",
        TransactionNumber: "SN131294",
        ID: submissionId,
        SubmissionID: submissionId,
        EventName: "SaveEntity_2.1.0.1",
        UserActivity: "SaveEntity",
        UpdatedBy: "uiux11",
        CreatedBy: "uiux11",
        UpdatedDate: "2026-03-17 03:45:00.0",
        CreatedDate: "2026-03-17 03:45:00.0",
        ActivityDateTime: "2026-03-17 03:45:00.0",
      },
    ],
  };
};

export const getHistoryDetails = async (historyId) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  return {
    Account: {
      ID: "90f81a72-1081-4a97-ae5f-035b0dc34aa8",
      AccountID: "90f81a72-1081-4a97-ae5f-035b0dc34aa8",
      FirstName1: "first",
      MiddleName3: "middle",
      LastName2: "last",
      Dob: "",
      AddedDt: "01/01/2026",
      ChangeEffectiveDate: "01/01/2026",
      ChangeType: "Change",
      WrittenPremium: "0.0",
      TotalWaivedOffPremium: "0.0",
      WaivedOffPremium: "0.0",
      ProratedPriorPremium: "0.0",
      CreatedFromDate: "03/17/2026",
      CreatedToDate: "03/17/2026",
      LastModifiedDate: "2026-03-17 01:46:39",
      UpdatedDate: "2026-03-17 01:46:39",
      AgencyId: "005fc9fb-488c-4843-9b2e-a6a43a642f81",
      AgentId: "a25726f6-c55c-4b2f-b29f-4204ace8a42d",
      CreatedBy: "uiux11",
      UpdatedBy: "uiux11",
      SelectedLineOfBusiness: [],
      AccountAddress: [
        {
          ID: "3aa9710a-f36d-4e54-858d-ddc4cc6caa18",
          FullAddress: "17 Mile Dr, Del Monte Forest, CA, USA",
          AccountFullAddress: "17 Mile Dr, Del Monte Forest, CA, USA",
          StreetNumberAddress1: "17 Mile Drive",
          StreetNameAddress2: "",
          City: "Del Monte Forest",
          County: "Monterey County",
          StateRegionCode: "CA",
          Country: "US",
          Zipcode1: "as",
          Zipcode2: "",
          Latitude: "36.5727687",
          Longitude: "-121.9487285",
          ChangeType: "No Change",
          PARENTID: "90f81a72-1081-4a97-ae5f-035b0dc34aa8",
        },
      ],
      AccountCommunication: [
        {
          ID: "b911e7fb-d19d-441a-aa3e-c29dc86f73e4",
          PhoneNumber: "",
          EmailAddress: "",
          SecondaryPhoneNumber: "",
          ChangeType: "No Change",
          PARENTID: "90f81a72-1081-4a97-ae5f-035b0dc34aa8",
        },
      ],
      Insured: [
        {
          ID: "234cd768-77db-49da-9596-e82f9becc5de",
          InsuredID: "234cd768-77db-49da-9596-e82f9becc5de",
          InsuredName: "first middle last",
          FirstName1: "Nithin",
          LastName2: "Rakshith",
          Dob: "01/01/2001",
          ExistingInsuredYN: "No",
          MaritalStatus: "",
          InsuredFullAddress: "17 Mile Dr, Del Monte Forest, CA, USA",
          ChangeType: "Change",
          AgencyId: "005fc9fb-488c-4843-9b2e-a6a43a642f81",
          AgentId: "a25726f6-c55c-4b2f-b29f-4204ace8a42d",
          WrittenPremium: "0.0",
          WaivedOffPremium: "0.0",
          TotalWaivedOffPremium: "0.0",
          ProratedPriorPremium: "0.0",
          CreatedBy: "uiux11",
          UpdatedBy: "uiux11",
          CreatedDate: "2026-03-17 01:46:39",
          LastModifiedDate: "2026-03-17 01:46:39",
          UpdatedDate: "2026-03-17 01:46:39",
        },
      ],
    },
  };
};
