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
import Body71 from '../model/Body71';

/**
* BypassActivationLockAttempts service.
* @module api/BypassActivationLockAttemptsApi
* @version 1.0.0
*/
export default class BypassActivationLockAttemptsApi {

    /**
    * Constructs a new BypassActivationLockAttemptsApi. 
    * @alias module:api/BypassActivationLockAttemptsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createNetworkSmBypassActivationLockAttempt operation.
     * @callback module:api/BypassActivationLockAttemptsApi~createNetworkSmBypassActivationLockAttemptCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bypass activation lock attempt
     * Bypass activation lock attempt
     * @param {module:api/BypassActivationLockAttemptsApi~createNetworkSmBypassActivationLockAttemptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createNetworkSmBypassActivationLockAttempt(body, networkId, callback) {
      let postBody = body;

      let pathParams = {
        'networkId': networkId
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
        '/networks/{networkId}/sm/bypassActivationLockAttempts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkSmBypassActivationLockAttempt operation.
     * @callback module:api/BypassActivationLockAttemptsApi~getNetworkSmBypassActivationLockAttemptCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bypass activation lock attempt status
     * Bypass activation lock attempt status
     * @param {module:api/BypassActivationLockAttemptsApi~getNetworkSmBypassActivationLockAttemptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkSmBypassActivationLockAttempt(networkId, attemptId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'attemptId': attemptId
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
        '/networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
