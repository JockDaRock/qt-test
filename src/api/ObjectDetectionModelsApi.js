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
    root.MerakiDashboardApi.ObjectDetectionModelsApi = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ObjectDetectionModels service.
   * @module api/ObjectDetectionModelsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new ObjectDetectionModelsApi. 
   * @alias module:api/ObjectDetectionModelsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDeviceCameraSenseObjectDetectionModels operation.
     * @callback module:api/ObjectDetectionModelsApi~getDeviceCameraSenseObjectDetectionModelsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the MV Sense object detection model list for the given camera
     * Returns the MV Sense object detection model list for the given camera
     * @param {String} serial 
     * @param {module:api/ObjectDetectionModelsApi~getDeviceCameraSenseObjectDetectionModelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDeviceCameraSenseObjectDetectionModels = function(serial, callback) {
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getDeviceCameraSenseObjectDetectionModels");
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
        '/devices/{serial}/camera/sense/objectDetectionModels', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
