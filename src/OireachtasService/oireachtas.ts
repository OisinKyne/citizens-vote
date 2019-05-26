export default class Oireachtas {
  constructor() {}

  /**
   * Get the current bills in the Dail.
   *
   * url: The formulated API request for api.oireachtas.ie
   * callback: The function to be supplied the response.
   */
  getDailBills = async function(url: string, callback: Function) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) callback(req.responseText);
      else if (req.readyState == 4 && req.status == 500)
        throw new Error("Error 500");
      else if (req.readyState == 4 && req.status == 400)
        throw new Error("Error 400");
    };

    req.open("GET", url, true);
    req.send(null);
  };

  public prepareDailBillsRequestUrl(
    bill_status = "Current",
    date_start = "2019-05-01",
    date_end = "2019-05-08",
    result_limit = "50",
    chamber_id = "",
    language = "en"
  ) {
    return `https://api.oireachtas.ie/v1/legislation?bill_status=${bill_status}&bill_source=Government,Private%20Member&date_start=${date_start}&date_end=${date_end}&limit=${result_limit}&chamber_id=${chamber_id}&lang=${language}`;
  }
}
