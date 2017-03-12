import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { Test } from '../shared/TestClass';

if (process.env.ENV === 'production') {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

const t = new Test(3, 4);
console.log(t.product());