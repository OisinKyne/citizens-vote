import Bill from "../OireachtasService/interfaces/iBill";

const blankBill: Bill = {
  act: "",
  amendmentLists: [],
  billNo: "",
  billType: "",
  billTypeURI: "",
  billYear: "",
  debates: [],
  events: [],
  lastUpdated: "",
  longTitleEn: "",
  longTitleGa: "",
  method: "",
  methodURI: "",
  mostRecentStage: {
    event: {
      chamber: {
        chamberCode: "",
        showAs: "",
        uri: ""
      },
      dates: [],
      house: {
        chamberCode: "",
        chamberType: "",
        houseCode: "",
        houseNo: "",
        showAs: "",
        uri: ""
      },
      progressStage: 0,
      showAs: "",
      stageCompleted: false,
      stageOutcome: null,
      stageURI: "",
      uri: ""
    }
  },
  originHouse: {
    showAs: "",
    uri: ""
  },
  relatedDocs: [],
  shortTitleEn: "",
  shortTitleGa: "",
  source: "",
  sourceURI: "",
  sponsors: [],
  stages: [],
  status: "",
  statusURI: "",
  uri: "",
  versions: []
};

export default blankBill;
