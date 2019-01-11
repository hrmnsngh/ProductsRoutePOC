import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'home', component: WelcomeComponent },
            {path: 'welcome', redirectTo: 'home', pathMatch: 'full' },
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: PageNotFoundComponent}],
            {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
