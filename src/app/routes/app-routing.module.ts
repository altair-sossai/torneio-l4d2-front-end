import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../layouts/admin/admin.component';
import { AuthComponent } from '../layouts/auth/auth.component';
import { PublicComponent } from '../layouts/public/public.component';
import { AuthGuard } from '../modules/auth/guards/auth-guard';
import { CapitaoGuard } from '../modules/auth/guards/capitao-guard';
import { LoginComponent } from '../modules/auth/login/components/login/login.component';
import { CapitaesComponent } from '../modules/cadastros/capitaes/components/capitaes/capitaes.component';
import { ConfrontosComponent } from '../modules/cadastros/confrontos/components/confrontos/confrontos.component';
import { JogadoresComponent } from '../modules/cadastros/jogadores/components/jogadores/jogadores.component';
import { PlayoffsComponent } from '../modules/cadastros/playoffs/components/playoffs/playoffs.component';
import { TimesComponent } from '../modules/cadastros/times/components/times/times.component';
import { LoginCapitaoComponent } from '../modules/capitaes/components/login-capitao/login-capitao.component';
import { ProximoConfrontoComponent } from '../modules/capitaes/components/proximo-confronto/proximo-confronto.component';
import { HomeComponent } from '../modules/institucional/components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            { path: '', component: HomeComponent }
        ]
    },
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'auth', component: LoginComponent }
        ]
    },
    {
        path: 'cadastros',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'jogadores', component: JogadoresComponent },
            { path: 'times', component: TimesComponent },
            { path: 'confrontos', component: ConfrontosComponent, data: { podeEditar: true } },
            { path: 'playoffs', component: PlayoffsComponent, data: { podeEditar: true } },
            { path: 'capitaes', component: CapitaesComponent },
        ]
    },
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'capitao/login', component: LoginCapitaoComponent }
        ]
    },
    {
        path: '',
        component: PublicComponent,
        canActivate: [CapitaoGuard],
        children: [
            { path: 'proximo-confronto', component: ProximoConfrontoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
