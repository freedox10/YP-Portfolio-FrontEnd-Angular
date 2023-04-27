import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { WORKS } from 'src/assets/files/mock-works';
import { WorkModel } from 'src/app/models/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

  // works: WorkModel[] = WORKS;
  private worksUrl = 'api/works'

  constructor(private http: HttpClient) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.status}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

/**
 * Lucas Salvatori
 *  */
  getWorks(): Observable<WorkModel[]>{
    return this.http.get<WorkModel[]>(this.worksUrl).pipe(
      catchError(
        this.handleError<WorkModel[]>('getWorks', [])
      )
    );
  }
}
