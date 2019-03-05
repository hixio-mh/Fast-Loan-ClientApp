import { LoanInfo } from '../loan-info.model';
import { PersonalInfo } from '../personal-info.model';
import { GranterInfo } from '../granter-info.model';

export class ApplyLoanViewModel {
    
    constructor(
        public loanInfo: LoanInfo,
        public personalInfo: PersonalInfo,
        public granterInfo: GranterInfo,
       
    )
    {}
}
