/**
 * Meraki Dashboard API
 * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date: 05 August, 2020 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https://meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https://www.meraki.com) 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import Body48 from '../model/Body48';
import Body49 from '../model/Body49';

/**
* QualityRetentionProfiles service.
* @module api/QualityRetentionProfilesApi
* @version 1.0.0
*/
export default class QualityRetentionProfilesApi {

    /**
    * Constructs a new QualityRetentionProfilesApi. 
    * @alias module:api/QualityRetentionProfilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

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
     * @param {module:api/QualityRetentionProfilesApi~createNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createNetworkCameraQualityRetentionProfile(body, networkId, callback) {
      let postBody = body;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/camera/qualityRetentionProfiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {module:api/QualityRetentionProfilesApi~deleteNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'qualityRetentionProfileId': qualityRetentionProfileId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {module:api/QualityRetentionProfilesApi~getNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'qualityRetentionProfileId': qualityRetentionProfileId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {module:api/QualityRetentionProfilesApi~getNetworkCameraQualityRetentionProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkCameraQualityRetentionProfiles(networkId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/camera/qualityRetentionProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {Object} opts Optional parameters
     * @param {module:api/QualityRetentionProfilesApi~updateNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'networkId': networkId,
        'qualityRetentionProfileId': qualityRetentionProfileId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
