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
    define(['ApiClient', 'model/CreateNetworkFloorPlan', 'model/UpdateNetworkFloorPlan'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateNetworkFloorPlan'), require('../model/UpdateNetworkFloorPlan'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.FloorPlansApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.CreateNetworkFloorPlan, root.MerakiDashboardApi.UpdateNetworkFloorPlan);
  }
}(this, function(ApiClient, CreateNetworkFloorPlan, UpdateNetworkFloorPlan) {
  'use strict';

  /**
   * FloorPlans service.
   * @module api/FloorPlansApi
   * @version 1.1.0
   */

  /**
   * Constructs a new FloorPlansApi. 
   * @alias module:api/FloorPlansApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createNetworkFloorPlan operation.
     * @callback module:api/FloorPlansApi~createNetworkFloorPlanCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a floor plan
     * Upload a floor plan
     * @param {String} networkId 
     * @param {module:model/CreateNetworkFloorPlan} createNetworkFloorPlan 
     * @param {module:api/FloorPlansApi~createNetworkFloorPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createNetworkFloorPlan = function(networkId, createNetworkFloorPlan, callback) {
      var postBody = createNetworkFloorPlan;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling createNetworkFloorPlan");
      }

      // verify the required parameter 'createNetworkFloorPlan' is set
      if (createNetworkFloorPlan === undefined || createNetworkFloorPlan === null) {
        throw new Error("Missing the required parameter 'createNetworkFloorPlan' when calling createNetworkFloorPlan");
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
        '/networks/{networkId}/floorPlans', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNetworkFloorPlan operation.
     * @callback module:api/FloorPlansApi~deleteNetworkFloorPlanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroy a floor plan
     * Destroy a floor plan
     * @param {String} networkId 
     * @param {String} floorPlanId 
     * @param {module:api/FloorPlansApi~deleteNetworkFloorPlanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNetworkFloorPlan = function(networkId, floorPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling deleteNetworkFloorPlan");
      }

      // verify the required parameter 'floorPlanId' is set
      if (floorPlanId === undefined || floorPlanId === null) {
        throw new Error("Missing the required parameter 'floorPlanId' when calling deleteNetworkFloorPlan");
      }


      var pathParams = {
        'networkId': networkId,
        'floorPlanId': floorPlanId
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
        '/networks/{networkId}/floorPlans/{floorPlanId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkFloorPlan operation.
     * @callback module:api/FloorPlansApi~getNetworkFloorPlanCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find a floor plan by ID
     * Find a floor plan by ID
     * @param {String} networkId 
     * @param {String} floorPlanId 
     * @param {module:api/FloorPlansApi~getNetworkFloorPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkFloorPlan = function(networkId, floorPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkFloorPlan");
      }

      // verify the required parameter 'floorPlanId' is set
      if (floorPlanId === undefined || floorPlanId === null) {
        throw new Error("Missing the required parameter 'floorPlanId' when calling getNetworkFloorPlan");
      }


      var pathParams = {
        'networkId': networkId,
        'floorPlanId': floorPlanId
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
        '/networks/{networkId}/floorPlans/{floorPlanId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkFloorPlans operation.
     * @callback module:api/FloorPlansApi~getNetworkFloorPlansCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the floor plans that belong to your network
     * List the floor plans that belong to your network
     * @param {String} networkId 
     * @param {module:api/FloorPlansApi~getNetworkFloorPlansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkFloorPlans = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkFloorPlans");
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
        '/networks/{networkId}/floorPlans', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkFloorPlan operation.
     * @callback module:api/FloorPlansApi~updateNetworkFloorPlanCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a floor plan's geolocation and other meta data
     * Update a floor plan's geolocation and other meta data
     * @param {String} networkId 
     * @param {String} floorPlanId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkFloorPlan} opts.updateNetworkFloorPlan 
     * @param {module:api/FloorPlansApi~updateNetworkFloorPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkFloorPlan = function(networkId, floorPlanId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkFloorPlan'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkFloorPlan");
      }

      // verify the required parameter 'floorPlanId' is set
      if (floorPlanId === undefined || floorPlanId === null) {
        throw new Error("Missing the required parameter 'floorPlanId' when calling updateNetworkFloorPlan");
      }


      var pathParams = {
        'networkId': networkId,
        'floorPlanId': floorPlanId
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
        '/networks/{networkId}/floorPlans/{floorPlanId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
