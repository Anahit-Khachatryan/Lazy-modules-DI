import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; //static syncron
import { lazyGuard } from './lazy.guard';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'lazy',
      loadComponent: () =>
        import('./lazy/lazy.component').then((m) => m.LazyComponent),          //dynamic import
     //   canLoad - voroshum enk module load lini te che,sa el voroshum e moduly load ani te che - componenti depkum canActivate, 
    //angular 18-um canMatch e sra poxaren ogtagortsvum - standalone-i depkum canMatch-ը նախընտրելի է, երբ ցանկանում եք վերահսկել, թե արդյոք պետք է route-ը բեռնվի՝ մինչև component-ը կամ module-ը բեռնվի։
    // canActivate-ը լավ է այն դեպքերի համար, երբ ցանկանում եք վերահսկել մուտքը արդեն բեռնված route-երի վրա։
       canActivate: [lazyGuard],
       

    },
    {
        path: 'lazy-second',
        loadComponent: () => import('./lazy-second/lazy-second.component').then(m => m.LazySecondComponent)
    }

    //preloadingStrategy - forRoot 2-rd parameter, by default onDemand e-NoPreloading, bayc karnk dnenk orinak PreloadAllModules
];

//ayjm forRoot-i teghy ka  provideRouter u hima preloadstrategy-n ayspes enk talis`withPreloading mijocov,   provideRouter(routes, withPreloading(PreloadAllModules)). skzbic preloadingna ashxatum nor guardy
