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
import Body77 from '../model/Body77';

/**
* AccessControlLists service.
* @module api/AccessControlListsApi
* @version 1.0.0
*/
export default class AccessControlListsApi {

    /**
    * Constructs a new AccessControlListsApi. 
    * @alias module:api/AccessControlListsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNetworkSwitchAccessControlLists operation.
     * @callback module:api/AccessControlListsApi~getNetworkSwitchAccessControlListsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the access control lists for a MS network
     * Return the access control lists for a MS network
     * @param {module:api/AccessControlListsApi~getNetworkSwitchAccessControlListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkSwitchAccessControlLists(networkId, callback) {
      let postBody = null;

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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/accessControlLists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNetworkSwitchAccessControlLists operation.
     * @callback module:api/AccessControlListsApi~updateNetworkSwitchAccessControlListsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the access control lists for a MS network
     * Update the access control lists for a MS network
     * @param {module:api/AccessControlListsApi~updateNetworkSwitchAccessControlListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkSwitchAccessControlLists(body, networkId, callback) {
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
        '/networks/{networkId}/switch/accessControlLists', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}