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
    define(['ApiClient', 'model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters);
  }
}(this, function(ApiClient, NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters) {
  'use strict';

  /**
   * The NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences model module.
   * @module model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences</code>.
   * @alias module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences
   * @class
   * @param trafficFilters {Array.<module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters>} Array of traffic filters for this uplink preference rule
   * @param preferredUplink {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences.PreferredUplinkEnum} Preferred uplink for this uplink preference rule. Must be one of: 'wan1' or 'wan2'
   */
  var exports = function(trafficFilters, preferredUplink) {
    this.trafficFilters = trafficFilters;
    this.preferredUplink = preferredUplink;
  };

  /**
   * Constructs a <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences} The populated <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('trafficFilters'))
        obj.trafficFilters = ApiClient.convertToType(data['trafficFilters'], [NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters]);
      if (data.hasOwnProperty('preferredUplink'))
        obj.preferredUplink = ApiClient.convertToType(data['preferredUplink'], 'String');
    }
    return obj;
  }

  /**
   * Array of traffic filters for this uplink preference rule
   * @member {Array.<module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters>} trafficFilters
   */
  exports.prototype.trafficFilters = undefined;

  /**
   * Preferred uplink for this uplink preference rule. Must be one of: 'wan1' or 'wan2'
   * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences.PreferredUplinkEnum} preferredUplink
   */
  exports.prototype.preferredUplink = undefined;


  /**
   * Allowed values for the <code>preferredUplink</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PreferredUplinkEnum = {
    /**
     * value: "wan1"
     * @const
     */
    wan1: "wan1",

    /**
     * value: "wan2"
     * @const
     */
    wan2: "wan2"
  };

  return exports;

}));
