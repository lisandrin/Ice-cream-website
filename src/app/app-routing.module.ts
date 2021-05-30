import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContactComponent } from "./modules/contact/contact.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./modules/main/main.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'shop',
        loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};