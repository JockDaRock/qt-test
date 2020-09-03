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
    define(['ApiClient', 'model/NetworksnetworkIdswitchaccessControlListsRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdswitchaccessControlListsRules'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkSwitchAccessControlLists = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdswitchaccessControlListsRules);
  }
}(this, function(ApiClient, NetworksnetworkIdswitchaccessControlListsRules) {
  'use strict';

  /**
   * The UpdateNetworkSwitchAccessControlLists model module.
   * @module model/UpdateNetworkSwitchAccessControlLists
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkSwitchAccessControlLists</code>.
   * @alias module:model/UpdateNetworkSwitchAccessControlLists
   * @class
   * @param rules {Array.<module:model/NetworksnetworkIdswitchaccessControlListsRules>} An ordered array of the access control list rules (not including the default rule). An empty array will clear the rules.
   */
  var exports = function(rules) {
    this.rules = rules;
  };

  /**
   * Constructs a <code>UpdateNetworkSwitchAccessControlLists</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkSwitchAccessControlLists} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkSwitchAccessControlLists} The populated <code>UpdateNetworkSwitchAccessControlLists</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('rules'))
        obj.rules = ApiClient.convertToType(data['rules'], [NetworksnetworkIdswitchaccessControlListsRules]);
    }
    return obj;
  }

  /**
   * An ordered array of the access control list rules (not including the default rule). An empty array will clear the rules.
   * @member {Array.<module:model/NetworksnetworkIdswitchaccessControlListsRules>} rules
   */
  exports.prototype.rules = undefined;

  return exports;

}));
