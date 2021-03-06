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
    define(['ApiClient', 'model/UpdateNetworkApplianceFirewallOneToOneNatRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UpdateNetworkApplianceFirewallOneToOneNatRules'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.OneToOneNatRulesApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.UpdateNetworkApplianceFirewallOneToOneNatRules);
  }
}(this, function(ApiClient, UpdateNetworkApplianceFirewallOneToOneNatRules) {
  'use strict';

  /**
   * OneToOneNatRules service.
   * @module api/OneToOneNatRulesApi
   * @version 1.1.0
   */

  /**
   * Constructs a new OneToOneNatRulesApi. 
   * @alias module:api/OneToOneNatRulesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getNetworkApplianceFirewallOneToOneNatRules operation.
     * @callback module:api/OneToOneNatRulesApi~getNetworkApplianceFirewallOneToOneNatRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the 1:1 NAT mapping rules for an MX network
     * Return the 1:1 NAT mapping rules for an MX network
     * @param {String} networkId 
     * @param {module:api/OneToOneNatRulesApi~getNetworkApplianceFirewallOneToOneNatRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkApplianceFirewallOneToOneNatRules = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkApplianceFirewallOneToOneNatRules");
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
        '/networks/{networkId}/appliance/firewall/oneToOneNatRules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkApplianceFirewallOneToOneNatRules operation.
     * @callback module:api/OneToOneNatRulesApi~updateNetworkApplianceFirewallOneToOneNatRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the 1:1 NAT mapping rules for an MX network
     * Set the 1:1 NAT mapping rules for an MX network
     * @param {String} networkId 
     * @param {module:model/UpdateNetworkApplianceFirewallOneToOneNatRules} updateNetworkApplianceFirewallOneToOneNatRules 
     * @param {module:api/OneToOneNatRulesApi~updateNetworkApplianceFirewallOneToOneNatRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkApplianceFirewallOneToOneNatRules = function(networkId, updateNetworkApplianceFirewallOneToOneNatRules, callback) {
      var postBody = updateNetworkApplianceFirewallOneToOneNatRules;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkApplianceFirewallOneToOneNatRules");
      }

      // verify the required parameter 'updateNetworkApplianceFirewallOneToOneNatRules' is set
      if (updateNetworkApplianceFirewallOneToOneNatRules === undefined || updateNetworkApplianceFirewallOneToOneNatRules === null) {
        throw new Error("Missing the required parameter 'updateNetworkApplianceFirewallOneToOneNatRules' when calling updateNetworkApplianceFirewallOneToOneNatRules");
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
        '/networks/{networkId}/appliance/firewall/oneToOneNatRules', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
