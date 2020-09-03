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
    root.MerakiDashboardApi.CycleDeviceSwitchPorts = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CycleDeviceSwitchPorts model module.
   * @module model/CycleDeviceSwitchPorts
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CycleDeviceSwitchPorts</code>.
   * @alias module:model/CycleDeviceSwitchPorts
   * @class
   * @param ports {Array.<String>} List of switch ports. Example: [1, 2-5, 1_MA-MOD-8X10G_1, 1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8]
   */
  var exports = function(ports) {
    this.ports = ports;
  };

  /**
   * Constructs a <code>CycleDeviceSwitchPorts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CycleDeviceSwitchPorts} obj Optional instance to populate.
   * @return {module:model/CycleDeviceSwitchPorts} The populated <code>CycleDeviceSwitchPorts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ports'))
        obj.ports = ApiClient.convertToType(data['ports'], ['String']);
    }
    return obj;
  }

  /**
   * List of switch ports. Example: [1, 2-5, 1_MA-MOD-8X10G_1, 1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8]
   * @member {Array.<String>} ports
   */
  exports.prototype.ports = undefined;

  return exports;

}));
