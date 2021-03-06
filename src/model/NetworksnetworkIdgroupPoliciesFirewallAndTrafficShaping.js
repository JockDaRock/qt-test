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
    define(['ApiClient', 'model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules', 'model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules', 'model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingTrafficShapingRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules'), require('./NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules'), require('./NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingTrafficShapingRules'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules, root.MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules, root.MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingTrafficShapingRules);
  }
}(this, function(ApiClient, NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules, NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules, NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingTrafficShapingRules) {
  'use strict';

  /**
   * The NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping model module.
   * @module model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping</code>.
   *     The firewall and traffic shaping rules and settings for your policy. 
   * @alias module:model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping} The populated <code>NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('settings'))
        obj.settings = ApiClient.convertToType(data['settings'], 'String');
      if (data.hasOwnProperty('trafficShapingRules'))
        obj.trafficShapingRules = ApiClient.convertToType(data['trafficShapingRules'], [NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingTrafficShapingRules]);
      if (data.hasOwnProperty('l3FirewallRules'))
        obj.l3FirewallRules = ApiClient.convertToType(data['l3FirewallRules'], [NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules]);
      if (data.hasOwnProperty('l7FirewallRules'))
        obj.l7FirewallRules = ApiClient.convertToType(data['l7FirewallRules'], [NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules]);
    }
    return obj;
  }

  /**
   * How firewall and traffic shaping rules are enforced. Can be 'network default', 'ignore' or 'custom'.
   * @member {module:model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping.SettingsEnum} settings
   */
  exports.prototype.settings = undefined;

  /**
   *     An array of traffic shaping rules. Rules are applied in the order that     they are specified in. An empty list (or null) means no rules. Note that     you are allowed a maximum of 8 rules. 
   * @member {Array.<module:model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingTrafficShapingRules>} trafficShapingRules
   */
  exports.prototype.trafficShapingRules = undefined;

  /**
   * An ordered array of the L3 firewall rules
   * @member {Array.<module:model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules>} l3FirewallRules
   */
  exports.prototype.l3FirewallRules = undefined;

  /**
   * An ordered array of L7 firewall rules
   * @member {Array.<module:model/NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules>} l7FirewallRules
   */
  exports.prototype.l7FirewallRules = undefined;


  /**
   * Allowed values for the <code>settings</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SettingsEnum = {
    /**
     * value: "network default"
     * @const
     */
    networkDefault: "network default",

    /**
     * value: "ignore"
     * @const
     */
    ignore: "ignore",

    /**
     * value: "custom"
     * @const
     */
    custom: "custom"
  };

  return exports;

}));
