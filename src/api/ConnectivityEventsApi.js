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
* ConnectivityEvents service.
* @module api/ConnectivityEventsApi
* @version 1.0.0
*/
export default class ConnectivityEventsApi {

    /**
    * Constructs a new ConnectivityEventsApi. 
    * @alias module:api/ConnectivityEventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNetworkWirelessClientConnectivityEvents operation.
     * @callback module:api/ConnectivityEventsApi~getNetworkWirelessClientConnectivityEventsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the wireless connectivity events for a client within a network in the timespan.
     * List the wireless connectivity events for a client within a network in the timespan.
     * @param {Object} opts Optional parameters
     * @param {module:api/ConnectivityEventsApi~getNetworkWirelessClientConnectivityEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkWirelessClientConnectivityEvents(networkId, clientId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'clientId': clientId
      };
      let queryParams = {
        'perPage': opts['perPage'],
        'startingAfter': opts['startingAfter'],
        'endingBefore': opts['endingBefore'],
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'types': this.apiClient.buildCollectionParam(opts['types'], 'csv'),
        'includedSeverities': this.apiClient.buildCollectionParam(opts['includedSeverities'], 'csv'),
        'band': opts['band'],
        'ssidNumber': opts['ssidNumber'],
        'deviceSerial': opts['deviceSerial']
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
        '/networks/{networkId}/wireless/clients/{clientId}/connectivityEvents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
