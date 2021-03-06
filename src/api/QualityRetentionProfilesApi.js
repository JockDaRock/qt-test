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
    define(['ApiClient', 'model/CreateNetworkCameraQualityRetentionProfile', 'model/UpdateNetworkCameraQualityRetentionProfile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateNetworkCameraQualityRetentionProfile'), require('../model/UpdateNetworkCameraQualityRetentionProfile'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.QualityRetentionProfilesApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.CreateNetworkCameraQualityRetentionProfile, root.MerakiDashboardApi.UpdateNetworkCameraQualityRetentionProfile);
  }
}(this, function(ApiClient, CreateNetworkCameraQualityRetentionProfile, UpdateNetworkCameraQualityRetentionProfile) {
  'use strict';

  /**
   * QualityRetentionProfiles service.
   * @module api/QualityRetentionProfilesApi
   * @version 1.1.0
   */

  /**
   * Constructs a new QualityRetentionProfilesApi. 
   * @alias module:api/QualityRetentionProfilesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createNetworkCameraQualityRetentionProfile operation.
     * @callback module:api/QualityRetentionProfilesApi~createNetworkCameraQualityRetentionProfileCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates new quality retention profile for this network.
     * Creates new quality retention profile for this network.
     * @param {String} networkId 
     * @param {module:model/CreateNetworkCameraQualityRetentionProfile} createNetworkCameraQualityRetentionProfile 
     * @param {module:api/QualityRetentionProfilesApi~createNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createNetworkCameraQualityRetentionProfile = function(networkId, createNetworkCameraQualityRetentionProfile, callback) {
      var postBody = createNetworkCameraQualityRetentionProfile;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling createNetworkCameraQualityRetentionProfile");
      }

      // verify the required parameter 'createNetworkCameraQualityRetentionProfile' is set
      if (createNetworkCameraQualityRetentionProfile === undefined || createNetworkCameraQualityRetentionProfile === null) {
        throw new Error("Missing the required parameter 'createNetworkCameraQualityRetentionProfile' when calling createNetworkCameraQualityRetentionProfile");
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
        '/networks/{networkId}/camera/qualityRetentionProfiles', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNetworkCameraQualityRetentionProfile operation.
     * @callback module:api/QualityRetentionProfilesApi~deleteNetworkCameraQualityRetentionProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing quality retention profile for this network.
     * Delete an existing quality retention profile for this network.
     * @param {String} networkId 
     * @param {String} qualityRetentionProfileId 
     * @param {module:api/QualityRetentionProfilesApi~deleteNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNetworkCameraQualityRetentionProfile = function(networkId, qualityRetentionProfileId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling deleteNetworkCameraQualityRetentionProfile");
      }

      // verify the required parameter 'qualityRetentionProfileId' is set
      if (qualityRetentionProfileId === undefined || qualityRetentionProfileId === null) {
        throw new Error("Missing the required parameter 'qualityRetentionProfileId' when calling deleteNetworkCameraQualityRetentionProfile");
      }


      var pathParams = {
        'networkId': networkId,
        'qualityRetentionProfileId': qualityRetentionProfileId
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
        '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkCameraQualityRetentionProfile operation.
     * @callback module:api/QualityRetentionProfilesApi~getNetworkCameraQualityRetentionProfileCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a single quality retention profile
     * Retrieve a single quality retention profile
     * @param {String} networkId 
     * @param {String} qualityRetentionProfileId 
     * @param {module:api/QualityRetentionProfilesApi~getNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkCameraQualityRetentionProfile = function(networkId, qualityRetentionProfileId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkCameraQualityRetentionProfile");
      }

      // verify the required parameter 'qualityRetentionProfileId' is set
      if (qualityRetentionProfileId === undefined || qualityRetentionProfileId === null) {
        throw new Error("Missing the required parameter 'qualityRetentionProfileId' when calling getNetworkCameraQualityRetentionProfile");
      }


      var pathParams = {
        'networkId': networkId,
        'qualityRetentionProfileId': qualityRetentionProfileId
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
        '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkCameraQualityRetentionProfiles operation.
     * @callback module:api/QualityRetentionProfilesApi~getNetworkCameraQualityRetentionProfilesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the quality retention profiles for this network
     * List the quality retention profiles for this network
     * @param {String} networkId 
     * @param {module:api/QualityRetentionProfilesApi~getNetworkCameraQualityRetentionProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkCameraQualityRetentionProfiles = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkCameraQualityRetentionProfiles");
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
        '/networks/{networkId}/camera/qualityRetentionProfiles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkCameraQualityRetentionProfile operation.
     * @callback module:api/QualityRetentionProfilesApi~updateNetworkCameraQualityRetentionProfileCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing quality retention profile for this network.
     * Update an existing quality retention profile for this network.
     * @param {String} networkId 
     * @param {String} qualityRetentionProfileId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkCameraQualityRetentionProfile} opts.updateNetworkCameraQualityRetentionProfile 
     * @param {module:api/QualityRetentionProfilesApi~updateNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkCameraQualityRetentionProfile = function(networkId, qualityRetentionProfileId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkCameraQualityRetentionProfile'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkCameraQualityRetentionProfile");
      }

      // verify the required parameter 'qualityRetentionProfileId' is set
      if (qualityRetentionProfileId === undefined || qualityRetentionProfileId === null) {
        throw new Error("Missing the required parameter 'qualityRetentionProfileId' when calling updateNetworkCameraQualityRetentionProfile");
      }


      var pathParams = {
        'networkId': networkId,
        'qualityRetentionProfileId': qualityRetentionProfileId
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
        '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
