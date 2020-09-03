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
    root.MerakiDashboardApi.NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules model module.
   * @module model/NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules</code>.
   * @alias module:model/NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules} The populated <code>NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('protocol'))
        obj.protocol = ApiClient.convertToType(data['protocol'], 'String');
      if (data.hasOwnProperty('publicPort'))
        obj.publicPort = ApiClient.convertToType(data['publicPort'], 'String');
      if (data.hasOwnProperty('localIp'))
        obj.localIp = ApiClient.convertToType(data['localIp'], 'String');
      if (data.hasOwnProperty('localPort'))
        obj.localPort = ApiClient.convertToType(data['localPort'], 'String');
      if (data.hasOwnProperty('allowedIps'))
        obj.allowedIps = ApiClient.convertToType(data['allowedIps'], ['String']);
    }
    return obj;
  }

  /**
   * A description of the rule
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * 'tcp' or 'udp'
   * @member {module:model/NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules.ProtocolEnum} protocol
   */
  exports.prototype.protocol = undefined;

  /**
   * Destination port of the traffic that is arriving on the WAN
   * @member {String} publicPort
   */
  exports.prototype.publicPort = undefined;

  /**
   * Local IP address to which traffic will be forwarded
   * @member {String} localIp
   */
  exports.prototype.localIp = undefined;

  /**
   * Destination port of the forwarded traffic that will be sent from the MX to the specified host on the LAN. If you simply wish to forward the traffic without translating the port, this should be the same as the Public port
   * @member {String} localPort
   */
  exports.prototype.localPort = undefined;

  /**
   * Remote IP addresses or ranges that are permitted to access the internal resource via this port forwarding rule, or 'any'
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
    udp: "udp"
  };

  return exports;

}));
