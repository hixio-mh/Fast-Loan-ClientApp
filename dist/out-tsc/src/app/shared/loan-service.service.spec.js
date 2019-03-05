import { TestBed } from '@angular/core/testing';
import { LoanServiceService } from './loan-service.service';
describe('LoanServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LoanServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=loan-service.service.spec.js.map