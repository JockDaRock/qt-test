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
import Body127 from '../model/Body127';
import Body128 from '../model/Body128';
import Body45 from '../model/Body45';

/**
* Vpn service.
* @module api/VpnApi
* @version 1.0.0
*/
export default class VpnApi {

    /**
    * Constructs a new VpnApi. 
    * @alias module:api/VpnApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNetworkApplianceVpnSiteToSiteVpn operation.
     * @callback module:api/VpnApi~getNetworkApplianceVpnSiteToSiteVpnCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the site-to-site VPN settings of a network. Only valid for MX networks.
     * Return the site-to-site VPN settings of a network. Only valid for MX networks.
     * @param {module:api/VpnApi~getNetworkApplianceVpnSiteToSiteVpnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkApplianceVpnSiteToSiteVpn(networkId, callback) {
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
        '/networks/{networkId}/appliance/vpn/siteToSiteVpn', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationApplianceVpnStats operation.
     * @callback module:api/VpnApi~getOrganizationApplianceVpnStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show VPN history stat for networks in an organization
     * Show VPN history stat for networks in an organization
     * @param {Object} opts Optional parameters
     * @param {module:api/VpnApi~getOrganizationApplianceVpnStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationApplianceVpnStats(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
        'perPage': opts['perPage'],
        'startingAfter': opts['startingAfter'],
        'endingBefore': opts['endingBefore'],
        'networkIds': this.apiClient.buildCollectionParam(opts['networkIds'], 'csv'),
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan']
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
        '/organizations/{organizationId}/appliance/vpn/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationApplianceVpnStatuses operation.
     * @callback module:api/VpnApi~getOrganizationApplianceVpnStatusesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show VPN status for networks in an organization
     * Show VPN status for networks in an organization
     * @param {Object} opts Optional parameters
     * @param {module:api/VpnApi~getOrganizationApplianceVpnStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationApplianceVpnStatuses(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
        'perPage': opts['perPage'],
        'startingAfter': opts['startingAfter'],
        'endingBefore': opts['endingBefore'],
        'networkIds': this.apiClient.buildCollectionParam(opts['networkIds'], 'csv')
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
        '/organizations/{organizationId}/appliance/vpn/statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationApplianceVpnThirdPartyVPNPeers operation.
     * @callback module:api/VpnApi~getOrganizationApplianceVpnThirdPartyVPNPeersCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the third party VPN peers for an organization
     * Return the third party VPN peers for an organization
     * @param {module:api/VpnApi~getOrganizationApplianceVpnThirdPartyVPNPeersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationApplianceVpnThirdPartyVPNPeers(organizationId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId
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
        '/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationApplianceVpnVpnFirewallRules operation.
     * @callback module:api/VpnApi~getOrganizationApplianceVpnVpnFirewallRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the firewall rules for an organization&#x27;s site-to-site VPN
     * Return the firewall rules for an organization&#x27;s site-to-site VPN
     * @param {module:api/VpnApi~getOrganizationApplianceVpnVpnFirewallRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationApplianceVpnVpnFirewallRules(organizationId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId
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
        '/organizations/{organizationId}/appliance/vpn/vpnFirewallRules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNetworkApplianceVpnSiteToSiteVpn operation.
     * @callback module:api/VpnApi~updateNetworkApplianceVpnSiteToSiteVpnCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
     * Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
     * @param {module:api/VpnApi~updateNetworkApplianceVpnSiteToSiteVpnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkApplianceVpnSiteToSiteVpn(body, networkId, callback) {
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
        '/networks/{networkId}/appliance/vpn/siteToSiteVpn', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrganizationApplianceVpnThirdPartyVPNPeers operation.
     * @callback module:api/VpnApi~updateOrganizationApplianceVpnThirdPartyVPNPeersCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the third party VPN peers for an organization
     * Update the third party VPN peers for an organization
     * @param {module:api/VpnApi~updateOrganizationApplianceVpnThirdPartyVPNPeersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateOrganizationApplianceVpnThirdPartyVPNPeers(body, organizationId, callback) {
      let postBody = body;

      let pathParams = {
        'organizationId': organizationId
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
        '/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrganizationApplianceVpnVpnFirewallRules operation.
     * @callback module:api/VpnApi~updateOrganizationApplianceVpnVpnFirewallRulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the firewall rules of an organization&#x27;s site-to-site VPN
     * Update the firewall rules of an organization&#x27;s site-to-site VPN
     * @param {Object} opts Optional parameters
     * @param {module:api/VpnApi~updateOrganizationApplianceVpnVpnFirewallRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateOrganizationApplianceVpnVpnFirewallRules(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'organizationId': organizationId
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
        '/organizations/{organizationId}/appliance/vpn/vpnFirewallRules', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
