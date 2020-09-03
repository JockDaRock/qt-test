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
    define(['ApiClient', 'model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.NetworksnetworkIdappliancefirewalloneToOneNatRulesRules = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound);
  }
}(this, function(ApiClient, NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound) {
  'use strict';

  /**
   * The NetworksnetworkIdappliancefirewalloneToOneNatRulesRules model module.
   * @module model/NetworksnetworkIdappliancefirewalloneToOneNatRulesRules
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdappliancefirewalloneToOneNatRulesRules</code>.
   * @alias module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesRules
   * @class
   * @param lanIp {String} The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
   */
  var exports = function(lanIp) {
    this.lanIp = lanIp;
  };

  /**
   * Constructs a <code>NetworksnetworkIdappliancefirewalloneToOneNatRulesRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesRules} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesRules} The populated <code>NetworksnetworkIdappliancefirewalloneToOneNatRulesRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('publicIp'))
        obj.publicIp = ApiClient.convertToType(data['publicIp'], 'String');
      if (data.hasOwnProperty('lanIp'))
        obj.lanIp = ApiClient.convertToType(data['lanIp'], 'String');
      if (data.hasOwnProperty('uplink'))
        obj.uplink = ApiClient.convertToType(data['uplink'], 'String');
      if (data.hasOwnProperty('allowedInbound'))
        obj.allowedInbound = ApiClient.convertToType(data['allowedInbound'], [NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound]);
    }
    return obj;
  }

  /**
   * A descriptive name for the rule
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The IP address that will be used to access the internal resource from the WAN
   * @member {String} publicIp
   */
  exports.prototype.publicIp = undefined;

  /**
   * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
   * @member {String} lanIp
   */
  exports.prototype.lanIp = undefined;

  /**
   * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')
   * @member {module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesRules.UplinkEnum} uplink
   */
  exports.prototype.uplink = undefined;

  /**
   * The ports this mapping will provide access on, and the remote IPs that will be allowed access to the resource
   * @member {Array.<module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound>} allowedInbound
   */
  exports.prototype.allowedInbound = undefined;


  /**
   * Allowed values for the <code>uplink</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UplinkEnum = {
    /**
     * value: "internet1"
     * @const
     */
    internet1: "internet1",

    /**
     * value: "internet2"
     * @const
     */
    internet2: "internet2"
  };

  return exports;

}));
