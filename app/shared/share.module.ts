import { NgModule, ModuleWithProviders,Optional, SkipSelf }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import {
  MomentTime
} from './pipes';

const PNF_PIPES = [
  MomentTime
]

@NgModule({
  declarations: [
    ...PNF_PIPES,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...PNF_PIPES
  ]
})
export class PnfModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: PnfModule,
      providers: [
      ],
    };
  }
}
