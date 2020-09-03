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
    define(['ApiClient', 'model/NetworksnetworkIdswitchroutingmulticastDefaultSettings', 'model/NetworksnetworkIdswitchroutingmulticastOverrides'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdswitchroutingmulticastDefaultSettings'), require('./NetworksnetworkIdswitchroutingmulticastOverrides'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkSwitchRoutingMulticast = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdswitchroutingmulticastDefaultSettings, root.MerakiDashboardApi.NetworksnetworkIdswitchroutingmulticastOverrides);
  }
}(this, function(ApiClient, NetworksnetworkIdswitchroutingmulticastDefaultSettings, NetworksnetworkIdswitchroutingmulticastOverrides) {
  'use strict';

  /**
   * The UpdateNetworkSwitchRoutingMulticast model module.
   * @module model/UpdateNetworkSwitchRoutingMulticast
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkSwitchRoutingMulticast</code>.
   * @alias module:model/UpdateNetworkSwitchRoutingMulticast
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkSwitchRoutingMulticast</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkSwitchRoutingMulticast} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkSwitchRoutingMulticast} The populated <code>UpdateNetworkSwitchRoutingMulticast</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('defaultSettings'))
        obj.defaultSettings = NetworksnetworkIdswitchroutingmulticastDefaultSettings.constructFromObject(data['defaultSettings']);
      if (data.hasOwnProperty('overrides'))
        obj.overrides = ApiClient.convertToType(data['overrides'], [NetworksnetworkIdswitchroutingmulticastOverrides]);
    }
    return obj;
  }

  /**
   * @member {module:model/NetworksnetworkIdswitchroutingmulticastDefaultSettings} defaultSettings
   */
  exports.prototype.defaultSettings = undefined;

  /**
   * Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings.
   * @member {Array.<module:model/NetworksnetworkIdswitchroutingmulticastOverrides>} overrides
   */
  exports.prototype.overrides = undefined;

  return exports;

}));