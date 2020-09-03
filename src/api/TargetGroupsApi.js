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
import Body74 from '../model/Body74';
import Body75 from '../model/Body75';

/**
* TargetGroups service.
* @module api/TargetGroupsApi
* @version 1.0.0
*/
export default class TargetGroupsApi {

    /**
    * Constructs a new TargetGroupsApi. 
    * @alias module:api/TargetGroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createNetworkSmTargetGroup operation.
     * @callback module:api/TargetGroupsApi~createNetworkSmTargetGroupCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a target group
     * Add a target group
     * @param {Object} opts Optional parameters
     * @param {module:api/TargetGroupsApi~createNetworkSmTargetGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createNetworkSmTargetGroup(networkId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
        '/networks/{networkId}/sm/targetGroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteNetworkSmTargetGroup operation.
     * @callback module:api/TargetGroupsApi~deleteNetworkSmTargetGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a target group from a network
     * Delete a target group from a network
     * @param {module:api/TargetGroupsApi~deleteNetworkSmTargetGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteNetworkSmTargetGroup(networkId, targetGroupId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'targetGroupId': targetGroupId
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
        '/networks/{networkId}/sm/targetGroups/{targetGroupId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkSmTargetGroup operation.
     * @callback module:api/TargetGroupsApi~getNetworkSmTargetGroupCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a target group
     * Return a target group
     * @param {Object} opts Optional parameters
     * @param {module:api/TargetGroupsApi~getNetworkSmTargetGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkSmTargetGroup(networkId, targetGroupId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'targetGroupId': targetGroupId
      };
      let queryParams = {
        'withDetails': opts['withDetails']
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
        '/networks/{networkId}/sm/targetGroups/{targetGroupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkSmTargetGroups operation.
     * @callback module:api/TargetGroupsApi~getNetworkSmTargetGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the target groups in this network
     * List the target groups in this network
     * @param {Object} opts Optional parameters
     * @param {module:api/TargetGroupsApi~getNetworkSmTargetGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkSmTargetGroups(networkId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        'withDetails': opts['withDetails']
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
        '/networks/{networkId}/sm/targetGroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNetworkSmTargetGroup operation.
     * @callback module:api/TargetGroupsApi~updateNetworkSmTargetGroupCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a target group
     * Update a target group
     * @param {Object} opts Optional parameters
     * @param {module:api/TargetGroupsApi~updateNetworkSmTargetGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkSmTargetGroup(networkId, targetGroupId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'networkId': networkId,
        'targetGroupId': targetGroupId
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
        '/networks/{networkId}/sm/targetGroups/{targetGroupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
