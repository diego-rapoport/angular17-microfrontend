import { loadRemoteModule } from '@angular-architects/native-federation'
import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      loadRemoteModule('login', './Component').then((m) => m.AppComponent),
  },
]
