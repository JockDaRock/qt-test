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
    define(['ApiClient', 'model/UpdateNetworkApplianceFirewallL3FirewallRules', 'model/UpdateNetworkWirelessSsidFirewallL3FirewallRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UpdateNetworkApplianceFirewallL3FirewallRules'), require('../model/UpdateNetworkWirelessSsidFirewallL3FirewallRules'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.L3FirewallRulesApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.UpdateNetworkApplianceFirewallL3FirewallRules, root.MerakiDashboardApi.UpdateNetworkWirelessSsidFirewallL3FirewallRules);
  }
}(this, function(ApiClient, UpdateNetworkApplianceFirewallL3FirewallRules, UpdateNetworkWirelessSsidFirewallL3FirewallRules) {
  'use strict';

  /**
   * L3FirewallRules service.
   * @module api/L3FirewallRulesApi
   * @version 1.1.0
   */

  /**
   * Constructs a new L3FirewallRulesApi. 
   * @alias module:api/L3FirewallRulesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getNetworkApplianceFirewallL3FirewallRules operation.
     * @callback module:api/L3FirewallRulesApi~getNetworkApplianceFirewallL3FirewallRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the L3 firewall rules for an MX network
     * Return the L3 firewall rules for an MX network
     * @param {String} networkId 
     * @param {module:api/L3FirewallRulesApi~getNetworkApplianceFirewallL3FirewallRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkApplianceFirewallL3FirewallRules = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkApplianceFirewallL3FirewallRules");
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
        '/networks/{networkId}/appliance/firewall/l3FirewallRules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkWirelessSsidFirewallL3FirewallRules operation.
     * @callback module:api/L3FirewallRulesApi~getNetworkWirelessSsidFirewallL3FirewallRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the L3 firewall rules for an SSID on an MR network
     * Return the L3 firewall rules for an SSID on an MR network
     * @param {String} networkId 
     * @param {String} _number 
     * @param {module:api/L3FirewallRulesApi~getNetworkWirelessSsidFirewallL3FirewallRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkWirelessSsidFirewallL3FirewallRules = function(networkId, _number, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkWirelessSsidFirewallL3FirewallRules");
      }

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling getNetworkWirelessSsidFirewallL3FirewallRules");
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
        '/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkApplianceFirewallL3FirewallRules operation.
     * @callback module:api/L3FirewallRulesApi~updateNetworkApplianceFirewallL3FirewallRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the L3 firewall rules of an MX network
     * Update the L3 firewall rules of an MX network
     * @param {String} networkId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkApplianceFirewallL3FirewallRules} opts.updateNetworkApplianceFirewallL3FirewallRules 
     * @param {module:api/L3FirewallRulesApi~updateNetworkApplianceFirewallL3FirewallRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkApplianceFirewallL3FirewallRules = function(networkId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkApplianceFirewallL3FirewallRules'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkApplianceFirewallL3FirewallRules");
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
        '/networks/{networkId}/appliance/firewall/l3FirewallRules', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkWirelessSsidFirewallL3FirewallRules operation.
     * @callback module:api/L3FirewallRulesApi~updateNetworkWirelessSsidFirewallL3FirewallRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the L3 firewall rules of an SSID on an MR network
     * Update the L3 firewall rules of an SSID on an MR network
     * @param {String} networkId 
     * @param {String} _number 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkWirelessSsidFirewallL3FirewallRules} opts.updateNetworkWirelessSsidFirewallL3FirewallRules 
     * @param {module:api/L3FirewallRulesApi~updateNetworkWirelessSsidFirewallL3FirewallRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkWirelessSsidFirewallL3FirewallRules = function(networkId, _number, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkWirelessSsidFirewallL3FirewallRules'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkWirelessSsidFirewallL3FirewallRules");
      }

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling updateNetworkWirelessSsidFirewallL3FirewallRules");
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
        '/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
