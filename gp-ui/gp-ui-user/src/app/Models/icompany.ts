export class ICompany {
  constructor(
    // public companyId:string,
    public companyName:string,
    public companyImage:string,
    public companyPhoneNumber:number,
    public companylocation:string,
    public usersInCompany:[],
  ) {}
}
