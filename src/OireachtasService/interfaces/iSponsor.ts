// Object to represent a Sponsor of a bill
export default interface Sponsor {
  sponsor: {
    as: {
      showAs: string | null;
      uri: string | null;
    };
    by: {
      showAs: string;
      uri: string;
    };
    isPrimary: boolean;
  };
}
