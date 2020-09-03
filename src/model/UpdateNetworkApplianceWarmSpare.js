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
    root.MerakiDashboardApi.UpdateNetworkApplianceWarmSpare = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateNetworkApplianceWarmSpare model module.
   * @module model/UpdateNetworkApplianceWarmSpare
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkApplianceWarmSpare</code>.
   * @alias module:model/UpdateNetworkApplianceWarmSpare
   * @class
   * @param enabled {Boolean} Enable warm spare
   */
  var exports = function(enabled) {
    this.enabled = enabled;
  };

  /**
   * Constructs a <code>UpdateNetworkApplianceWarmSpare</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkApplianceWarmSpare} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkApplianceWarmSpare} The populated <code>UpdateNetworkApplianceWarmSpare</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('spareSerial'))
        obj.spareSerial = ApiClient.convertToType(data['spareSerial'], 'String');
      if (data.hasOwnProperty('uplinkMode'))
        obj.uplinkMode = ApiClient.convertToType(data['uplinkMode'], 'String');
      if (data.hasOwnProperty('virtualIp1'))
        obj.virtualIp1 = ApiClient.convertToType(data['virtualIp1'], 'String');
      if (data.hasOwnProperty('virtualIp2'))
        obj.virtualIp2 = ApiClient.convertToType(data['virtualIp2'], 'String');
    }
    return obj;
  }

  /**
   * Enable warm spare
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * Serial number of the warm spare appliance
   * @member {String} spareSerial
   */
  exports.prototype.spareSerial = undefined;

  /**
   * Uplink mode, either virtual or public
   * @member {String} uplinkMode
   */
  exports.prototype.uplinkMode = undefined;

  /**
   * The WAN 1 shared IP
   * @member {String} virtualIp1
   */
  exports.prototype.virtualIp1 = undefined;

  /**
   * The WAN 2 shared IP
   * @member {String} virtualIp2
   */
  exports.prototype.virtualIp2 = undefined;

  return exports;

}));
