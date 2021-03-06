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
    define(['ApiClient', 'model/CreateNetworkMerakiAuthUser', 'model/UpdateNetworkMerakiAuthUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateNetworkMerakiAuthUser'), require('../model/UpdateNetworkMerakiAuthUser'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.MerakiAuthUsersApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.CreateNetworkMerakiAuthUser, root.MerakiDashboardApi.UpdateNetworkMerakiAuthUser);
  }
}(this, function(ApiClient, CreateNetworkMerakiAuthUser, UpdateNetworkMerakiAuthUser) {
  'use strict';

  /**
   * MerakiAuthUsers service.
   * @module api/MerakiAuthUsersApi
   * @version 1.1.0
   */

  /**
   * Constructs a new MerakiAuthUsersApi. 
   * @alias module:api/MerakiAuthUsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createNetworkMerakiAuthUser operation.
     * @callback module:api/MerakiAuthUsersApi~createNetworkMerakiAuthUserCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user configured with Meraki Authentication for a network (currently supports 802.1X and Splash Guest users, and currently, organizations have a 50,000 user cap)
     * Create a user configured with Meraki Authentication for a network (currently supports 802.1X and Splash Guest users, and currently, organizations have a 50,000 user cap)
     * @param {String} networkId 
     * @param {module:model/CreateNetworkMerakiAuthUser} createNetworkMerakiAuthUser 
     * @param {module:api/MerakiAuthUsersApi~createNetworkMerakiAuthUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createNetworkMerakiAuthUser = function(networkId, createNetworkMerakiAuthUser, callback) {
      var postBody = createNetworkMerakiAuthUser;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling createNetworkMerakiAuthUser");
      }

      // verify the required parameter 'createNetworkMerakiAuthUser' is set
      if (createNetworkMerakiAuthUser === undefined || createNetworkMerakiAuthUser === null) {
        throw new Error("Missing the required parameter 'createNetworkMerakiAuthUser' when calling createNetworkMerakiAuthUser");
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
        '/networks/{networkId}/merakiAuthUsers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNetworkMerakiAuthUser operation.
     * @callback module:api/MerakiAuthUsersApi~deleteNetworkMerakiAuthUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)
     * Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)
     * @param {String} networkId 
     * @param {String} merakiAuthUserId 
     * @param {module:api/MerakiAuthUsersApi~deleteNetworkMerakiAuthUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNetworkMerakiAuthUser = function(networkId, merakiAuthUserId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling deleteNetworkMerakiAuthUser");
      }

      // verify the required parameter 'merakiAuthUserId' is set
      if (merakiAuthUserId === undefined || merakiAuthUserId === null) {
        throw new Error("Missing the required parameter 'merakiAuthUserId' when calling deleteNetworkMerakiAuthUser");
      }


      var pathParams = {
        'networkId': networkId,
        'merakiAuthUserId': merakiAuthUserId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkMerakiAuthUser operation.
     * @callback module:api/MerakiAuthUsersApi~getNetworkMerakiAuthUserCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the Meraki Auth splash or RADIUS user
     * Return the Meraki Auth splash or RADIUS user
     * @param {String} networkId 
     * @param {String} merakiAuthUserId 
     * @param {module:api/MerakiAuthUsersApi~getNetworkMerakiAuthUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkMerakiAuthUser = function(networkId, merakiAuthUserId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkMerakiAuthUser");
      }

      // verify the required parameter 'merakiAuthUserId' is set
      if (merakiAuthUserId === undefined || merakiAuthUserId === null) {
        throw new Error("Missing the required parameter 'merakiAuthUserId' when calling getNetworkMerakiAuthUser");
      }


      var pathParams = {
        'networkId': networkId,
        'merakiAuthUserId': merakiAuthUserId
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
        '/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkMerakiAuthUsers operation.
     * @callback module:api/MerakiAuthUsersApi~getNetworkMerakiAuthUsersCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the splash or RADIUS users configured under Meraki Authentication for a network
     * List the splash or RADIUS users configured under Meraki Authentication for a network
     * @param {String} networkId 
     * @param {module:api/MerakiAuthUsersApi~getNetworkMerakiAuthUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkMerakiAuthUsers = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkMerakiAuthUsers");
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
        '/networks/{networkId}/merakiAuthUsers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkMerakiAuthUser operation.
     * @callback module:api/MerakiAuthUsersApi~updateNetworkMerakiAuthUserCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)
     * Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)
     * @param {String} networkId 
     * @param {String} merakiAuthUserId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkMerakiAuthUser} opts.updateNetworkMerakiAuthUser 
     * @param {module:api/MerakiAuthUsersApi~updateNetworkMerakiAuthUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkMerakiAuthUser = function(networkId, merakiAuthUserId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkMerakiAuthUser'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkMerakiAuthUser");
      }

      // verify the required parameter 'merakiAuthUserId' is set
      if (merakiAuthUserId === undefined || merakiAuthUserId === null) {
        throw new Error("Missing the required parameter 'merakiAuthUserId' when calling updateNetworkMerakiAuthUser");
      }


      var pathParams = {
        'networkId': networkId,
        'merakiAuthUserId': merakiAuthUserId
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
        '/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
