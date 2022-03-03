import { Injectable, InjectionToken } from '@angular/core';
import { CmsComponent, Converter } from '@spartacus/core';

/**
 * This class represents a converter for {@link https://github.com/SAP/spartacus/blob/develop/projects/core/src/model/cms.model.ts | CmsComponents}.
 * This is needed to translate data provided by FirstSpirit to data that can be used by Spartacus.
 */
@Injectable({
  providedIn: 'root',
})
export class FsComponentConverter {
  [fsType: string]: InjectionToken<Converter<CmsComponent, any>>;
}
