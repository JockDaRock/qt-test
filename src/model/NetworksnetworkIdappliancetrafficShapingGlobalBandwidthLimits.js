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
    root.MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapingGlobalBandwidthLimits = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdappliancetrafficShapingGlobalBandwidthLimits model module.
   * @module model/NetworksnetworkIdappliancetrafficShapingGlobalBandwidthLimits
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdappliancetrafficShapingGlobalBandwidthLimits</code>.
   * Global per-client bandwidth limit
   * @alias module:model/NetworksnetworkIdappliancetrafficShapingGlobalBandwidthLimits
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworksnetworkIdappliancetrafficShapingGlobalBandwidthLimits</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdappliancetrafficShapingGlobalBandwidthLimits} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdappliancetrafficShapingGlobalBandwidthLimits} The populated <code>NetworksnetworkIdappliancetrafficShapingGlobalBandwidthLimits</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('limitUp'))
        obj.limitUp = ApiClient.convertToType(data['limitUp'], 'Number');
      if (data.hasOwnProperty('limitDown'))
        obj.limitDown = ApiClient.convertToType(data['limitDown'], 'Number');
    }
    return obj;
  }

  /**
   * The upload bandwidth limit in Kbps. (0 represents no limit.)
   * @member {Number} limitUp
   */
  exports.prototype.limitUp = undefined;

  /**
   * The download bandwidth limit in Kbps. (0 represents no limit.)
   * @member {Number} limitDown
   */
  exports.prototype.limitDown = undefined;

  return exports;

}));
