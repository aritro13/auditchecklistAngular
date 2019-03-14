import { Injectable } from '@angular/core';
import { HttpHeaders, HttpHandler, HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
@Injectable()
export class FormService {

  // headers = new HttpHeaders();

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders();
    // this.headers.set('Content-Type', 'application/json');
  }

  getFormData() {
    return this.http.get('/api/formdataset/getvalues').pipe(map(res => res));
  }

  sendFormData(dataset) {
    return this.http.post('/api/formdataset/updatevalues', dataset, this.options).pipe(map(res => res));
  }

}
