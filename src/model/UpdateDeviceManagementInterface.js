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
    define(['ApiClient', 'model/DevicesserialmanagementInterfaceWan1', 'model/DevicesserialmanagementInterfaceWan2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DevicesserialmanagementInterfaceWan1'), require('./DevicesserialmanagementInterfaceWan2'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateDeviceManagementInterface = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.DevicesserialmanagementInterfaceWan1, root.MerakiDashboardApi.DevicesserialmanagementInterfaceWan2);
  }
}(this, function(ApiClient, DevicesserialmanagementInterfaceWan1, DevicesserialmanagementInterfaceWan2) {
  'use strict';

  /**
   * The UpdateDeviceManagementInterface model module.
   * @module model/UpdateDeviceManagementInterface
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateDeviceManagementInterface</code>.
   * @alias module:model/UpdateDeviceManagementInterface
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateDeviceManagementInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateDeviceManagementInterface} obj Optional instance to populate.
   * @return {module:model/UpdateDeviceManagementInterface} The populated <code>UpdateDeviceManagementInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wan1'))
        obj.wan1 = DevicesserialmanagementInterfaceWan1.constructFromObject(data['wan1']);
      if (data.hasOwnProperty('wan2'))
        obj.wan2 = DevicesserialmanagementInterfaceWan2.constructFromObject(data['wan2']);
    }
    return obj;
  }

  /**
   * @member {module:model/DevicesserialmanagementInterfaceWan1} wan1
   */
  exports.prototype.wan1 = undefined;

  /**
   * @member {module:model/DevicesserialmanagementInterfaceWan2} wan2
   */
  exports.prototype.wan2 = undefined;

  return exports;

}));
