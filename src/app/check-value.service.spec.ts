import { TestBed } from "@angular/core/testing";
import { CheckValueService } from "./check-value.service";
describe('check value service', ()=> {
    let service: CheckValueService;
    
    beforeEach( () =>{
       // service = new SimpleService(mockCheckValueService as CheckValueService);
       TestBed.configureTestingModule({
           providers: [CheckValueService]
       });
       service = TestBed.inject(CheckValueService);
    });
it('must create member class', () => {
    expect(service).toBeTruthy();
});
it('must check value', () => {
    const value = service.check();
    expect(value).toBeTruthy();
});
});