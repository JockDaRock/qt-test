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
    define(['ApiClient', 'model/DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions', 'model/DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments', 'model/DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions'), require('./DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments'), require('./DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkSwitchStackRoutingInterfaceDhcp = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions, root.MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments, root.MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges);
  }
}(this, function(ApiClient, DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions, DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments, DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges) {
  'use strict';

  /**
   * The UpdateNetworkSwitchStackRoutingInterfaceDhcp model module.
   * @module model/UpdateNetworkSwitchStackRoutingInterfaceDhcp
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkSwitchStackRoutingInterfaceDhcp</code>.
   * @alias module:model/UpdateNetworkSwitchStackRoutingInterfaceDhcp
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkSwitchStackRoutingInterfaceDhcp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkSwitchStackRoutingInterfaceDhcp} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkSwitchStackRoutingInterfaceDhcp} The populated <code>UpdateNetworkSwitchStackRoutingInterfaceDhcp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dhcpMode'))
        obj.dhcpMode = ApiClient.convertToType(data['dhcpMode'], 'String');
      if (data.hasOwnProperty('dhcpRelayServerIps'))
        obj.dhcpRelayServerIps = ApiClient.convertToType(data['dhcpRelayServerIps'], ['String']);
      if (data.hasOwnProperty('dhcpLeaseTime'))
        obj.dhcpLeaseTime = ApiClient.convertToType(data['dhcpLeaseTime'], 'String');
      if (data.hasOwnProperty('dnsNameserversOption'))
        obj.dnsNameserversOption = ApiClient.convertToType(data['dnsNameserversOption'], 'String');
      if (data.hasOwnProperty('dnsCustomNameservers'))
        obj.dnsCustomNameservers = ApiClient.convertToType(data['dnsCustomNameservers'], ['String']);
      if (data.hasOwnProperty('bootOptionsEnabled'))
        obj.bootOptionsEnabled = ApiClient.convertToType(data['bootOptionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('bootNextServer'))
        obj.bootNextServer = ApiClient.convertToType(data['bootNextServer'], 'String');
      if (data.hasOwnProperty('bootFileName'))
        obj.bootFileName = ApiClient.convertToType(data['bootFileName'], 'String');
      if (data.hasOwnProperty('dhcpOptions'))
        obj.dhcpOptions = ApiClient.convertToType(data['dhcpOptions'], [DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions]);
      if (data.hasOwnProperty('reservedIpRanges'))
        obj.reservedIpRanges = ApiClient.convertToType(data['reservedIpRanges'], [DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges]);
      if (data.hasOwnProperty('fixedIpAssignments'))
        obj.fixedIpAssignments = ApiClient.convertToType(data['fixedIpAssignments'], [DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments]);
    }
    return obj;
  }

  /**
   * The DHCP mode options for the switch stack interface ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer')
   * @member {module:model/UpdateNetworkSwitchStackRoutingInterfaceDhcp.DhcpModeEnum} dhcpMode
   */
  exports.prototype.dhcpMode = undefined;

  /**
   * The DHCP relay server IPs to which DHCP packets would get relayed for the switch stack interface
   * @member {Array.<String>} dhcpRelayServerIps
   */
  exports.prototype.dhcpRelayServerIps = undefined;

  /**
   * The DHCP lease time config for the dhcp server running on switch stack interface ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week')
   * @member {module:model/UpdateNetworkSwitchStackRoutingInterfaceDhcp.DhcpLeaseTimeEnum} dhcpLeaseTime
   */
  exports.prototype.dhcpLeaseTime = undefined;

  /**
   * The DHCP name server option for the dhcp server running on the switch stack interface ('googlePublicDns', 'openDns' or 'custom')
   * @member {module:model/UpdateNetworkSwitchStackRoutingInterfaceDhcp.DnsNameserversOptionEnum} dnsNameserversOption
   */
  exports.prototype.dnsNameserversOption = undefined;

  /**
   * The DHCP name server IPs when DHCP name server option is 'custom'
   * @member {Array.<String>} dnsCustomNameservers
   */
  exports.prototype.dnsCustomNameservers = undefined;

  /**
   * Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch stack interface
   * @member {Boolean} bootOptionsEnabled
   */
  exports.prototype.bootOptionsEnabled = undefined;

  /**
   * The PXE boot server IP for the DHCP server running on the switch stack interface
   * @member {String} bootNextServer
   */
  exports.prototype.bootNextServer = undefined;

  /**
   * The PXE boot server file name for the DHCP server running on the switch stack interface
   * @member {String} bootFileName
   */
  exports.prototype.bootFileName = undefined;

  /**
   * Array of DHCP options consisting of code, type and value for the DHCP server running on the switch stack interface
   * @member {Array.<module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions>} dhcpOptions
   */
  exports.prototype.dhcpOptions = undefined;

  /**
   * Array of DHCP reserved IP assignments for the DHCP server running on the switch stack interface
   * @member {Array.<module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges>} reservedIpRanges
   */
  exports.prototype.reservedIpRanges = undefined;

  /**
   * Array of DHCP fixed IP assignments for the DHCP server running on the switch stack interface
   * @member {Array.<module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments>} fixedIpAssignments
   */
  exports.prototype.fixedIpAssignments = undefined;


  /**
   * Allowed values for the <code>dhcpMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DhcpModeEnum = {
    /**
     * value: "dhcpDisabled"
     * @const
     */
    dhcpDisabled: "dhcpDisabled",

    /**
     * value: "dhcpRelay"
     * @const
     */
    dhcpRelay: "dhcpRelay",

    /**
     * value: "dhcpServer"
     * @const
     */
    dhcpServer: "dhcpServer"
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


  /**
   * Allowed values for the <code>dnsNameserversOption</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DnsNameserversOptionEnum = {
    /**
     * value: "googlePublicDns"
     * @const
     */
    googlePublicDns: "googlePublicDns",

    /**
     * value: "openDns"
     * @const
     */
    openDns: "openDns",

    /**
     * value: "custom"
     * @const
     */
    custom: "custom"
  };

  return exports;

}));
