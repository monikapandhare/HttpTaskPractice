import { Injectable } from '@angular/core';
import { Observable, filter, map, observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableServiceService {

  constructor() { }

  fetchSkills():Observable<string>{
     return of("javascript","Typescript","Angular","rxjs","ngjs")
      .pipe(
        map(skill =>(`I Love ${skill}`)
        )
        )
      
  }

  fetchAllData() : Observable<number>{
    return of(1,2,3,4,5,6,7,8)
      .pipe(
        tap(num =>console.log( `number before subscription ${num}`)
        ),
          filter((num) => num % 2 === 0)
        )
      
  }
}
