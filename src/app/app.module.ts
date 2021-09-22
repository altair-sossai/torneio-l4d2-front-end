import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { ConfrontoComponent } from './modules/cadastros/confrontos/components/confronto/confronto.component';
import { ConfrontosComponent } from './modules/cadastros/confrontos/components/confrontos/confrontos.component';
import { JogadorComponent } from './modules/cadastros/jogadores/components/jogador/jogador.component';
import { JogadoresComponent } from './modules/cadastros/jogadores/components/jogadores/jogadores.component';
import { TimeEditComponent } from './modules/cadastros/times/components/time-edit/time-edit.component';
import { TimeComponent } from './modules/cadastros/times/components/time/time.component';
import { TimesComponent } from './modules/cadastros/times/components/times/times.component';
import { VincularJogadorComponent } from './modules/cadastros/times/components/vincular-jogador/vincular-jogador.component';
import { AppRoutingModule } from './routes/app-routing.module';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    JogadoresComponent,
    JogadorComponent,
    TimesComponent,
    TimeComponent,
    TimeEditComponent,
    VincularJogadorComponent,
    ConfrontoComponent,
    ConfrontosComponent
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
    NzPopoverModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
