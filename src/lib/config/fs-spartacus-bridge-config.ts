import { CaaS } from './caas';
import { FirstSpiritManagedPage } from './first-spirit-managed-page';
import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';

/**
 * This data class extends the configuration used by SAP Commerce.
 * In addition, it contains the configuration needed by the FirstSpirit Spartacus bridge.
 */
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
  };
}

// Typescript Interface Augmentation
declare module '@spartacus/core' {
  /**
   * This interface includes the config from SAP Spartacus which is extended by the FsSpartacuaBridgeConfig.
   *
   * @interface Config
   */
  // tslint:disable-next-line
  interface Config extends FsSpartacusBridgeConfig {}
}
