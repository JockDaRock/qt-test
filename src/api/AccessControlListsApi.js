/*
 * Meraki Dashboard API
 * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date: 02 September, 2020 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https://meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https://www.meraki.com) 
 *
 * OpenAPI spec version: 1.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UpdateNetworkSwitchAccessControlLists'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UpdateNetworkSwitchAccessControlLists'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.AccessControlListsApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.UpdateNetworkSwitchAccessControlLists);
  }
}(this, function(ApiClient, UpdateNetworkSwitchAccessControlLists) {
  'use strict';

  /**
   * AccessControlLists service.
   * @module api/AccessControlListsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new AccessControlListsApi. 
   * @alias module:api/AccessControlListsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
     * @param {String} networkId 
     * @param {module:api/AccessControlListsApi~getNetworkSwitchAccessControlListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkSwitchAccessControlLists = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkSwitchAccessControlLists");
      }


      var pathParams = {
        'networkId': networkId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/accessControlLists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
     * @param {String} networkId 
     * @param {module:model/UpdateNetworkSwitchAccessControlLists} updateNetworkSwitchAccessControlLists 
     * @param {module:api/AccessControlListsApi~updateNetworkSwitchAccessControlListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkSwitchAccessControlLists = function(networkId, updateNetworkSwitchAccessControlLists, callback) {
      var postBody = updateNetworkSwitchAccessControlLists;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkSwitchAccessControlLists");
      }

      // verify the required parameter 'updateNetworkSwitchAccessControlLists' is set
      if (updateNetworkSwitchAccessControlLists === undefined || updateNetworkSwitchAccessControlLists === null) {
        throw new Error("Missing the required parameter 'updateNetworkSwitchAccessControlLists' when calling updateNetworkSwitchAccessControlLists");
      }


      var pathParams = {
        'networkId': networkId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/accessControlLists', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
