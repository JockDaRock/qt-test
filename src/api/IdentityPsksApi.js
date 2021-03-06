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
    define(['ApiClient', 'model/CreateNetworkWirelessSsidIdentityPsk', 'model/UpdateNetworkWirelessSsidIdentityPsk'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateNetworkWirelessSsidIdentityPsk'), require('../model/UpdateNetworkWirelessSsidIdentityPsk'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.IdentityPsksApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.CreateNetworkWirelessSsidIdentityPsk, root.MerakiDashboardApi.UpdateNetworkWirelessSsidIdentityPsk);
  }
}(this, function(ApiClient, CreateNetworkWirelessSsidIdentityPsk, UpdateNetworkWirelessSsidIdentityPsk) {
  'use strict';

  /**
   * IdentityPsks service.
   * @module api/IdentityPsksApi
   * @version 1.1.0
   */

  /**
   * Constructs a new IdentityPsksApi. 
   * @alias module:api/IdentityPsksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createNetworkWirelessSsidIdentityPsk operation.
     * @callback module:api/IdentityPsksApi~createNetworkWirelessSsidIdentityPskCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Identity PSK
     * Create an Identity PSK
     * @param {String} networkId 
     * @param {String} _number 
     * @param {module:model/CreateNetworkWirelessSsidIdentityPsk} createNetworkWirelessSsidIdentityPsk 
     * @param {module:api/IdentityPsksApi~createNetworkWirelessSsidIdentityPskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createNetworkWirelessSsidIdentityPsk = function(networkId, _number, createNetworkWirelessSsidIdentityPsk, callback) {
      var postBody = createNetworkWirelessSsidIdentityPsk;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling createNetworkWirelessSsidIdentityPsk");
      }

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling createNetworkWirelessSsidIdentityPsk");
      }

      // verify the required parameter 'createNetworkWirelessSsidIdentityPsk' is set
      if (createNetworkWirelessSsidIdentityPsk === undefined || createNetworkWirelessSsidIdentityPsk === null) {
        throw new Error("Missing the required parameter 'createNetworkWirelessSsidIdentityPsk' when calling createNetworkWirelessSsidIdentityPsk");
      }


      var pathParams = {
        'networkId': networkId,
        'number': _number
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
        '/networks/{networkId}/wireless/ssids/{number}/identityPsks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNetworkWirelessSsidIdentityPsk operation.
     * @callback module:api/IdentityPsksApi~deleteNetworkWirelessSsidIdentityPskCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an Identity PSK
     * Delete an Identity PSK
     * @param {String} networkId 
     * @param {String} _number 
     * @param {String} identityPskId 
     * @param {module:api/IdentityPsksApi~deleteNetworkWirelessSsidIdentityPskCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNetworkWirelessSsidIdentityPsk = function(networkId, _number, identityPskId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling deleteNetworkWirelessSsidIdentityPsk");
      }

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling deleteNetworkWirelessSsidIdentityPsk");
      }

      // verify the required parameter 'identityPskId' is set
      if (identityPskId === undefined || identityPskId === null) {
        throw new Error("Missing the required parameter 'identityPskId' when calling deleteNetworkWirelessSsidIdentityPsk");
      }


      var pathParams = {
        'networkId': networkId,
        'number': _number,
        'identityPskId': identityPskId
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
        '/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkWirelessSsidIdentityPsk operation.
     * @callback module:api/IdentityPsksApi~getNetworkWirelessSsidIdentityPskCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return an Identity PSK
     * Return an Identity PSK
     * @param {String} networkId 
     * @param {String} _number 
     * @param {String} identityPskId 
     * @param {module:api/IdentityPsksApi~getNetworkWirelessSsidIdentityPskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkWirelessSsidIdentityPsk = function(networkId, _number, identityPskId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkWirelessSsidIdentityPsk");
      }

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling getNetworkWirelessSsidIdentityPsk");
      }

      // verify the required parameter 'identityPskId' is set
      if (identityPskId === undefined || identityPskId === null) {
        throw new Error("Missing the required parameter 'identityPskId' when calling getNetworkWirelessSsidIdentityPsk");
      }


      var pathParams = {
        'networkId': networkId,
        'number': _number,
        'identityPskId': identityPskId
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
        '/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkWirelessSsidIdentityPsks operation.
     * @callback module:api/IdentityPsksApi~getNetworkWirelessSsidIdentityPsksCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Identity PSKs in a wireless network
     * List all Identity PSKs in a wireless network
     * @param {String} networkId 
     * @param {String} _number 
     * @param {module:api/IdentityPsksApi~getNetworkWirelessSsidIdentityPsksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkWirelessSsidIdentityPsks = function(networkId, _number, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkWirelessSsidIdentityPsks");
      }

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling getNetworkWirelessSsidIdentityPsks");
      }


      var pathParams = {
        'networkId': networkId,
        'number': _number
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
        '/networks/{networkId}/wireless/ssids/{number}/identityPsks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkWirelessSsidIdentityPsk operation.
     * @callback module:api/IdentityPsksApi~updateNetworkWirelessSsidIdentityPskCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Identity PSK
     * Update an Identity PSK
     * @param {String} networkId 
     * @param {String} _number 
     * @param {String} identityPskId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkWirelessSsidIdentityPsk} opts.updateNetworkWirelessSsidIdentityPsk 
     * @param {module:api/IdentityPsksApi~updateNetworkWirelessSsidIdentityPskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkWirelessSsidIdentityPsk = function(networkId, _number, identityPskId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkWirelessSsidIdentityPsk'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkWirelessSsidIdentityPsk");
      }

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling updateNetworkWirelessSsidIdentityPsk");
      }

      // verify the required parameter 'identityPskId' is set
      if (identityPskId === undefined || identityPskId === null) {
        throw new Error("Missing the required parameter 'identityPskId' when calling updateNetworkWirelessSsidIdentityPsk");
      }


      var pathParams = {
        'networkId': networkId,
        'number': _number,
        'identityPskId': identityPskId
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
        '/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
