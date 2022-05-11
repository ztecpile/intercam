import {NgModule, Optional, SkipSelf} from '@angular/core';
import {AuthorizatedGuard} from "./guards/authorizated.guard";
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [  ],
  imports: [],
  providers: [
    TokenService,
    AuthorizatedGuard,
  ],
  bootstrap: []
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
