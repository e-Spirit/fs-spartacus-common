import { NgModule } from '@angular/core';
import { FsComponentConverter } from './converter/fs-component-converter';

@NgModule({
  declarations: [],
  imports: [],
  providers: [{ provide: FsComponentConverter, useValue: {}, multi: true }],
  entryComponents: [],
  exports: [],
})
export class FsSpartacusCommonModule {}
