import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from '@core/interceptor/loader.interceptor';
import { TokenInterceptor } from '@core/interceptor/token-interceptor';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { LoginPageModule } from '@feature/login/login.module';
import { MenuComponent } from '@feature/menu/menu.component';

@NgModule({
	declarations: [AppComponent, MenuComponent],
	entryComponents: [],
	exports: [MenuComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		LoginPageModule,
		NgxMaskIonicModule.forRoot(),
	],

	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptor,
			multi: true,
		},
		{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
