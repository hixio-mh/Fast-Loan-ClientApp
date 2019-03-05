import { TestBed } from '@angular/core/testing';
import { LoanService } from './loan.service';
describe('LoanService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LoanService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=loan.service.spec.js.map