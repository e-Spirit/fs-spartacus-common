import { NgModule } from '@angular/core';
import { FsComponentConverter } from './converter/fs-component-converter';

/**
 * This module initializes the provider for the {@link FsComponentConverter}.
 * It is used to allow usage of the converter within an application.
 */
@NgModule({
  declarations: [],
  imports: [],
  providers: [{ provide: FsComponentConverter, useValue: {}, multi: true }],
  entryComponents: [],
  exports: [],
})
export class FsSpartacusCommonModule {}
