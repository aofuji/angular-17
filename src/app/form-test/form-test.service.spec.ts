import { TestBed } from '@angular/core/testing';

import { FormTestService } from './form-test.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
describe('FormTestService', () => {
  let service: FormTestService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FormTestService],
    });
    service = TestBed.inject(FormTestService);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
  });

  describe('Service Test', () => {
    it('should returns object of form', (done) => {
      const data = {
        name: 'Andre',
        age: 10,
      };

      const response = {
        name: 'Andre',
        age: 10,
        id: 101,
      };

      // httpClientSpy.post.and.returnValue(of(response));
      service.create(data).subscribe((res: any) => {
        expect(response).toEqual(res);
        done();
      });
    });

    it('should returns list of appointment a 404', (done) => {
      const data = {
        name: 'Andre',
        age: 10,
      };
      // httpClientSpy.post.and.returnValue(of({}));
      service.create(data, 'https://jsonplaceholder.typcode.com').subscribe(
        (res) => {
        },
        (err) => {
          expect(err).toEqual(err);
          done()
        }
      );
    });
  });
});
