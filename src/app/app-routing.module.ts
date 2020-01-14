import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { ItemsComponent } from './components/items/items.component';
import { ContactComponent } from './components/contact/contact.component';
import { UsComponent } from './components/us/us.component';


const routes: Routes = [
  { path: '', component: ShopComponent  },
  { path: 'us', component: UsComponent  },
  { path: 'contact', component: ContactComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
