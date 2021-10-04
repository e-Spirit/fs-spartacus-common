import { CaaS } from './caas';
import { FirstSpiritManagedPage } from './first-spirit-managed-page';

export class FsSpartacusBridgeConfig {
  caas: CaaS;
  firstSpiritManagedPages: FirstSpiritManagedPage[];
  fallbackLanguage?: string;
}
