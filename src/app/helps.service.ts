import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) //injectable decorator spasum e config vory karank tank karank che, estegh karank voroshenk vortegha provide arats
//providedIn: 'root' sa vonc e arvats typescript-ov type A = 'any' | 'platform' | 'root
//any amen meki mot nor instance ksteghti
//platform injectori depkum ete mi kani hat project unenank 2-i hamar el nuyn instance ksteghtsi
export class HelpsService {

  constructor() {
    console.log('1')
   }
}

// null Injector
// module Injector // sa rootn e app module-i injector
// platformBrowser
//lazy modulei hamar steghstum e child injector
// server-um ashxati, browserum, ev ayln
