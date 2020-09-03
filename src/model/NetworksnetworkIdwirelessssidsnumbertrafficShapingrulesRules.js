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
    define(['ApiClient', 'model/NetworksnetworkIdappliancetrafficShapingrulesDefinitions', 'model/NetworksnetworkIdappliancetrafficShapingrulesPerClientBandwidthLimits'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdappliancetrafficShapingrulesDefinitions'), require('./NetworksnetworkIdappliancetrafficShapingrulesPerClientBandwidthLimits'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapingrulesDefinitions, root.MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapingrulesPerClientBandwidthLimits);
  }
}(this, function(ApiClient, NetworksnetworkIdappliancetrafficShapingrulesDefinitions, NetworksnetworkIdappliancetrafficShapingrulesPerClientBandwidthLimits) {
  'use strict';

  /**
   * The NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules model module.
   * @module model/NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules</code>.
   * @alias module:model/NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules
   * @class
   * @param definitions {Array.<module:model/NetworksnetworkIdappliancetrafficShapingrulesDefinitions>}     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required. 
   */
  var exports = function(definitions) {
    this.definitions = definitions;
  };

  /**
   * Constructs a <code>NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules} The populated <code>NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('definitions'))
        obj.definitions = ApiClient.convertToType(data['definitions'], [NetworksnetworkIdappliancetrafficShapingrulesDefinitions]);
      if (data.hasOwnProperty('perClientBandwidthLimits'))
        obj.perClientBandwidthLimits = NetworksnetworkIdappliancetrafficShapingrulesPerClientBandwidthLimits.constructFromObject(data['perClientBandwidthLimits']);
      if (data.hasOwnProperty('dscpTagValue'))
        obj.dscpTagValue = ApiClient.convertToType(data['dscpTagValue'], 'Number');
      if (data.hasOwnProperty('pcpTagValue'))
        obj.pcpTagValue = ApiClient.convertToType(data['pcpTagValue'], 'Number');
    }
    return obj;
  }

  /**
   *     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required. 
   * @member {Array.<module:model/NetworksnetworkIdappliancetrafficShapingrulesDefinitions>} definitions
   */
  exports.prototype.definitions = undefined;

  /**
   * @member {module:model/NetworksnetworkIdappliancetrafficShapingrulesPerClientBandwidthLimits} perClientBandwidthLimits
   */
  exports.prototype.perClientBandwidthLimits = undefined;

  /**
   *     The DSCP tag applied by your rule. null means 'Do not change DSCP tag'.     For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint. 
   * @member {Number} dscpTagValue
   */
  exports.prototype.dscpTagValue = undefined;

  /**
   *     The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority).     null means 'Do not set PCP tag'. 
   * @member {Number} pcpTagValue
   */
  exports.prototype.pcpTagValue = undefined;

  return exports;

}));
