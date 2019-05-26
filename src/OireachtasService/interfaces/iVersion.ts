export default interface Version {
  version: {
    date: string;
    docType: string;
    formats: {
      pdf: {
        uri: string;
      };
      xml: any;
    };
    lang: string;
    showAs: string;
    uri: string;
  };
}
