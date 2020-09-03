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
* Traffic service.
* @module api/TrafficApi
* @version 1.0.0
*/
export default class TrafficApi {

    /**
    * Constructs a new TrafficApi. 
    * @alias module:api/TrafficApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNetworkTraffic operation.
     * @callback module:api/TrafficApi~getNetworkTrafficCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *     The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 
     *     The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 
     * @param {Object} opts Optional parameters
     * @param {module:api/TrafficApi~getNetworkTrafficCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkTraffic(networkId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
        't0': opts['t0'],
        'timespan': opts['timespan'],
        'deviceType': opts['deviceType']
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
        '/networks/{networkId}/traffic', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}