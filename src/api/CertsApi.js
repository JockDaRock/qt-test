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
* Certs service.
* @module api/CertsApi
* @version 1.0.0
*/
export default class CertsApi {

    /**
    * Constructs a new CertsApi. 
    * @alias module:api/CertsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNetworkSmDeviceCerts operation.
     * @callback module:api/CertsApi~getNetworkSmDeviceCertsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the certs on a device
     * List the certs on a device
     * @param {module:api/CertsApi~getNetworkSmDeviceCertsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkSmDeviceCerts(networkId, deviceId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'deviceId': deviceId
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
        '/networks/{networkId}/sm/devices/{deviceId}/certs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
