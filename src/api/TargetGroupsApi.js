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
    define(['ApiClient', 'model/CreateNetworkSmTargetGroup', 'model/UpdateNetworkSmTargetGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateNetworkSmTargetGroup'), require('../model/UpdateNetworkSmTargetGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.TargetGroupsApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.CreateNetworkSmTargetGroup, root.MerakiDashboardApi.UpdateNetworkSmTargetGroup);
  }
}(this, function(ApiClient, CreateNetworkSmTargetGroup, UpdateNetworkSmTargetGroup) {
  'use strict';

  /**
   * TargetGroups service.
   * @module api/TargetGroupsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new TargetGroupsApi. 
   * @alias module:api/TargetGroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createNetworkSmTargetGroup operation.
     * @callback module:api/TargetGroupsApi~createNetworkSmTargetGroupCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a target group
     * Add a target group
     * @param {String} networkId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateNetworkSmTargetGroup} opts.createNetworkSmTargetGroup 
     * @param {module:api/TargetGroupsApi~createNetworkSmTargetGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createNetworkSmTargetGroup = function(networkId, opts, callback) {
      opts = opts || {};
      var postBody = opts['createNetworkSmTargetGroup'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling createNetworkSmTargetGroup");
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
        '/networks/{networkId}/sm/targetGroups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNetworkSmTargetGroup operation.
     * @callback module:api/TargetGroupsApi~deleteNetworkSmTargetGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a target group from a network
     * Delete a target group from a network
     * @param {String} networkId 
     * @param {String} targetGroupId 
     * @param {module:api/TargetGroupsApi~deleteNetworkSmTargetGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNetworkSmTargetGroup = function(networkId, targetGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling deleteNetworkSmTargetGroup");
      }

      // verify the required parameter 'targetGroupId' is set
      if (targetGroupId === undefined || targetGroupId === null) {
        throw new Error("Missing the required parameter 'targetGroupId' when calling deleteNetworkSmTargetGroup");
      }


      var pathParams = {
        'networkId': networkId,
        'targetGroupId': targetGroupId
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
        '/networks/{networkId}/sm/targetGroups/{targetGroupId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkSmTargetGroup operation.
     * @callback module:api/TargetGroupsApi~getNetworkSmTargetGroupCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a target group
     * Return a target group
     * @param {String} networkId 
     * @param {String} targetGroupId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.withDetails Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
     * @param {module:api/TargetGroupsApi~getNetworkSmTargetGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkSmTargetGroup = function(networkId, targetGroupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkSmTargetGroup");
      }

      // verify the required parameter 'targetGroupId' is set
      if (targetGroupId === undefined || targetGroupId === null) {
        throw new Error("Missing the required parameter 'targetGroupId' when calling getNetworkSmTargetGroup");
      }


      var pathParams = {
        'networkId': networkId,
        'targetGroupId': targetGroupId
      };
      var queryParams = {
        'withDetails': opts['withDetails'],
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
        '/networks/{networkId}/sm/targetGroups/{targetGroupId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkSmTargetGroups operation.
     * @callback module:api/TargetGroupsApi~getNetworkSmTargetGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the target groups in this network
     * List the target groups in this network
     * @param {String} networkId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.withDetails Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
     * @param {module:api/TargetGroupsApi~getNetworkSmTargetGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkSmTargetGroups = function(networkId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkSmTargetGroups");
      }


      var pathParams = {
        'networkId': networkId
      };
      var queryParams = {
        'withDetails': opts['withDetails'],
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
        '/networks/{networkId}/sm/targetGroups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkSmTargetGroup operation.
     * @callback module:api/TargetGroupsApi~updateNetworkSmTargetGroupCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a target group
     * Update a target group
     * @param {String} networkId 
     * @param {String} targetGroupId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkSmTargetGroup} opts.updateNetworkSmTargetGroup 
     * @param {module:api/TargetGroupsApi~updateNetworkSmTargetGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkSmTargetGroup = function(networkId, targetGroupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkSmTargetGroup'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkSmTargetGroup");
      }

      // verify the required parameter 'targetGroupId' is set
      if (targetGroupId === undefined || targetGroupId === null) {
        throw new Error("Missing the required parameter 'targetGroupId' when calling updateNetworkSmTargetGroup");
      }


      var pathParams = {
        'networkId': networkId,
        'targetGroupId': targetGroupId
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
        '/networks/{networkId}/sm/targetGroups/{targetGroupId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
