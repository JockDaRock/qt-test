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
    define(['ApiClient', 'model/NetworksnetworkIdfirmwareUpgradesUpgradeWindow'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdfirmwareUpgradesUpgradeWindow'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkFirmwareUpgrades = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdfirmwareUpgradesUpgradeWindow);
  }
}(this, function(ApiClient, NetworksnetworkIdfirmwareUpgradesUpgradeWindow) {
  'use strict';

  /**
   * The UpdateNetworkFirmwareUpgrades model module.
   * @module model/UpdateNetworkFirmwareUpgrades
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkFirmwareUpgrades</code>.
   * @alias module:model/UpdateNetworkFirmwareUpgrades
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkFirmwareUpgrades</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkFirmwareUpgrades} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkFirmwareUpgrades} The populated <code>UpdateNetworkFirmwareUpgrades</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('upgradeWindow'))
        obj.upgradeWindow = NetworksnetworkIdfirmwareUpgradesUpgradeWindow.constructFromObject(data['upgradeWindow']);
    }
    return obj;
  }

  /**
   * @member {module:model/NetworksnetworkIdfirmwareUpgradesUpgradeWindow} upgradeWindow
   */
  exports.prototype.upgradeWindow = undefined;

  return exports;

}));