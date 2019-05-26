import BillSort from "./iBillSort";
import Bill from "./iBill";

// The parent object for a returned API response.
export default interface APIResponse {
  head: {
    counts: {
      billCount: number;
      resultCount: number;
    };
    dateRange: {
      start: string;
      end: string;
    };
    lang: string;
  };
  results: { bill: Bill; billSort: BillSort; contextDate: string }[];
}
