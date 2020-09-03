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
* Performance service.
* @module api/PerformanceApi
* @version 1.0.0
*/
export default class PerformanceApi {

    /**
    * Constructs a new PerformanceApi. 
    * @alias module:api/PerformanceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getDeviceAppliancePerformance operation.
     * @callback module:api/PerformanceApi~getDeviceAppliancePerformanceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the performance score for a single device. Only primary MX devices supported. If no data is available, a 204 error code is returned.
     * Return the performance score for a single device. Only primary MX devices supported. If no data is available, a 204 error code is returned.
     * @param {module:api/PerformanceApi~getDeviceAppliancePerformanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceAppliancePerformance(serial, callback) {
      let postBody = null;

      let pathParams = {
        'serial': serial
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
        '/devices/{serial}/appliance/performance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}