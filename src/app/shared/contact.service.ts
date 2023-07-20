import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private mailApi = 'https://nithin-annam-portfolio.azurewebsites.net/email';
  private postDBApi = 'https://nithin-annam-portfolio.azurewebsites.net/';
  constructor(private http: HttpClient) {}

  PostMessage(input: any): Observable<string> {
    return this.http.post(this.mailApi, input, {responseType: 'json'})
      .pipe(
        switchMap(
          (response) => {
            if (response) {
              // post to another API after a successful first post
              return this.http.post(this.postDBApi, input, {responseType: 'json'});
            } else {
              throw new Error('First request was not successful.');
            }
          }
        ),
        map((secondResponse) => {
          if (secondResponse) {
            // Return a success message for a successful second request
            return 'Thank you for reaching out! I will get back to you as soon as possible.';
          } else {
            throw new Error('Second request was not successful.');
          }
        }),
        catchError((error: any) => {
          // Return the error message
          return of(`Request failed: ${error.message}`);
        })
      );
  }
}
