import { Injectable, InjectionToken } from '@angular/core';
import { CmsComponent, Converter } from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class FsComponentConverter {
  [fsType: string]: InjectionToken<Converter<CmsComponent, any>>;
}
