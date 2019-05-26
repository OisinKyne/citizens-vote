// Object to represent a Sponsor of a bill
export default interface Sponsor {
  sponsor: {
    as: {
      showAs: string;
      uri: string;
    };
    by: {
      showAs: string;
      uri: string;
    };
    isPrimary: boolean;
  };
}
