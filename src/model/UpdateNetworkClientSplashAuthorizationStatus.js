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
    define(['ApiClient', 'model/NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkClientSplashAuthorizationStatus = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids);
  }
}(this, function(ApiClient, NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids) {
  'use strict';

  /**
   * The UpdateNetworkClientSplashAuthorizationStatus model module.
   * @module model/UpdateNetworkClientSplashAuthorizationStatus
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkClientSplashAuthorizationStatus</code>.
   * @alias module:model/UpdateNetworkClientSplashAuthorizationStatus
   * @class
   * @param ssids {module:model/NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids} 
   */
  var exports = function(ssids) {
    this.ssids = ssids;
  };

  /**
   * Constructs a <code>UpdateNetworkClientSplashAuthorizationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkClientSplashAuthorizationStatus} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkClientSplashAuthorizationStatus} The populated <code>UpdateNetworkClientSplashAuthorizationStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ssids'))
        obj.ssids = NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids.constructFromObject(data['ssids']);
    }
    return obj;
  }

  /**
   * @member {module:model/NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids} ssids
   */
  exports.prototype.ssids = undefined;

  return exports;

}));