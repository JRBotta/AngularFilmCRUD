let count = 1;
export class Actor {
  id: number;
  fname: string;
  lname: string;

  constructor(fname: string, lname: string) {
    this.id = count++;
    this.fname = fname;
    this.lname = lname;
  }
}
