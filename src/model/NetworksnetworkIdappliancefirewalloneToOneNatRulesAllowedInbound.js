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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound model module.
   * @module model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound</code>.
   * @alias module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound} The populated <code>NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('protocol'))
        obj.protocol = ApiClient.convertToType(data['protocol'], 'String');
      if (data.hasOwnProperty('destinationPorts'))
        obj.destinationPorts = ApiClient.convertToType(data['destinationPorts'], ['String']);
      if (data.hasOwnProperty('allowedIps'))
        obj.allowedIps = ApiClient.convertToType(data['allowedIps'], ['String']);
    }
    return obj;
  }

  /**
   * Either of the following: 'tcp', 'udp', 'icmp-ping' or 'any'
   * @member {module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound.ProtocolEnum} protocol
   */
  exports.prototype.protocol = undefined;

  /**
   * An array of ports or port ranges that will be forwarded to the host on the LAN
   * @member {Array.<String>} destinationPorts
   */
  exports.prototype.destinationPorts = undefined;

  /**
   * An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges, or 'any'
   * @member {Array.<String>} allowedIps
   */
  exports.prototype.allowedIps = undefined;


  /**
   * Allowed values for the <code>protocol</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProtocolEnum = {
    /**
     * value: "tcp"
     * @const
     */
    tcp: "tcp",

    /**
     * value: "udp"
     * @const
     */
    udp: "udp",

    /**
     * value: "icmp-ping"
     * @const
     */
    icmpPing: "icmp-ping",

    /**
     * value: "any"
     * @const
     */
    any: "any"
  };

  return exports;

}));
