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
    define(['ApiClient', 'model/NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges', 'model/NetworksnetworkIdappliancevlansvlanIdDhcpOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges'), require('./NetworksnetworkIdappliancevlansvlanIdDhcpOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkApplianceVlan = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges, root.MerakiDashboardApi.NetworksnetworkIdappliancevlansvlanIdDhcpOptions);
  }
}(this, function(ApiClient, NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges, NetworksnetworkIdappliancevlansvlanIdDhcpOptions) {
  'use strict';

  /**
   * The UpdateNetworkApplianceVlan model module.
   * @module model/UpdateNetworkApplianceVlan
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkApplianceVlan</code>.
   * @alias module:model/UpdateNetworkApplianceVlan
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkApplianceVlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkApplianceVlan} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkApplianceVlan} The populated <code>UpdateNetworkApplianceVlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('subnet'))
        obj.subnet = ApiClient.convertToType(data['subnet'], 'String');
      if (data.hasOwnProperty('applianceIp'))
        obj.applianceIp = ApiClient.convertToType(data['applianceIp'], 'String');
      if (data.hasOwnProperty('groupPolicyId'))
        obj.groupPolicyId = ApiClient.convertToType(data['groupPolicyId'], 'String');
      if (data.hasOwnProperty('vpnNatSubnet'))
        obj.vpnNatSubnet = ApiClient.convertToType(data['vpnNatSubnet'], 'String');
      if (data.hasOwnProperty('dhcpHandling'))
        obj.dhcpHandling = ApiClient.convertToType(data['dhcpHandling'], 'String');
      if (data.hasOwnProperty('dhcpRelayServerIps'))
        obj.dhcpRelayServerIps = ApiClient.convertToType(data['dhcpRelayServerIps'], ['String']);
      if (data.hasOwnProperty('dhcpLeaseTime'))
        obj.dhcpLeaseTime = ApiClient.convertToType(data['dhcpLeaseTime'], 'String');
      if (data.hasOwnProperty('dhcpBootOptionsEnabled'))
        obj.dhcpBootOptionsEnabled = ApiClient.convertToType(data['dhcpBootOptionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('dhcpBootNextServer'))
        obj.dhcpBootNextServer = ApiClient.convertToType(data['dhcpBootNextServer'], 'String');
      if (data.hasOwnProperty('dhcpBootFilename'))
        obj.dhcpBootFilename = ApiClient.convertToType(data['dhcpBootFilename'], 'String');
      if (data.hasOwnProperty('fixedIpAssignments'))
        obj.fixedIpAssignments = ApiClient.convertToType(data['fixedIpAssignments'], Object);
      if (data.hasOwnProperty('reservedIpRanges'))
        obj.reservedIpRanges = ApiClient.convertToType(data['reservedIpRanges'], [NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges]);
      if (data.hasOwnProperty('dnsNameservers'))
        obj.dnsNameservers = ApiClient.convertToType(data['dnsNameservers'], 'String');
      if (data.hasOwnProperty('dhcpOptions'))
        obj.dhcpOptions = ApiClient.convertToType(data['dhcpOptions'], [NetworksnetworkIdappliancevlansvlanIdDhcpOptions]);
    }
    return obj;
  }

  /**
   * The name of the VLAN
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The subnet of the VLAN
   * @member {String} subnet
   */
  exports.prototype.subnet = undefined;

  /**
   * The local IP of the appliance on the VLAN
   * @member {String} applianceIp
   */
  exports.prototype.applianceIp = undefined;

  /**
   * The id of the desired group policy to apply to the VLAN
   * @member {String} groupPolicyId
   */
  exports.prototype.groupPolicyId = undefined;

  /**
   * The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN
   * @member {String} vpnNatSubnet
   */
  exports.prototype.vpnNatSubnet = undefined;

  /**
   * The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'
   * @member {module:model/UpdateNetworkApplianceVlan.DhcpHandlingEnum} dhcpHandling
   */
  exports.prototype.dhcpHandling = undefined;

  /**
   * The IPs of the DHCP servers that DHCP requests should be relayed to
   * @member {Array.<String>} dhcpRelayServerIps
   */
  exports.prototype.dhcpRelayServerIps = undefined;

  /**
   * The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'
   * @member {module:model/UpdateNetworkApplianceVlan.DhcpLeaseTimeEnum} dhcpLeaseTime
   */
  exports.prototype.dhcpLeaseTime = undefined;

  /**
   * Use DHCP boot options specified in other properties
   * @member {Boolean} dhcpBootOptionsEnabled
   */
  exports.prototype.dhcpBootOptionsEnabled = undefined;

  /**
   * DHCP boot option to direct boot clients to the server to load the boot file from
   * @member {String} dhcpBootNextServer
   */
  exports.prototype.dhcpBootNextServer = undefined;

  /**
   * DHCP boot option for boot filename
   * @member {String} dhcpBootFilename
   */
  exports.prototype.dhcpBootFilename = undefined;

  /**
   * The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain \"ip\" and \"name\" string fields. See the sample request/response for more details.
   * @member {Object} fixedIpAssignments
   */
  exports.prototype.fixedIpAssignments = undefined;

  /**
   * The DHCP reserved IP ranges on the VLAN
   * @member {Array.<module:model/NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges>} reservedIpRanges
   */
  exports.prototype.reservedIpRanges = undefined;

  /**
   * The DNS nameservers used for DHCP responses, either \"upstream_dns\", \"google_dns\", \"opendns\", or a newline seperated string of IP addresses or domain names
   * @member {String} dnsNameservers
   */
  exports.prototype.dnsNameservers = undefined;

  /**
   * The list of DHCP options that will be included in DHCP responses. Each object in the list should have \"code\", \"type\", and \"value\" properties.
   * @member {Array.<module:model/NetworksnetworkIdappliancevlansvlanIdDhcpOptions>} dhcpOptions
   */
  exports.prototype.dhcpOptions = undefined;


  /**
   * Allowed values for the <code>dhcpHandling</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DhcpHandlingEnum = {
    /**
     * value: "Run a DHCP server"
     * @const
     */
    runADHCPServer: "Run a DHCP server",

    /**
     * value: "Relay DHCP to another server"
     * @const
     */
    relayDHCPToAnotherServer: "Relay DHCP to another server",

    /**
     * value: "Do not respond to DHCP requests"
     * @const
     */
    doNotRespondToDHCPRequests: "Do not respond to DHCP requests"
  };


  /**
   * Allowed values for the <code>dhcpLeaseTime</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DhcpLeaseTimeEnum = {
    /**
     * value: "30 minutes"
     * @const
     */
    _30Minutes: "30 minutes",

    /**
     * value: "1 hour"
     * @const
     */
    _1Hour: "1 hour",

    /**
     * value: "4 hours"
     * @const
     */
    _4Hours: "4 hours",

    /**
     * value: "12 hours"
     * @const
     */
    _12Hours: "12 hours",

    /**
     * value: "1 day"
     * @const
     */
    _1Day: "1 day",

    /**
     * value: "1 week"
     * @const
     */
    _1Week: "1 week"
  };

  return exports;

}));
