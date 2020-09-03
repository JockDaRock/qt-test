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
import Body110 from '../model/Body110';
import Body111 from '../model/Body111';

/**
* RfProfiles service.
* @module api/RfProfilesApi
* @version 1.0.0
*/
export default class RfProfilesApi {

    /**
    * Constructs a new RfProfilesApi. 
    * @alias module:api/RfProfilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createNetworkWirelessRfProfile operation.
     * @callback module:api/RfProfilesApi~createNetworkWirelessRfProfileCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates new RF profile for this network
     * Creates new RF profile for this network
     * @param {module:api/RfProfilesApi~createNetworkWirelessRfProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createNetworkWirelessRfProfile(body, networkId, callback) {
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
        '/networks/{networkId}/wireless/rfProfiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteNetworkWirelessRfProfile operation.
     * @callback module:api/RfProfilesApi~deleteNetworkWirelessRfProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a RF Profile
     * Delete a RF Profile
     * @param {module:api/RfProfilesApi~deleteNetworkWirelessRfProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteNetworkWirelessRfProfile(networkId, rfProfileId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'rfProfileId': rfProfileId
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
        '/networks/{networkId}/wireless/rfProfiles/{rfProfileId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkWirelessRfProfile operation.
     * @callback module:api/RfProfilesApi~getNetworkWirelessRfProfileCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a RF profile
     * Return a RF profile
     * @param {module:api/RfProfilesApi~getNetworkWirelessRfProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessRfProfile(networkId, rfProfileId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'rfProfileId': rfProfileId
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
        '/networks/{networkId}/wireless/rfProfiles/{rfProfileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkWirelessRfProfiles operation.
     * @callback module:api/RfProfilesApi~getNetworkWirelessRfProfilesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the non-basic RF profiles for this network
     * List the non-basic RF profiles for this network
     * @param {Object} opts Optional parameters
     * @param {module:api/RfProfilesApi~getNetworkWirelessRfProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessRfProfiles(networkId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        'includeTemplateProfiles': opts['includeTemplateProfiles']
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
        '/networks/{networkId}/wireless/rfProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNetworkWirelessRfProfile operation.
     * @callback module:api/RfProfilesApi~updateNetworkWirelessRfProfileCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates specified RF profile for this network
     * Updates specified RF profile for this network
     * @param {Object} opts Optional parameters
     * @param {module:api/RfProfilesApi~updateNetworkWirelessRfProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkWirelessRfProfile(networkId, rfProfileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'networkId': networkId,
        'rfProfileId': rfProfileId
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
        '/networks/{networkId}/wireless/rfProfiles/{rfProfileId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
