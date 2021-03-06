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
    root.MerakiDashboardApi.EventsApi = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Events service.
   * @module api/EventsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new EventsApi. 
   * @alias module:api/EventsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getNetworkApplianceClientSecurityEvents operation.
     * @callback module:api/EventsApi~getNetworkApplianceClientSecurityEventsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     * @param {String} networkId 
     * @param {String} clientId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.t0 The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today.
     * @param {String} opts.t1 The end of the timespan for the data. t1 can be a maximum of 791 days after t0.
     * @param {Number} opts.timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days.
     * @param {Number} opts.perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
     * @param {String} opts.startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {String} opts.endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {module:model/String} opts.sortOrder Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.
     * @param {module:api/EventsApi~getNetworkApplianceClientSecurityEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkApplianceClientSecurityEvents = function(networkId, clientId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkApplianceClientSecurityEvents");
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getNetworkApplianceClientSecurityEvents");
      }


      var pathParams = {
        'networkId': networkId,
        'clientId': clientId
      };
      var queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'perPage': opts['perPage'],
        'startingAfter': opts['startingAfter'],
        'endingBefore': opts['endingBefore'],
        'sortOrder': opts['sortOrder'],
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
        '/networks/{networkId}/appliance/clients/{clientId}/security/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkApplianceSecurityEvents operation.
     * @callback module:api/EventsApi~getNetworkApplianceSecurityEventsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the security events for a network
     * List the security events for a network
     * @param {String} networkId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.t0 The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.
     * @param {String} opts.t1 The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
     * @param {Number} opts.timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.
     * @param {Number} opts.perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
     * @param {String} opts.startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {String} opts.endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {module:model/String} opts.sortOrder Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.
     * @param {module:api/EventsApi~getNetworkApplianceSecurityEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkApplianceSecurityEvents = function(networkId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkApplianceSecurityEvents");
      }


      var pathParams = {
        'networkId': networkId
      };
      var queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'perPage': opts['perPage'],
        'startingAfter': opts['startingAfter'],
        'endingBefore': opts['endingBefore'],
        'sortOrder': opts['sortOrder'],
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
        '/networks/{networkId}/appliance/security/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkEvents operation.
     * @callback module:api/EventsApi~getNetworkEventsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the events for the network
     * List the events for the network
     * @param {String} networkId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.productType The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway
     * @param {Array.<String>} opts.includedEventTypes A list of event types. The returned events will be filtered to only include events with these types.
     * @param {Array.<String>} opts.excludedEventTypes A list of event types. The returned events will be filtered to exclude events with these types.
     * @param {String} opts.deviceMac The MAC address of the Meraki device which the list of events will be filtered with
     * @param {String} opts.deviceSerial The serial of the Meraki device which the list of events will be filtered with
     * @param {String} opts.deviceName The name of the Meraki device which the list of events will be filtered with
     * @param {String} opts.clientIp The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks.
     * @param {String} opts.clientMac The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks.
     * @param {String} opts.clientName The name, or partial name, of the client which the list of events will be filtered with
     * @param {String} opts.smDeviceMac The MAC address of the Systems Manager device which the list of events will be filtered with
     * @param {String} opts.smDeviceName The name of the Systems Manager device which the list of events will be filtered with
     * @param {Number} opts.perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
     * @param {String} opts.startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {String} opts.endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {module:api/EventsApi~getNetworkEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkEvents = function(networkId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkEvents");
      }


      var pathParams = {
        'networkId': networkId
      };
      var queryParams = {
        'productType': opts['productType'],
        'deviceMac': opts['deviceMac'],
        'deviceSerial': opts['deviceSerial'],
        'deviceName': opts['deviceName'],
        'clientIp': opts['clientIp'],
        'clientMac': opts['clientMac'],
        'clientName': opts['clientName'],
        'smDeviceMac': opts['smDeviceMac'],
        'smDeviceName': opts['smDeviceName'],
        'perPage': opts['perPage'],
        'startingAfter': opts['startingAfter'],
        'endingBefore': opts['endingBefore'],
      };
      var collectionQueryParams = {
        'includedEventTypes': {
          value: opts['includedEventTypes'],
          collectionFormat: 'csv'
        },
        'excludedEventTypes': {
          value: opts['excludedEventTypes'],
          collectionFormat: 'csv'
        },
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
        '/networks/{networkId}/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkEventsEventTypes operation.
     * @callback module:api/EventsApi~getNetworkEventsEventTypesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the event type to human-readable description
     * List the event type to human-readable description
     * @param {String} networkId 
     * @param {module:api/EventsApi~getNetworkEventsEventTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkEventsEventTypes = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkEventsEventTypes");
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
        '/networks/{networkId}/events/eventTypes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationApplianceSecurityEvents operation.
     * @callback module:api/EventsApi~getOrganizationApplianceSecurityEventsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the security events for an organization
     * List the security events for an organization
     * @param {String} organizationId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.t0 The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.
     * @param {String} opts.t1 The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
     * @param {Number} opts.timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.
     * @param {Number} opts.perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
     * @param {String} opts.startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {String} opts.endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {module:model/String} opts.sortOrder Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.
     * @param {module:api/EventsApi~getOrganizationApplianceSecurityEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getOrganizationApplianceSecurityEvents = function(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationApplianceSecurityEvents");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'perPage': opts['perPage'],
        'startingAfter': opts['startingAfter'],
        'endingBefore': opts['endingBefore'],
        'sortOrder': opts['sortOrder'],
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
        '/organizations/{organizationId}/appliance/security/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
