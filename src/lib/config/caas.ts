/**
 * This class represents the information needed by the CaaS (Content as a Service) instance.
 *
 * @export
 */
export class CaaS {
  /**
   * The URL of the CaaS server, which will be provided by e-Spirit.
   */
  baseUrl: string;
  /**
   * The identifier of the CaaS project in form of a UUID.
   */
  project: string;
  /**
   * The API key for the CaaS tenant in form of a UUID.
   */
  apiKey: string;
  /**
   * The maintainable name of the tenant.
   */
  tenantId: string;
}
