import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root', // կամ չնշել, եթե արդեն պրովայդեր եք սահմանել այլ տեղ
  })
export class CustomPreloadingStrategy extends PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (route.path === 'lazy-second') {
            console.log('123')
           return fn()
        } else {
            console.log('456')

            return of(null)
        }
        
    }
} // sa modulneri depkum er