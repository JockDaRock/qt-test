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
    define(['ApiClient', 'model/NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkApplianceStaticRoute = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges);
  }
}(this, function(ApiClient, NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges) {
  'use strict';

  /**
   * The UpdateNetworkApplianceStaticRoute model module.
   * @module model/UpdateNetworkApplianceStaticRoute
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkApplianceStaticRoute</code>.
   * @alias module:model/UpdateNetworkApplianceStaticRoute
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkApplianceStaticRoute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkApplianceStaticRoute} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkApplianceStaticRoute} The populated <code>UpdateNetworkApplianceStaticRoute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('subnet'))
        obj.subnet = ApiClient.convertToType(data['subnet'], 'String');
      if (data.hasOwnProperty('gatewayIp'))
        obj.gatewayIp = ApiClient.convertToType(data['gatewayIp'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('fixedIpAssignments'))
        obj.fixedIpAssignments = ApiClient.convertToType(data['fixedIpAssignments'], Object);
      if (data.hasOwnProperty('reservedIpRanges'))
        obj.reservedIpRanges = ApiClient.convertToType(data['reservedIpRanges'], [NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges]);
    }
    return obj;
  }

  /**
   * The name of the static route
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The subnet of the static route
   * @member {String} subnet
   */
  exports.prototype.subnet = undefined;

  /**
   * The gateway IP (next hop) of the static route
   * @member {String} gatewayIp
   */
  exports.prototype.gatewayIp = undefined;

  /**
   * The enabled state of the static route
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * The DHCP fixed IP assignments on the static route. This should be an object that contains mappings from MAC addresses to objects that themselves each contain \"ip\" and \"name\" string fields. See the sample request/response for more details.
   * @member {Object} fixedIpAssignments
   */
  exports.prototype.fixedIpAssignments = undefined;

  /**
   * The DHCP reserved IP ranges on the static route
   * @member {Array.<module:model/NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges>} reservedIpRanges
   */
  exports.prototype.reservedIpRanges = undefined;

  return exports;

}));
