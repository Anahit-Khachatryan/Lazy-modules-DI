import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

// provideRouter(routes, withPreloading(PreloadAllModules)), // օգտագործում ենք provideRouter-ը և withPreloading-ը
//ayjm forRoot-i teghy ka  provideRouter u hima preloadstrategy-n ayspes enk talis`withPreloading mijocov,   provideRouter(routes, withPreloading(PreloadAllModules)). skzbic preloadingna ashxatum nor guardy

