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
    define(['ApiClient', 'model/UpdateNetworkApplianceTrafficShapingRules', 'model/UpdateNetworkWirelessSsidTrafficShapingRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UpdateNetworkApplianceTrafficShapingRules'), require('../model/UpdateNetworkWirelessSsidTrafficShapingRules'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.RulesApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.UpdateNetworkApplianceTrafficShapingRules, root.MerakiDashboardApi.UpdateNetworkWirelessSsidTrafficShapingRules);
  }
}(this, function(ApiClient, UpdateNetworkApplianceTrafficShapingRules, UpdateNetworkWirelessSsidTrafficShapingRules) {
  'use strict';

  /**
   * Rules service.
   * @module api/RulesApi
   * @version 1.1.0
   */

  /**
   * Constructs a new RulesApi. 
   * @alias module:api/RulesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getNetworkApplianceTrafficShapingRules operation.
     * @callback module:api/RulesApi~getNetworkApplianceTrafficShapingRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Display the traffic shaping settings rules for an MX network
     * Display the traffic shaping settings rules for an MX network
     * @param {String} networkId 
     * @param {module:api/RulesApi~getNetworkApplianceTrafficShapingRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkApplianceTrafficShapingRules = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkApplianceTrafficShapingRules");
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
        '/networks/{networkId}/appliance/trafficShaping/rules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkWirelessSsidTrafficShapingRules operation.
     * @callback module:api/RulesApi~getNetworkWirelessSsidTrafficShapingRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Display the traffic shaping settings for a SSID on an MR network
     * Display the traffic shaping settings for a SSID on an MR network
     * @param {String} networkId 
     * @param {String} _number 
     * @param {module:api/RulesApi~getNetworkWirelessSsidTrafficShapingRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkWirelessSsidTrafficShapingRules = function(networkId, _number, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkWirelessSsidTrafficShapingRules");
      }

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling getNetworkWirelessSsidTrafficShapingRules");
      }


      var pathParams = {
        'networkId': networkId,
        'number': _number
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
        '/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkApplianceTrafficShapingRules operation.
     * @callback module:api/RulesApi~updateNetworkApplianceTrafficShapingRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the traffic shaping settings rules for an MX network
     * Update the traffic shaping settings rules for an MX network
     * @param {String} networkId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkApplianceTrafficShapingRules} opts.updateNetworkApplianceTrafficShapingRules 
     * @param {module:api/RulesApi~updateNetworkApplianceTrafficShapingRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkApplianceTrafficShapingRules = function(networkId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkApplianceTrafficShapingRules'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkApplianceTrafficShapingRules");
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
        '/networks/{networkId}/appliance/trafficShaping/rules', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkWirelessSsidTrafficShapingRules operation.
     * @callback module:api/RulesApi~updateNetworkWirelessSsidTrafficShapingRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the traffic shaping settings for an SSID on an MR network
     * Update the traffic shaping settings for an SSID on an MR network
     * @param {String} networkId 
     * @param {String} _number 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkWirelessSsidTrafficShapingRules} opts.updateNetworkWirelessSsidTrafficShapingRules 
     * @param {module:api/RulesApi~updateNetworkWirelessSsidTrafficShapingRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkWirelessSsidTrafficShapingRules = function(networkId, _number, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkWirelessSsidTrafficShapingRules'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkWirelessSsidTrafficShapingRules");
      }

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling updateNetworkWirelessSsidTrafficShapingRules");
      }


      var pathParams = {
        'networkId': networkId,
        'number': _number
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
        '/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
