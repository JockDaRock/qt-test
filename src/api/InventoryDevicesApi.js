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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.InventoryDevicesApi = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * InventoryDevices service.
   * @module api/InventoryDevicesApi
   * @version 1.1.0
   */

  /**
   * Constructs a new InventoryDevicesApi. 
   * @alias module:api/InventoryDevicesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getOrganizationInventoryDevice operation.
     * @callback module:api/InventoryDevicesApi~getOrganizationInventoryDeviceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a single device from the inventory of an organization
     * Return a single device from the inventory of an organization
     * @param {String} organizationId 
     * @param {String} serial 
     * @param {module:api/InventoryDevicesApi~getOrganizationInventoryDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getOrganizationInventoryDevice = function(organizationId, serial, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationInventoryDevice");
      }

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getOrganizationInventoryDevice");
      }


      var pathParams = {
        'organizationId': organizationId,
        'serial': serial
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
        '/organizations/{organizationId}/inventoryDevices/{serial}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationInventoryDevices operation.
     * @callback module:api/InventoryDevicesApi~getOrganizationInventoryDevicesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the device inventory for an organization
     * Return the device inventory for an organization
     * @param {String} organizationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     * @param {String} opts.startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {String} opts.endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {module:model/String} opts.usedState Filter results by used or unused inventory. Accepted values are \"used\" or \"unused\".
     * @param {String} opts.search Search for devices in inventory based on serial number, mac address, or model.
     * @param {module:api/InventoryDevicesApi~getOrganizationInventoryDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getOrganizationInventoryDevices = function(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationInventoryDevices");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'perPage': opts['perPage'],
        'startingAfter': opts['startingAfter'],
        'endingBefore': opts['endingBefore'],
        'usedState': opts['usedState'],
        'search': opts['search'],
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
        '/organizations/{organizationId}/inventoryDevices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
