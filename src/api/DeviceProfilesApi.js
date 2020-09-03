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
* DeviceProfiles service.
* @module api/DeviceProfilesApi
* @version 1.0.0
*/
export default class DeviceProfilesApi {

    /**
    * Constructs a new DeviceProfilesApi. 
    * @alias module:api/DeviceProfilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNetworkSmDeviceDeviceProfiles operation.
     * @callback module:api/DeviceProfilesApi~getNetworkSmDeviceDeviceProfilesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the profiles associated with a device
     * Get the profiles associated with a device
     * @param {module:api/DeviceProfilesApi~getNetworkSmDeviceDeviceProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkSmDeviceDeviceProfiles(networkId, deviceId, callback) {
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
        '/networks/{networkId}/sm/devices/{deviceId}/deviceProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkSmUserDeviceProfiles operation.
     * @callback module:api/DeviceProfilesApi~getNetworkSmUserDeviceProfilesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the profiles associated with a user
     * Get the profiles associated with a user
     * @param {module:api/DeviceProfilesApi~getNetworkSmUserDeviceProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkSmUserDeviceProfiles(networkId, userId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'userId': userId
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
        '/networks/{networkId}/sm/users/{userId}/deviceProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
