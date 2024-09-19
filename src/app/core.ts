import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { authInterceptor } from "./auth.interceptor";
import { tokenInterceptor } from "./token.interceptor";
import { AuthService } from "./auth.service";
import { InjectionToken } from "@angular/core";
import { HelpsService } from "./helps.service";


export const TEST_TOKEN = new InjectionToken('test')

export function provideCore() {
    return [
        provideHttpClient(withInterceptorsFromDi()),
        // AuthService,
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
            useClass: HelpsService
        }
    ]
  
}



// TestService darnum e containeri meji map-i key na instance
const container = 
{
    [HTTP_INTERCEPTORS.toString()]: [authInterceptor, tokenInterceptor],
    'AuthService': new AuthService()
}