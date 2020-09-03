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
import Body69 from '../model/Body69';

/**
* Pii service.
* @module api/PiiApi
* @version 1.0.0
*/
export default class PiiApi {

    /**
    * Constructs a new PiiApi. 
    * @alias module:api/PiiApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createNetworkPiiRequest operation.
     * @callback module:api/PiiApi~createNetworkPiiRequestCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit a new delete or restrict processing PII request
     * Submit a new delete or restrict processing PII request  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {module:api/PiiApi~createNetworkPiiRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createNetworkPiiRequest(networkId, opts, callback) {
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
        '/networks/{networkId}/pii/requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteNetworkPiiRequest operation.
     * @callback module:api/PiiApi~deleteNetworkPiiRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a restrict processing PII request
     * Delete a restrict processing PII request  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests/{requestId} &#x60;&#x60;&#x60;
     * @param {module:api/PiiApi~deleteNetworkPiiRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteNetworkPiiRequest(networkId, requestId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'requestId': requestId
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
        '/networks/{networkId}/pii/requests/{requestId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkPiiPiiKeys operation.
     * @callback module:api/PiiApi~getNetworkPiiPiiKeysCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \&quot;0\&quot; containing the applicable keys.
     * List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \&quot;0\&quot; containing the applicable keys.  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/piiKeys &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {module:api/PiiApi~getNetworkPiiPiiKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkPiiPiiKeys(networkId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        'username': opts['username'],
        'email': opts['email'],
        'mac': opts['mac'],
        'serial': opts['serial'],
        'imei': opts['imei'],
        'bluetoothMac': opts['bluetoothMac']
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
        '/networks/{networkId}/pii/piiKeys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkPiiRequest operation.
     * @callback module:api/PiiApi~getNetworkPiiRequestCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a PII request
     * Return a PII request  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests/{requestId} &#x60;&#x60;&#x60;
     * @param {module:api/PiiApi~getNetworkPiiRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkPiiRequest(networkId, requestId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'requestId': requestId
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
        '/networks/{networkId}/pii/requests/{requestId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkPiiRequests operation.
     * @callback module:api/PiiApi~getNetworkPiiRequestsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the PII requests for this network or organization
     * List the PII requests for this network or organization  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests &#x60;&#x60;&#x60;
     * @param {module:api/PiiApi~getNetworkPiiRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkPiiRequests(networkId, callback) {
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
        '/networks/{networkId}/pii/requests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkPiiSmDevicesForKey operation.
     * @callback module:api/PiiApi~getNetworkPiiSmDevicesForKeyCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/smDevicesForKey &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {module:api/PiiApi~getNetworkPiiSmDevicesForKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkPiiSmDevicesForKey(networkId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        'username': opts['username'],
        'email': opts['email'],
        'mac': opts['mac'],
        'serial': opts['serial'],
        'imei': opts['imei'],
        'bluetoothMac': opts['bluetoothMac']
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
        '/networks/{networkId}/pii/smDevicesForKey', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkPiiSmOwnersForKey operation.
     * @callback module:api/PiiApi~getNetworkPiiSmOwnersForKeyCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/smOwnersForKey &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {module:api/PiiApi~getNetworkPiiSmOwnersForKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkPiiSmOwnersForKey(networkId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        'username': opts['username'],
        'email': opts['email'],
        'mac': opts['mac'],
        'serial': opts['serial'],
        'imei': opts['imei'],
        'bluetoothMac': opts['bluetoothMac']
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
        '/networks/{networkId}/pii/smOwnersForKey', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
