import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { UsComponent } from './components/us/us.component';
import { Error404Component } from './components/error404/error404.component';


const routes: Routes = [
  { path: '', component: ShopComponent  },
  { path: 'us', component: UsComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: '**', component: Error404Component  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
