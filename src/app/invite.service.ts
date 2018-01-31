import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employee } from './employee';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

 
@Injectable()
export class InviteService {

  private employeesUrl = '../assets/employees.json';

  /* Get employees whose name conatins search term */
  inviteEmployees (term: string): Observable<employee[]>{
    if(!term.trim()){
      //if not a search term, return empty hero array

      return of ([]);
    }
    return this.http.get<employee[]>('../assets/employees.json').pipe(
      tap(_ => console.log(`found Employees matching "${term}"`)),
      catchError(this.handleError<employee[]>('searchEmployees', []))
    );
}

 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */


 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  constructor(private http: HttpClient) { }

}
