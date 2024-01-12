/**
 * This class represents the information needed by the CaaS (Content as a Service) instance.
 *
 * @export
 */
export class CaaS {
  /**
   * The URL of the CaaS server, which will be provided by Crownpeak Technology GmbH.
   */
  baseUrl: string;
  /**
   * The identifier of the CaaS project in form of a UUID.
   */
  project: string;
  /**
   * The API key for the release collection of the CaaS tenant in form of a UUID.
   */
  apiKey: string;
  /**
   * The API key for the preview collection of the CaaS tenant in form of a UUID.
   * If omitted, the value of apiKey is used.
   */
  apiKeyPreview?: string;
  /**
   * The maintainable name of the tenant.
   */
  tenantId: string;
}
