import APIResponse from "./interfaces/iAPIResponse";
// import defaultApiResponse from "./defaultApiResponse.json";

export default class Oireachtas {
  /**
   * Get the current bills in the Dail.
   *
   * url: The formulated API request for api.oireachtas.ie
   *
   * Returns a promise that resolves to the request body as text. Rejects if there is an error.
   */
  public async getDailBills(url: string): Promise<APIResponse> {
    return new Promise(function(resolve, reject) {
      var rp = require("request-promise-native");
      rp(url)
        .then((htmlString: string) => {
          resolve(JSON.parse(htmlString));
        })
        .catch((error: any) => {
          reject(error);
        });

      //No internet workaround.
      // resolve(defaultApiResponse);
    });
  }

  public prepareDailBillsRequestUrl(
    bill_status = "Current",
    date_start = "2019-05-01",
    date_end = "2019-06-08",
    result_limit = "50",
    chamber_id = "",
    language = "en"
  ) {
    return `https://api.oireachtas.ie/v1/legislation?bill_status=${bill_status}&bill_source=Government,Private%20Member&date_start=${date_start}&date_end=${date_end}&limit=${result_limit}&chamber_id=${chamber_id}&lang=${language}`;
  }
}
