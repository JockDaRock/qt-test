/**
 * Meraki Dashboard API
 * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date: 05 August, 2020 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https://meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https://www.meraki.com) 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import Body130 from '../model/Body130';

/**
* Priorities service.
* @module api/PrioritiesApi
* @version 1.0.0
*/
export default class PrioritiesApi {

    /**
    * Constructs a new PrioritiesApi. 
    * @alias module:api/PrioritiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getOrganizationBrandingPoliciesPriorities operation.
     * @callback module:api/PrioritiesApi~getOrganizationBrandingPoliciesPrioritiesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
     * Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
     * @param {module:api/PrioritiesApi~getOrganizationBrandingPoliciesPrioritiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationBrandingPoliciesPriorities(organizationId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/brandingPolicies/priorities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrganizationBrandingPoliciesPriorities operation.
     * @callback module:api/PrioritiesApi~updateOrganizationBrandingPoliciesPrioritiesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the priority ordering of an organization&#x27;s branding policies.
     * Update the priority ordering of an organization&#x27;s branding policies.
     * @param {module:api/PrioritiesApi~updateOrganizationBrandingPoliciesPrioritiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateOrganizationBrandingPoliciesPriorities(body, organizationId, callback) {
      let postBody = body;

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/brandingPolicies/priorities', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
