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
    root.MerakiDashboardApi.NetworksnetworkIdswitchaccessControlListsRules = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdswitchaccessControlListsRules model module.
   * @module model/NetworksnetworkIdswitchaccessControlListsRules
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdswitchaccessControlListsRules</code>.
   * @alias module:model/NetworksnetworkIdswitchaccessControlListsRules
   * @class
   * @param policy {module:model/NetworksnetworkIdswitchaccessControlListsRules.PolicyEnum} 'allow' or 'deny' traffic specified by this rule.
   * @param protocol {module:model/NetworksnetworkIdswitchaccessControlListsRules.ProtocolEnum} The type of protocol (must be 'tcp', 'udp', or 'any').
   * @param srcCidr {String} Source IP address (in IP or CIDR notation) or 'any'.
   * @param dstCidr {String} Destination IP address (in IP or CIDR notation) or 'any'.
   */
  var exports = function(policy, protocol, srcCidr, dstCidr) {
    this.policy = policy;
    this.protocol = protocol;
    this.srcCidr = srcCidr;
    this.dstCidr = dstCidr;
  };

  /**
   * Constructs a <code>NetworksnetworkIdswitchaccessControlListsRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdswitchaccessControlListsRules} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdswitchaccessControlListsRules} The populated <code>NetworksnetworkIdswitchaccessControlListsRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('comment'))
        obj.comment = ApiClient.convertToType(data['comment'], 'String');
      if (data.hasOwnProperty('policy'))
        obj.policy = ApiClient.convertToType(data['policy'], 'String');
      if (data.hasOwnProperty('ipVersion'))
        obj.ipVersion = ApiClient.convertToType(data['ipVersion'], 'String');
      if (data.hasOwnProperty('protocol'))
        obj.protocol = ApiClient.convertToType(data['protocol'], 'String');
      if (data.hasOwnProperty('srcCidr'))
        obj.srcCidr = ApiClient.convertToType(data['srcCidr'], 'String');
      if (data.hasOwnProperty('srcPort'))
        obj.srcPort = ApiClient.convertToType(data['srcPort'], 'String');
      if (data.hasOwnProperty('dstCidr'))
        obj.dstCidr = ApiClient.convertToType(data['dstCidr'], 'String');
      if (data.hasOwnProperty('dstPort'))
        obj.dstPort = ApiClient.convertToType(data['dstPort'], 'String');
      if (data.hasOwnProperty('vlan'))
        obj.vlan = ApiClient.convertToType(data['vlan'], 'String');
    }
    return obj;
  }

  /**
   * Description of the rule (optional).
   * @member {String} comment
   */
  exports.prototype.comment = undefined;

  /**
   * 'allow' or 'deny' traffic specified by this rule.
   * @member {module:model/NetworksnetworkIdswitchaccessControlListsRules.PolicyEnum} policy
   */
  exports.prototype.policy = undefined;

  /**
   * IP address version (must be 'any', 'ipv4' or 'ipv6'). Applicable only if network supports IPv6. Default value is 'ipv4'.
   * @member {module:model/NetworksnetworkIdswitchaccessControlListsRules.IpVersionEnum} ipVersion
   */
  exports.prototype.ipVersion = undefined;

  /**
   * The type of protocol (must be 'tcp', 'udp', or 'any').
   * @member {module:model/NetworksnetworkIdswitchaccessControlListsRules.ProtocolEnum} protocol
   */
  exports.prototype.protocol = undefined;

  /**
   * Source IP address (in IP or CIDR notation) or 'any'.
   * @member {String} srcCidr
   */
  exports.prototype.srcCidr = undefined;

  /**
   * Source port. Must be in the range  of 1-65535 or 'any'. Default is 'any'.
   * @member {String} srcPort
   */
  exports.prototype.srcPort = undefined;

  /**
   * Destination IP address (in IP or CIDR notation) or 'any'.
   * @member {String} dstCidr
   */
  exports.prototype.dstCidr = undefined;

  /**
   * Destination port. Must be in the range of 1-65535 or 'any'. Default is 'any'.
   * @member {String} dstPort
   */
  exports.prototype.dstPort = undefined;

  /**
   * Incoming traffic VLAN. Must be in the range of 1-4095 or 'any'. Default is 'any'.
   * @member {String} vlan
   */
  exports.prototype.vlan = undefined;


  /**
   * Allowed values for the <code>policy</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PolicyEnum = {
    /**
     * value: "allow"
     * @const
     */
    allow: "allow",

    /**
     * value: "deny"
     * @const
     */
    deny: "deny"
  };


  /**
   * Allowed values for the <code>ipVersion</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IpVersionEnum = {
    /**
     * value: "any"
     * @const
     */
    any: "any",

    /**
     * value: "ipv4"
     * @const
     */
    ipv4: "ipv4",

    /**
     * value: "ipv6"
     * @const
     */
    ipv6: "ipv6"
  };


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
     * value: "any"
     * @const
     */
    any: "any"
  };

  return exports;

}));
