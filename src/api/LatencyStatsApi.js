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
* LatencyStats service.
* @module api/LatencyStatsApi
* @version 1.0.0
*/
export default class LatencyStatsApi {

    /**
    * Constructs a new LatencyStatsApi. 
    * @alias module:api/LatencyStatsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getDeviceWirelessLatencyStats operation.
     * @callback module:api/LatencyStatsApi~getDeviceWirelessLatencyStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregated latency info for a given AP on this network
     * Aggregated latency info for a given AP on this network
     * @param {Object} opts Optional parameters
     * @param {module:api/LatencyStatsApi~getDeviceWirelessLatencyStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceWirelessLatencyStats(serial, opts, callback) {
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
        'apTag': opts['apTag'],
        'fields': opts['fields']
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
        '/devices/{serial}/wireless/latencyStats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkWirelessClientLatencyStats operation.
     * @callback module:api/LatencyStatsApi~getNetworkWirelessClientLatencyStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregated latency info for a given client on this network. Clients are identified by their MAC.
     * Aggregated latency info for a given client on this network. Clients are identified by their MAC.
     * @param {Object} opts Optional parameters
     * @param {module:api/LatencyStatsApi~getNetworkWirelessClientLatencyStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessClientLatencyStats(networkId, clientId, opts, callback) {
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
        'apTag': opts['apTag'],
        'fields': opts['fields']
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
        '/networks/{networkId}/wireless/clients/{clientId}/latencyStats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkWirelessClientsLatencyStats operation.
     * @callback module:api/LatencyStatsApi~getNetworkWirelessClientsLatencyStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregated latency info for this network, grouped by clients
     * Aggregated latency info for this network, grouped by clients
     * @param {Object} opts Optional parameters
     * @param {module:api/LatencyStatsApi~getNetworkWirelessClientsLatencyStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessClientsLatencyStats(networkId, opts, callback) {
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
        'apTag': opts['apTag'],
        'fields': opts['fields']
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
        '/networks/{networkId}/wireless/clients/latencyStats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkWirelessDevicesLatencyStats operation.
     * @callback module:api/LatencyStatsApi~getNetworkWirelessDevicesLatencyStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregated latency info for this network, grouped by node
     * Aggregated latency info for this network, grouped by node
     * @param {Object} opts Optional parameters
     * @param {module:api/LatencyStatsApi~getNetworkWirelessDevicesLatencyStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessDevicesLatencyStats(networkId, opts, callback) {
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
        'apTag': opts['apTag'],
        'fields': opts['fields']
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
        '/networks/{networkId}/wireless/devices/latencyStats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkWirelessLatencyStats operation.
     * @callback module:api/LatencyStatsApi~getNetworkWirelessLatencyStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Aggregated latency info for this network
     * Aggregated latency info for this network
     * @param {Object} opts Optional parameters
     * @param {module:api/LatencyStatsApi~getNetworkWirelessLatencyStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessLatencyStats(networkId, opts, callback) {
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
        'apTag': opts['apTag'],
        'fields': opts['fields']
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
        '/networks/{networkId}/wireless/latencyStats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}