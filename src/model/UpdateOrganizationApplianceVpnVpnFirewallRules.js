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
    define(['ApiClient', 'model/OrganizationsorganizationIdappliancevpnvpnFirewallRulesRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrganizationsorganizationIdappliancevpnvpnFirewallRulesRules'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateOrganizationApplianceVpnVpnFirewallRules = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.OrganizationsorganizationIdappliancevpnvpnFirewallRulesRules);
  }
}(this, function(ApiClient, OrganizationsorganizationIdappliancevpnvpnFirewallRulesRules) {
  'use strict';

  /**
   * The UpdateOrganizationApplianceVpnVpnFirewallRules model module.
   * @module model/UpdateOrganizationApplianceVpnVpnFirewallRules
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateOrganizationApplianceVpnVpnFirewallRules</code>.
   * @alias module:model/UpdateOrganizationApplianceVpnVpnFirewallRules
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateOrganizationApplianceVpnVpnFirewallRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateOrganizationApplianceVpnVpnFirewallRules} obj Optional instance to populate.
   * @return {module:model/UpdateOrganizationApplianceVpnVpnFirewallRules} The populated <code>UpdateOrganizationApplianceVpnVpnFirewallRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('rules'))
        obj.rules = ApiClient.convertToType(data['rules'], [OrganizationsorganizationIdappliancevpnvpnFirewallRulesRules]);
      if (data.hasOwnProperty('syslogDefaultRule'))
        obj.syslogDefaultRule = ApiClient.convertToType(data['syslogDefaultRule'], 'Boolean');
    }
    return obj;
  }

  /**
   * An ordered array of the firewall rules (not including the default rule)
   * @member {Array.<module:model/OrganizationsorganizationIdappliancevpnvpnFirewallRulesRules>} rules
   */
  exports.prototype.rules = undefined;

  /**
   * Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)
   * @member {Boolean} syslogDefaultRule
   */
  exports.prototype.syslogDefaultRule = undefined;

  return exports;

}));
