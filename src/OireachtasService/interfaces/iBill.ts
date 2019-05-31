import Stage from "./iStage";
import Sponsor from "./iSponsor";
import Version from "./iVersion";

// Object to type the JSON response from the oireachtas api with
export default interface Bill {
  act: any;
  amendmentLists: any[];
  billNo: string;
  billType: string;
  billTypeURI: string;
  billYear: string;
  debates: any[];
  events: any[];
  lastUpdated: string;
  longTitleEn: string;
  longTitleGa: string;
  method: string;
  methodURI: string;
  mostRecentStage: Stage;
  originHouse: {
    showAs: string;
    uri: string;
  };
  relatedDocs: any[];
  shortTitleEn: string;
  shortTitleGa: string;
  source: string;
  sourceURI: string;
  sponsors: Sponsor[];
  stages: Stage[];
  status: string;
  statusURI: string;
  uri: string;
  versions: Version[];
}
