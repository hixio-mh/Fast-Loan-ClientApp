export class GranterInfo {
    constructor(
        public FirstName: string,
        public LastName: string,
        public FathersName: string,
        public MothersName: string,
        public PresentAddress:string,
        public PermanentAddress:string,
        public City:string,
        public State:string,
        public ZipCode:string,
        public Country:string,
        public Nationality:string,
        public Occupation:string,
        public DateOfBirth:Date,
        public Gender:string,
        public Religion:string,
        public Relation:string,
        public MobileNo:string,
        public Email: string,
        public VerificationIdType: string,
        public VerificationIdNo: string,
    )
    {}
}
