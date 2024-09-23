import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { authInterceptor } from "./auth.interceptor";
import { tokenInterceptor } from "./token.interceptor";
import { AuthService } from "./auth.service";
import { InjectionToken } from "@angular/core";
import { HelpsService, instance } from "./helps.service";
import { AnotherHelpsService } from "./another-helps.service";


export const TEST_TOKEN = new InjectionToken('test')

export function provideCore() {
    return [
        provideHttpClient(withInterceptorsFromDi()),
        // AuthService,
        HelpsService,
        {
            provide: HTTP_INTERCEPTORS, //sranov asum enk vorna DI tokeny(vory handisanum e containeri key)
            useFactory: authInterceptor,
            multi: true, //mi DI-tokeni tak linen mi kani intercepterner - HTTP_INTERCEPTORS tokenova imanum vor interceptera
        },
        {
            provide: HTTP_INTERCEPTORS,
            useFactory: tokenInterceptor,
            multi: true,
        },
        {
            provide: TEST_TOKEN,
            useClass: HelpsService,// karank nuyn service logikan 2 tarber tokeneri tak lini tarber instancener kunena, data share chen ani
        },
        {
            provide: TEST_TOKEN,
            useValue: instance, // orinak HelpsService mej kar data 5, miangamic ed grecink useValue-i tak
            //inch vor configuration unenank u da vorpes service provide anenk( chtanenk orinak object sarkenk service vor karoghanank inject anel ay ayspes anenk)
        },
        {
            provide: TEST_TOKEN,
            useExisting: HelpsService, // sa asum enk ogtagortsi exatsneric sa, klini nuyn instance-y
            //uzum enk HelpService functionalov 2 h
        },
        {
            provide: TEST_TOKEN,
            useFactory: (helpsService: HelpsService) => {
                console.log(11, helpsService)
                return {
                    data: helpsService.data
                }
            }, 
            deps: [HelpsService]
            // ete spasum e parameter depsov poxancum enk
        },
        {
            provide: HelpsService, //ameninch karank grenk baci enum-ic, kani vor typescripti buildic heto interface chka, hetevabar inky chi imana provide-um inch dni
            useClass: AnotherHelpsService // erb inch vor ban poxum enk, bayc vor yndhanur poxenk projecty kpchacnenk, grum enk espes, vor nra tak ashxati es nor servicey
            //sra poxaren karank grenk useExisting u nayev en verevu el grenk AnotherHelpsService
        },
        // {
        //     provide: HelpsService, //paymanov enk voroshum inch vor service provide lini te che
        //     userFactory: (helpsService: HelpsService) => {
        //         if(true) {
        //             return new AnotherHelpsService(helpsService)
        //         } else {
        //             return new AnotherHelpsService()
        //         }
        //     },
        //     deps: [HelpsService]
        // }
    ]
  
}


const test = new HelpsService()
// TestService darnum e containeri meji map-i key na instance
const container = 
{
    [HTTP_INTERCEPTORS.toString()]: [authInterceptor, tokenInterceptor],
    'HelpsService': test,
    [TEST_TOKEN.toString()]: test // useExistingi depkum

}