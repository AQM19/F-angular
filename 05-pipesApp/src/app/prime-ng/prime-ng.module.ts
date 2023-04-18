import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    MenuModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
