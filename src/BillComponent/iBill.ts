import Stage from "./iStage";
import Sponsor from "./iSponsor";
import Version from "./iVersion";

// Object to type the JSON response from the oireachtas api with
export default interface Bill {
  act: any;
  amendmentLists: [];
  billNo: number;
  billType: string;
  billTypeURI: string;
  billYear: string;
  debates: [];
  events: [];
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
//     "bill": {
//         "act": null,
//             "amendmentLists": [],
//                 "billNo": "47",
//                     "billType": "Public",
//                         "billTypeURI": "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
//                             "billYear": "2018",
//                                 "debates": [
//                                     {
//                                         "chamber": {
//                                             "showAs": "Seanad Éireann",
//                                             "uri": "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad"
//                                         },
//                                         "date": "2019-05-08",
//                                         "debateSectionId": "dbsect_20",
//                                         "showAs": "Free Education (Prohibition of Fees and Charges) Bill 2018: Second Stage",
//                                         "uri": "https://data.oireachtas.ie/akn/ie/debateRecord/seanad/2019-05-08/debate/main"
//                                     },
//                                     {
//                                         "chamber": {
//                                             "showAs": "Seanad Éireann",
//                                             "uri": "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad"
//                                         },
//                                         "date": "2018-05-03",
//                                         "debateSectionId": "dbsect_10",
//                                         "showAs": "Free Education (Prohibition of Fees and Charges) Bill 2018: First Stage",
//                                         "uri": "https://data.oireachtas.ie/akn/ie/debateRecord/seanad/2018-05-03/debate/main"
//                                     }
//                                 ],
//                                     "events": [
//                                         {
//                                             "event": {
//                                                 "chamber": {
//                                                     "chamberCode": "seanad",
//                                                     "showAs": "Seanad Éireann",
//                                                     "uri": "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad"
//                                                 },
//                                                 "dates": [
//                                                     {
//                                                         "date": "2018-05-03"
//                                                     }
//                                                 ],
//                                                 "house": {
//                                                     "chamberCode": "seanad",
//                                                     "chamberType": "house",
//                                                     "houseCode": "seanad",
//                                                     "houseNo": "25",
//                                                     "showAs": "25th Seanad",
//                                                     "uri": "https://data.oireachtas.ie/ie/oireachtas/house/seanad/25"
//                                                 },
//                                                 "progressStage": 1,
//                                                 "showAs": "First Stage",
//                                                 "stageCompleted": false,
//                                                 "stageOutcome": null,
//                                                 "stageURI": "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
//                                                 "uri": "https://data.oireachtas.ie/ie/oireachtas/bill/2018/47/stage/seanad/1"
//                                             }
//                                         }
//                                     ],
//                                         "lastUpdated": "2019-05-10T11:16:54.520000+00:00",
//                                             "longTitleEn": "Bill entitled An Act to prohibit recognised schools, subject to certain exceptions, from charging admission or enrolment fees or from otherwise seeking contributions from parents towards meeting the costs and expenses incurred in providing education at that school; and to provide for connected matters.",
//                                                 "longTitleGa": "Bille dá ngairtear Acht do thoirmeasc ar scoileanna aitheanta, faoi réir eisceachtaí áirithe, táillí maidir le ligean isteach nó rollú a mhuirearú nó ranníocaí a lorg ó thuismitheoirí thairis sin faoi chomhair íoc na gcostas agus na gcaiteachas arna dtabhú i soláthar an oideachais sa scoil sin; agus do dhéanamh socrú i dtaobh nithe comhghaolmhara.",
//                                                     "method": "Introduced",
//                                                         "methodURI": "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
//                                                             "mostRecentStage": {
//             "event": {
//                 "chamber": {
//                     "chamberCode": "seanad",
//                         "showAs": "Seanad Éireann",
//                             "uri": "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad"
//                 },
//                 "dates": [
//                     {
//                         "date": "2019-05-08"
//                     }
//                 ],
//                     "house": {
//                     "chamberCode": "seanad",
//                         "chamberType": "house",
//                             "houseCode": "seanad",
//                                 "houseNo": "25",
//                                     "showAs": "25th Seanad",
//                                         "uri": "https://data.oireachtas.ie/ie/oireachtas/house/seanad/25"
//                 },
//                 "progressStage": 3,
//                     "showAs": "Committee Stage",
//                         "stageCompleted": false,
//                             "stageOutcome": "Current",
//                                 "stageURI": "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/3",
//                                     "uri": "https://data.oireachtas.ie/ie/oireachtas/bill/2018/47/stage/seanad/3"
//             }
//         },
//         "originHouse": {
//             "showAs": "Seanad Éireann",
//                 "uri": "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad"
//         },
//         "originHouseURI": "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
//             "relatedDocs": [],
//                 "shortTitleEn": "Free Education (Prohibition of Fees and Charges) Bill 2018",
//                     "shortTitleGa": "An Bille um Shaoroideachas (Toirmeasc ar Tháillí agus ar Mhuirir), 2018",
//                         "source": "Private Member",
//                             "sourceURI": "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
//                                 "sponsors": [
//                                     {
//                                         "sponsor": {
//                                             "as": {
//                                                 "showAs": null,
//                                                 "uri": null
//                                             },
//                                             "by": {
//                                                 "showAs": "Gerald Nash",
//                                                 "uri": "https://data.oireachtas.ie/ie/oireachtas/member/id/Gerald-Nash.D.2011-03-09"
//                                             },
//                                             "isPrimary": false
//                                         }
//                                     },
//                                     {
//                                         "sponsor": {
//                                             "as": {
//                                                 "showAs": null,
//                                                 "uri": null
//                                             },
//                                             "by": {
//                                                 "showAs": "Kevin Humphreys",
//                                                 "uri": "https://data.oireachtas.ie/ie/oireachtas/member/id/Kevin-Humphreys.D.2011-03-09"
//                                             },
//                                             "isPrimary": false
//                                         }
//                                     },
//                                     {
//                                         "sponsor": {
//                                             "as": {
//                                                 "showAs": null,
//                                                 "uri": null
//                                             },
//                                             "by": {
//                                                 "showAs": "Ivana Bacik",
//                                                 "uri": "https://data.oireachtas.ie/ie/oireachtas/member/id/Ivana-Bacik.S.2007-07-23"
//                                             },
//                                             "isPrimary": false
//                                         }
//                                     },
//                                     {
//                                         "sponsor": {
//                                             "as": {
//                                                 "showAs": null,
//                                                 "uri": null
//                                             },
//                                             "by": {
//                                                 "showAs": "Aodhán Ó Ríordáin",
//                                                 "uri": "https://data.oireachtas.ie/ie/oireachtas/member/id/Aodhán-Ó-Ríordáin.D.2011-03-09"
//                                             },
//                                             "isPrimary": true
//                                         }
//                                     }
//                                 ],
//                                     "stages": [
//                                         {
//                                             "event": {
//                                                 "chamber": {
//                                                     "chamberCode": "seanad",
//                                                     "showAs": "Seanad Éireann",
//                                                     "uri": "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad"
//                                                 },
//                                                 "dates": [
//                                                     {
//                                                         "date": "2018-05-03"
//                                                     },
//                                                     {
//                                                         "date": "2018-05-03"
//                                                     }
//                                                 ],
//                                                 "house": {
//                                                     "chamberCode": "seanad",
//                                                     "chamberType": "house",
//                                                     "houseCode": "seanad",
//                                                     "houseNo": "25",
//                                                     "showAs": "25th Seanad",
//                                                     "uri": "https://data.oireachtas.ie/ie/oireachtas/house/seanad/25"
//                                                 },
//                                                 "progressStage": 1,
//                                                 "showAs": "First Stage",
//                                                 "stageCompleted": true,
//                                                 "stageOutcome": null,
//                                                 "stageURI": "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
//                                                 "uri": "https://data.oireachtas.ie/ie/oireachtas/bill/2018/47/stage/seanad/1"
//                                             }
//                                         },
//                                         {
//                                             "event": {
//                                                 "chamber": {
//                                                     "chamberCode": "seanad",
//                                                     "showAs": "Seanad Éireann",
//                                                     "uri": "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad"
//                                                 },
//                                                 "dates": [
//                                                     {
//                                                         "date": "2018-05-03"
//                                                     }
//                                                 ],
//                                                 "house": {
//                                                     "chamberCode": "seanad",
//                                                     "chamberType": "house",
//                                                     "houseCode": "seanad",
//                                                     "houseNo": "25",
//                                                     "showAs": "25th Seanad",
//                                                     "uri": "https://data.oireachtas.ie/ie/oireachtas/house/seanad/25"
//                                                 },
//                                                 "progressStage": 2,
//                                                 "showAs": "Second Stage",
//                                                 "stageCompleted": true,
//                                                 "stageOutcome": null,
//                                                 "stageURI": "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
//                                                 "uri": "https://data.oireachtas.ie/ie/oireachtas/bill/2018/47/stage/seanad/2"
//                                             }
//                                         },
//                                         {
//                                             "event": {
//                                                 "chamber": {
//                                                     "chamberCode": "seanad",
//                                                     "showAs": "Seanad Éireann",
//                                                     "uri": "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad"
//                                                 },
//                                                 "dates": [
//                                                     {
//                                                         "date": "2019-05-08"
//                                                     }
//                                                 ],
//                                                 "house": {
//                                                     "chamberCode": "seanad",
//                                                     "chamberType": "house",
//                                                     "houseCode": "seanad",
//                                                     "houseNo": "25",
//                                                     "showAs": "25th Seanad",
//                                                     "uri": "https://data.oireachtas.ie/ie/oireachtas/house/seanad/25"
//                                                 },
//                                                 "progressStage": 3,
//                                                 "showAs": "Committee Stage",
//                                                 "stageCompleted": false,
//                                                 "stageOutcome": "Current",
//                                                 "stageURI": "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/3",
//                                                 "uri": "https://data.oireachtas.ie/ie/oireachtas/bill/2018/47/stage/seanad/3"
//                                             }
//                                         }
//                                     ],
//                                         "status": "Current",
//                                             "statusURI": "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/published",
//                                                 "uri": "https://data.oireachtas.ie/ie/oireachtas/bill/2018/47",
//                                                     "versions": [
//                                                         {
//                                                             "version": {
//                                                                 "date": "2018-05-03",
//                                                                 "docType": "bill",
//                                                                 "formats": {
//                                                                     "pdf": {
//                                                                         "uri": "https://data.oireachtas.ie/ie/oireachtas/bill/2018/47/eng/initiated/b4718s.pdf"
//                                                                     },
//                                                                     "xml": null
//                                                                 },
//                                                                 "lang": "eng",
//                                                                 "showAs": "As Initiated",
//                                                                 "uri": "https://data.oireachtas.ie/ie/oireachtas/bill/2018/47/eng/initiated"
//                                                             }
//                                                         }
//                                                     ]
//     },
//     "billSort": {
//         "actNoSort": null,
//             "actShortTitleEnSort": null,
//                 "actShortTitleGaSort": null,
//                     "actYearSort": null,
//                         "billNoSort": 47,
//                             "billShortTitleEnSort": "free-education-prohibition-of-fees-and-charges-bill-2018",
//                                 "billShortTitleGaSort": "an-bille-um-shaoroideachas-toirmeasc-ar-thailli-agus-ar-mhuirir-2018",
//                                     "billYearSort": 2018
//     },
//     "contextDate": "2019-05-08"
// }
