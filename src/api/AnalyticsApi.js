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
    root.MerakiDashboardApi.AnalyticsApi = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Analytics service.
   * @module api/AnalyticsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new AnalyticsApi. 
   * @alias module:api/AnalyticsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDeviceCameraAnalyticsLive operation.
     * @callback module:api/AnalyticsApi~getDeviceCameraAnalyticsLiveCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns live state from camera of analytics zones
     * Returns live state from camera of analytics zones
     * @param {String} serial 
     * @param {module:api/AnalyticsApi~getDeviceCameraAnalyticsLiveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDeviceCameraAnalyticsLive = function(serial, callback) {
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getDeviceCameraAnalyticsLive");
      }


      var pathParams = {
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
        '/devices/{serial}/camera/analytics/live', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceCameraAnalyticsOverview operation.
     * @callback module:api/AnalyticsApi~getDeviceCameraAnalyticsOverviewCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an overview of aggregate analytics data for a timespan
     * Returns an overview of aggregate analytics data for a timespan
     * @param {String} serial 
     * @param {Object} opts Optional parameters
     * @param {String} opts.t0 The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
     * @param {String} opts.t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
     * @param {Number} opts.timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour.
     * @param {module:model/String} opts.objectType [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
     * @param {module:api/AnalyticsApi~getDeviceCameraAnalyticsOverviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDeviceCameraAnalyticsOverview = function(serial, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getDeviceCameraAnalyticsOverview");
      }


      var pathParams = {
        'serial': serial
      };
      var queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'objectType': opts['objectType'],
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
        '/devices/{serial}/camera/analytics/overview', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceCameraAnalyticsRecent operation.
     * @callback module:api/AnalyticsApi~getDeviceCameraAnalyticsRecentCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns most recent record for analytics zones
     * Returns most recent record for analytics zones
     * @param {String} serial 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.objectType [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
     * @param {module:api/AnalyticsApi~getDeviceCameraAnalyticsRecentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDeviceCameraAnalyticsRecent = function(serial, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getDeviceCameraAnalyticsRecent");
      }


      var pathParams = {
        'serial': serial
      };
      var queryParams = {
        'objectType': opts['objectType'],
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
        '/devices/{serial}/camera/analytics/recent', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceCameraAnalyticsZoneHistory operation.
     * @callback module:api/AnalyticsApi~getDeviceCameraAnalyticsZoneHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return historical records for analytic zones
     * Return historical records for analytic zones
     * @param {String} serial 
     * @param {String} zoneId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.t0 The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
     * @param {String} opts.t1 The end of the timespan for the data. t1 can be a maximum of 14 hours after t0.
     * @param {Number} opts.timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour.
     * @param {Number} opts.resolution The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60.
     * @param {module:model/String} opts.objectType [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
     * @param {module:api/AnalyticsApi~getDeviceCameraAnalyticsZoneHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDeviceCameraAnalyticsZoneHistory = function(serial, zoneId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getDeviceCameraAnalyticsZoneHistory");
      }

      // verify the required parameter 'zoneId' is set
      if (zoneId === undefined || zoneId === null) {
        throw new Error("Missing the required parameter 'zoneId' when calling getDeviceCameraAnalyticsZoneHistory");
      }


      var pathParams = {
        'serial': serial,
        'zoneId': zoneId
      };
      var queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'resolution': opts['resolution'],
        'objectType': opts['objectType'],
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
        '/devices/{serial}/camera/analytics/zones/{zoneId}/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceCameraAnalyticsZones operation.
     * @callback module:api/AnalyticsApi~getDeviceCameraAnalyticsZonesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all configured analytic zones for this camera
     * Returns all configured analytic zones for this camera
     * @param {String} serial 
     * @param {module:api/AnalyticsApi~getDeviceCameraAnalyticsZonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDeviceCameraAnalyticsZones = function(serial, callback) {
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getDeviceCameraAnalyticsZones");
      }


      var pathParams = {
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
        '/devices/{serial}/camera/analytics/zones', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
