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
    define(['ApiClient', 'model/DevicesserialcellularGatewaylanFixedIpAssignments', 'model/DevicesserialcellularGatewaylanReservedIpRanges'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DevicesserialcellularGatewaylanFixedIpAssignments'), require('./DevicesserialcellularGatewaylanReservedIpRanges'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateDeviceCellularGatewayLan = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.DevicesserialcellularGatewaylanFixedIpAssignments, root.MerakiDashboardApi.DevicesserialcellularGatewaylanReservedIpRanges);
  }
}(this, function(ApiClient, DevicesserialcellularGatewaylanFixedIpAssignments, DevicesserialcellularGatewaylanReservedIpRanges) {
  'use strict';

  /**
   * The UpdateDeviceCellularGatewayLan model module.
   * @module model/UpdateDeviceCellularGatewayLan
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateDeviceCellularGatewayLan</code>.
   * @alias module:model/UpdateDeviceCellularGatewayLan
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateDeviceCellularGatewayLan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateDeviceCellularGatewayLan} obj Optional instance to populate.
   * @return {module:model/UpdateDeviceCellularGatewayLan} The populated <code>UpdateDeviceCellularGatewayLan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('reservedIpRanges'))
        obj.reservedIpRanges = ApiClient.convertToType(data['reservedIpRanges'], [DevicesserialcellularGatewaylanReservedIpRanges]);
      if (data.hasOwnProperty('fixedIpAssignments'))
        obj.fixedIpAssignments = ApiClient.convertToType(data['fixedIpAssignments'], [DevicesserialcellularGatewaylanFixedIpAssignments]);
    }
    return obj;
  }

  /**
   * list of all reserved IP ranges for a single MG
   * @member {Array.<module:model/DevicesserialcellularGatewaylanReservedIpRanges>} reservedIpRanges
   */
  exports.prototype.reservedIpRanges = undefined;

  /**
   * list of all fixed IP assignments for a single MG
   * @member {Array.<module:model/DevicesserialcellularGatewaylanFixedIpAssignments>} fixedIpAssignments
   */
  exports.prototype.fixedIpAssignments = undefined;

  return exports;

}));