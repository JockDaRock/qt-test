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
    define(['ApiClient', 'model/UpdateNetworkTrafficAnalysis'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UpdateNetworkTrafficAnalysis'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.TrafficAnalysisApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.UpdateNetworkTrafficAnalysis);
  }
}(this, function(ApiClient, UpdateNetworkTrafficAnalysis) {
  'use strict';

  /**
   * TrafficAnalysis service.
   * @module api/TrafficAnalysisApi
   * @version 1.1.0
   */

  /**
   * Constructs a new TrafficAnalysisApi. 
   * @alias module:api/TrafficAnalysisApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getNetworkTrafficAnalysis operation.
     * @callback module:api/TrafficAnalysisApi~getNetworkTrafficAnalysisCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the traffic analysis settings for a network
     * Return the traffic analysis settings for a network
     * @param {String} networkId 
     * @param {module:api/TrafficAnalysisApi~getNetworkTrafficAnalysisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkTrafficAnalysis = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkTrafficAnalysis");
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
        '/networks/{networkId}/trafficAnalysis', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkTrafficAnalysis operation.
     * @callback module:api/TrafficAnalysisApi~updateNetworkTrafficAnalysisCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the traffic analysis settings for a network
     * Update the traffic analysis settings for a network
     * @param {String} networkId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkTrafficAnalysis} opts.updateNetworkTrafficAnalysis 
     * @param {module:api/TrafficAnalysisApi~updateNetworkTrafficAnalysisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkTrafficAnalysis = function(networkId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkTrafficAnalysis'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkTrafficAnalysis");
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
        '/networks/{networkId}/trafficAnalysis', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
