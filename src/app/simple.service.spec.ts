import { TestBed } from "@angular/core/testing";
import { CheckValueService } from "./check-value.service";
import { SimpleService } from "./simple.service"
// can disable  'xdescribe'  or run one 'fdecribe'
describe('simple service', ()=> {
    let service: SimpleService;
    const mockCheckValueService = {check: () => true};
    beforeEach( () =>{
       // service = new SimpleService(mockCheckValueService as CheckValueService);
       TestBed.configureTestingModule({
           providers: [SimpleService, {provide: CheckValueService, useValue: mockCheckValueService}]
       });
       service = TestBed.inject(SimpleService);
    });
    // xit insted it turn off test
    it('must create object of class', () => {
        
        expect(service).toBeTruthy();
    });
    // fit insted it run only one test
    it('must sum up two numbers', () => {
        const sum = service.sum(1, 2);
        expect(sum).toBe(3);
    });

    it('must return undefined', () => {
        const sum = service.sum(1);
        expect(sum).toBeUndefined();
    });
});