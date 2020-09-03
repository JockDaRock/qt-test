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
import Body23 from '../model/Body23';

/**
* CellularFirewallRules service.
* @module api/CellularFirewallRulesApi
* @version 1.0.0
*/
export default class CellularFirewallRulesApi {

    /**
    * Constructs a new CellularFirewallRulesApi. 
    * @alias module:api/CellularFirewallRulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNetworkApplianceFirewallCellularFirewallRules operation.
     * @callback module:api/CellularFirewallRulesApi~getNetworkApplianceFirewallCellularFirewallRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the cellular firewall rules for an MX network
     * Return the cellular firewall rules for an MX network
     * @param {module:api/CellularFirewallRulesApi~getNetworkApplianceFirewallCellularFirewallRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkApplianceFirewallCellularFirewallRules(networkId, callback) {
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
        '/networks/{networkId}/appliance/firewall/cellularFirewallRules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNetworkApplianceFirewallCellularFirewallRules operation.
     * @callback module:api/CellularFirewallRulesApi~updateNetworkApplianceFirewallCellularFirewallRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the cellular firewall rules of an MX network
     * Update the cellular firewall rules of an MX network
     * @param {Object} opts Optional parameters
     * @param {module:api/CellularFirewallRulesApi~updateNetworkApplianceFirewallCellularFirewallRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkApplianceFirewallCellularFirewallRules(networkId, opts, callback) {
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
        '/networks/{networkId}/appliance/firewall/cellularFirewallRules', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}