// type GUID = string & { isGuid: true};
// function guid(guid: string) : GUID {
//     return  guid as GUID; // maybe add validation that the parameter is an actual guid ?
// }
// export class Company {
//     companyId?: string;
//     companyName= "";
//     companyImage= "";
//     companyPhoneNumber?: number;
//     companylocation= "";
//     usersInCompany =[];
//   }


export class Company{
  constructor(
    public companyId:string,
    public companyName:string,
    public companyImage:string,
    public companyPhoneNumber:number,
    public companylocation:string,
    public usersInCompany:[],
  ) {}
}
  