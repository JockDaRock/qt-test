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

/**
* ConfigurationChanges service.
* @module api/ConfigurationChangesApi
* @version 1.0.0
*/
export default class ConfigurationChangesApi {

    /**
    * Constructs a new ConfigurationChangesApi. 
    * @alias module:api/ConfigurationChangesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getOrganizationConfigurationChanges operation.
     * @callback module:api/ConfigurationChangesApi~getOrganizationConfigurationChangesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View the Change Log for your organization
     * View the Change Log for your organization
     * @param {Object} opts Optional parameters
     * @param {module:api/ConfigurationChangesApi~getOrganizationConfigurationChangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationConfigurationChanges(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'perPage': opts['perPage'],
        'startingAfter': opts['startingAfter'],
        'endingBefore': opts['endingBefore'],
        'networkId': opts['networkId'],
        'adminId': opts['adminId']
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
        '/organizations/{organizationId}/configurationChanges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}