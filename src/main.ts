import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent, appConfig)
// .then(appRef => console.log(98,appRef.injector.get(HelpsService)))
  .catch((err) => console.error(err));
  
  //bootstrapApplication sa veradardznum e ApplicationRef vor karank orinak urish tegh inject anenk
  // platformBrowserDynamic - modulneri hamar e hima vor standalone e da petk chi parzecvel e. sra jamanak sra het steghtsvum e platform Injectory
  //ete grum enk providedIn: 'platform' platformin ev platformov bootstrap eghats bolor injectornerin
  // platfrom core-ic jarangum e core dynamicy, dranic el browser dynamicy
  
  //DomSanitizer security-i harcy lutsum e
