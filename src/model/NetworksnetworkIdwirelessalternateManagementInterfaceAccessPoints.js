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
    root.MerakiDashboardApi.NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints model module.
   * @module model/NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints</code>.
   * @alias module:model/NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints
   * @class
   * @param serial {String} Serial number of access point to be configured with alternate management IP
   * @param alternateManagementIp {String} Wireless alternate management interface device IP. Provide an empty string to remove alternate management IP assignment
   */
  var exports = function(serial, alternateManagementIp) {
    this.serial = serial;
    this.alternateManagementIp = alternateManagementIp;
  };

  /**
   * Constructs a <code>NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints} The populated <code>NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('serial'))
        obj.serial = ApiClient.convertToType(data['serial'], 'String');
      if (data.hasOwnProperty('alternateManagementIp'))
        obj.alternateManagementIp = ApiClient.convertToType(data['alternateManagementIp'], 'String');
      if (data.hasOwnProperty('subnetMask'))
        obj.subnetMask = ApiClient.convertToType(data['subnetMask'], 'String');
      if (data.hasOwnProperty('gateway'))
        obj.gateway = ApiClient.convertToType(data['gateway'], 'String');
      if (data.hasOwnProperty('dns1'))
        obj.dns1 = ApiClient.convertToType(data['dns1'], 'String');
      if (data.hasOwnProperty('dns2'))
        obj.dns2 = ApiClient.convertToType(data['dns2'], 'String');
    }
    return obj;
  }

  /**
   * Serial number of access point to be configured with alternate management IP
   * @member {String} serial
   */
  exports.prototype.serial = undefined;

  /**
   * Wireless alternate management interface device IP. Provide an empty string to remove alternate management IP assignment
   * @member {String} alternateManagementIp
   */
  exports.prototype.alternateManagementIp = undefined;

  /**
   * Subnet mask must be in IP format
   * @member {String} subnetMask
   */
  exports.prototype.subnetMask = undefined;

  /**
   * Gateway must be in IP format
   * @member {String} gateway
   */
  exports.prototype.gateway = undefined;

  /**
   * Primary DNS must be in IP format
   * @member {String} dns1
   */
  exports.prototype.dns1 = undefined;

  /**
   * Optional secondary DNS must be in IP format
   * @member {String} dns2
   */
  exports.prototype.dns2 = undefined;

  return exports;

}));
