import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContactComponent } from "./modules/contact/contact.component";
import { HeaderComponent } from "./shared/header/header.component";
import { MainComponent } from "./modules/main/main.component";
import { AboutComponent } from "./modules/about/about.component";
import { NoPageFoundComponent } from "./shared/no-page-found/no-page-found.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: '***',
        component: NoPageFoundComponent
    },
    {
        path: 'list',
        loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};