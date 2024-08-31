import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { uiRoutes } from './ui.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(uiRoutes),
    SharedModule
],
  declarations: [HomeComponent],
})
export class UiModule {}
