import { CaaS } from './caas';
import { FirstSpiritManagedPage } from './first-spirit-managed-page';
import { Injectable } from "@angular/core";
import { Config } from "@spartacus/core";

@Injectable({
  providedIn: 'root',
  useExisting: Config,
})
export abstract class FsSpartacusBridgeConfig {
  bridge?: {
    [baseSite: string]: {
      caas?: CaaS;
      firstSpiritManagedPages?: FirstSpiritManagedPage[];
      fallbackLanguage?: string;
    };
  }
}

// Typescript Interface Augmentation
declare module '@spartacus/core' {
  // tslint:disable-next-line
  interface Config extends FsSpartacusBridgeConfig {}
}
