import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';

export const router :Routes = [
    {path:'welcome',component:WelcomeComponent}
]

export const routes:ModuleWithProviders = RouterModule.forRoot(router,{enableTracing:true});