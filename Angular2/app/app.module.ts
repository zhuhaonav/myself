import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_v1 } from './keyup.components(v1)';
import { KeyUpComponent_v2 } from './keyup.components(v2)';
import { KeyUpComponent_v3 } from './keyup.components(v3)';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,ClickMeComponent,KeyUpComponent_v1,KeyUpComponent_v2,KeyUpComponent_v3 ],
  bootstrap:    [ AppComponent,ClickMeComponent,KeyUpComponent_v1,KeyUpComponent_v2,KeyUpComponent_v3 ]
})
export class AppModule { }
