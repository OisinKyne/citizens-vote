// Stage the bill is at
export default interface Stage {
  event: {
    chamber: {
      chamberCode: string;
      showAs: string;
      uri: string;
    };
    dates: { date: string }[];
    house: {
      chamberCode: string;
      chamberType: string;
      houseCode: string;
      houseNo: string;
      showAs: string;
      uri: string;
    };
    progressStage: number;
    showAs: string;
    stageCompleted: boolean;
    stageOutcome: any;
    stageURI: string;
    uri: string;
  };
}
