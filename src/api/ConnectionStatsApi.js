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

/**
* ConnectionStats service.
* @module api/ConnectionStatsApi
* @version 1.0.0
*/
export default class ConnectionStatsApi {

    /**
    * Constructs a new ConnectionStatsApi. 
    * @alias module:api/ConnectionStatsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getDeviceWirelessConnectionStats operation.
     * @callback module:api/ConnectionStatsApi~getDeviceWirelessConnectionStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregated connectivity info for a given AP on this network
     * Aggregated connectivity info for a given AP on this network
     * @param {Object} opts Optional parameters
     * @param {module:api/ConnectionStatsApi~getDeviceWirelessConnectionStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceWirelessConnectionStats(serial, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'serial': serial
      };
      let queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'band': opts['band'],
        'ssid': opts['ssid'],
        'vlan': opts['vlan'],
        'apTag': opts['apTag']
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
        '/devices/{serial}/wireless/connectionStats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkWirelessClientConnectionStats operation.
     * @callback module:api/ConnectionStatsApi~getNetworkWirelessClientConnectionStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
     * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
     * @param {Object} opts Optional parameters
     * @param {module:api/ConnectionStatsApi~getNetworkWirelessClientConnectionStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessClientConnectionStats(networkId, clientId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'clientId': clientId
      };
      let queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'band': opts['band'],
        'ssid': opts['ssid'],
        'vlan': opts['vlan'],
        'apTag': opts['apTag']
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
        '/networks/{networkId}/wireless/clients/{clientId}/connectionStats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkWirelessClientsConnectionStats operation.
     * @callback module:api/ConnectionStatsApi~getNetworkWirelessClientsConnectionStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregated connectivity info for this network, grouped by clients
     * Aggregated connectivity info for this network, grouped by clients
     * @param {Object} opts Optional parameters
     * @param {module:api/ConnectionStatsApi~getNetworkWirelessClientsConnectionStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessClientsConnectionStats(networkId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'band': opts['band'],
        'ssid': opts['ssid'],
        'vlan': opts['vlan'],
        'apTag': opts['apTag']
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
        '/networks/{networkId}/wireless/clients/connectionStats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkWirelessConnectionStats operation.
     * @callback module:api/ConnectionStatsApi~getNetworkWirelessConnectionStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregated connectivity info for this network
     * Aggregated connectivity info for this network
     * @param {Object} opts Optional parameters
     * @param {module:api/ConnectionStatsApi~getNetworkWirelessConnectionStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessConnectionStats(networkId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'band': opts['band'],
        'ssid': opts['ssid'],
        'vlan': opts['vlan'],
        'apTag': opts['apTag']
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
        '/networks/{networkId}/wireless/connectionStats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkWirelessDevicesConnectionStats operation.
     * @callback module:api/ConnectionStatsApi~getNetworkWirelessDevicesConnectionStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregated connectivity info for this network, grouped by node
     * Aggregated connectivity info for this network, grouped by node
     * @param {Object} opts Optional parameters
     * @param {module:api/ConnectionStatsApi~getNetworkWirelessDevicesConnectionStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessDevicesConnectionStats(networkId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'band': opts['band'],
        'ssid': opts['ssid'],
        'vlan': opts['vlan'],
        'apTag': opts['apTag']
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
        '/networks/{networkId}/wireless/devices/connectionStats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}