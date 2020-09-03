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
* SmDevicesForKey service.
* @module api/SmDevicesForKeyApi
* @version 1.0.0
*/
export default class SmDevicesForKeyApi {

    /**
    * Constructs a new SmDevicesForKeyApi. 
    * @alias module:api/SmDevicesForKeyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNetworkPiiSmDevicesForKey operation.
     * @callback module:api/SmDevicesForKeyApi~getNetworkPiiSmDevicesForKeyCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/smDevicesForKey &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {module:api/SmDevicesForKeyApi~getNetworkPiiSmDevicesForKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkPiiSmDevicesForKey(networkId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        'username': opts['username'],
        'email': opts['email'],
        'mac': opts['mac'],
        'serial': opts['serial'],
        'imei': opts['imei'],
        'bluetoothMac': opts['bluetoothMac']
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
        '/networks/{networkId}/pii/smDevicesForKey', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}