import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { EmptyComponent } from './layouts/empty/empty.component';
import { AuthGuard } from './modules/auth/guards/auth-guard';
import { LoginComponent } from './modules/auth/login/components/login/login.component';
import { ConfrontoCampanhaComponent } from './modules/cadastros/confrontos/components/confronto-campanha/confronto-campanha.component';
import { ConfrontoCorpoComponent } from './modules/cadastros/confrontos/components/confronto-corpo/confronto-corpo.component';
import { ConfrontoEditComponent } from './modules/cadastros/confrontos/components/confronto-edit/confronto-edit.component';
import { ConfrontoHeaderComponent } from './modules/cadastros/confrontos/components/confronto-header/confronto-header.component';
import { ConfrontoResumoComponent } from './modules/cadastros/confrontos/components/confronto-resumo/confronto-resumo.component';
import { ConfrontoTimeComponent } from './modules/cadastros/confrontos/components/confronto-time/confronto-time.component';
import { ConfrontoTimesComponent } from './modules/cadastros/confrontos/components/confronto-times/confronto-times.component';
import { ConfrontoComponent } from './modules/cadastros/confrontos/components/confronto/confronto.component';
import { ConfrontosComponent } from './modules/cadastros/confrontos/components/confrontos/confrontos.component';
import { CorStatusConfrontoPipe } from './modules/cadastros/confrontos/pipes/cor-status-confronto.pipe';
import { StatusConfrontoPipe } from './modules/cadastros/confrontos/pipes/status-confronto.pipe';
import { JogadorComponent } from './modules/cadastros/jogadores/components/jogador/jogador.component';
import { JogadoresComponent } from './modules/cadastros/jogadores/components/jogadores/jogadores.component';
import { TimeEditComponent } from './modules/cadastros/times/components/time-edit/time-edit.component';
import { TimeComponent } from './modules/cadastros/times/components/time/time.component';
import { TimesComponent } from './modules/cadastros/times/components/times/times.component';
import { VincularJogadorComponent } from './modules/cadastros/times/components/vincular-jogador/vincular-jogador.component';
import { InstitucionalComponent } from './modules/institucional/components/institucional/institucional.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppHttpInterceptor } from './shared/http-interceptor';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    EmptyComponent,
    JogadoresComponent,
    JogadorComponent,
    TimesComponent,
    TimeComponent,
    TimeEditComponent,
    VincularJogadorComponent,
    ConfrontoComponent,
    ConfrontosComponent,
    ConfrontoCampanhaComponent,
    ConfrontoHeaderComponent,
    ConfrontoCorpoComponent,
    ConfrontoTimesComponent,
    ConfrontoResumoComponent,
    StatusConfrontoPipe,
    CorStatusConfrontoPipe,
    ConfrontoTimeComponent,
    InstitucionalComponent,
    LoginComponent,
    ConfrontoEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzDividerModule,
    NzToolTipModule,
    NzSpinModule,
    NzAlertModule,
    NzMessageModule,
    NzModalModule,
    NzInputModule,
    NzFormModule,
    NzAlertModule,
    NzPopoverModule,
    NzTabsModule,
    NzProgressModule,
    NzTagModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzSelectModule,
    NzSkeletonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true, },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
