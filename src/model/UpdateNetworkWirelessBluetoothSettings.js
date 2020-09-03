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
    root.MerakiDashboardApi.UpdateNetworkWirelessBluetoothSettings = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateNetworkWirelessBluetoothSettings model module.
   * @module model/UpdateNetworkWirelessBluetoothSettings
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkWirelessBluetoothSettings</code>.
   * @alias module:model/UpdateNetworkWirelessBluetoothSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkWirelessBluetoothSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkWirelessBluetoothSettings} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkWirelessBluetoothSettings} The populated <code>UpdateNetworkWirelessBluetoothSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('scanningEnabled'))
        obj.scanningEnabled = ApiClient.convertToType(data['scanningEnabled'], 'Boolean');
      if (data.hasOwnProperty('advertisingEnabled'))
        obj.advertisingEnabled = ApiClient.convertToType(data['advertisingEnabled'], 'Boolean');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('majorMinorAssignmentMode'))
        obj.majorMinorAssignmentMode = ApiClient.convertToType(data['majorMinorAssignmentMode'], 'String');
      if (data.hasOwnProperty('major'))
        obj.major = ApiClient.convertToType(data['major'], 'Number');
      if (data.hasOwnProperty('minor'))
        obj.minor = ApiClient.convertToType(data['minor'], 'Number');
    }
    return obj;
  }

  /**
   * Whether APs will scan for Bluetooth enabled clients. (true, false)
   * @member {Boolean} scanningEnabled
   */
  exports.prototype.scanningEnabled = undefined;

  /**
   * Whether APs will advertise beacons. (true, false)
   * @member {Boolean} advertisingEnabled
   */
  exports.prototype.advertisingEnabled = undefined;

  /**
   * The UUID to be used in the beacon identifier.
   * @member {String} uuid
   */
  exports.prototype.uuid = undefined;

  /**
   * The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')
   * @member {module:model/UpdateNetworkWirelessBluetoothSettings.MajorMinorAssignmentModeEnum} majorMinorAssignmentMode
   */
  exports.prototype.majorMinorAssignmentMode = undefined;

  /**
   * The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.
   * @member {Number} major
   */
  exports.prototype.major = undefined;

  /**
   * The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.
   * @member {Number} minor
   */
  exports.prototype.minor = undefined;


  /**
   * Allowed values for the <code>majorMinorAssignmentMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MajorMinorAssignmentModeEnum = {
    /**
     * value: "Unique"
     * @const
     */
    unique: "Unique",

    /**
     * value: "Non-unique"
     * @const
     */
    nonUnique: "Non-unique"
  };

  return exports;

}));
