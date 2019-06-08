// Object to map the Bill sorting details to types.
export default interface BillSort {
  actNoSort: number | null;
  actShortTitleEnSort: string | null;
  actShortTitleGaSort: string | null;
  actYearSort: number | null;
  billNoSort: number;
  billShortTitleEnSort: string;
  billShortTitleGaSort: string;
  billYearSort: number;
}
