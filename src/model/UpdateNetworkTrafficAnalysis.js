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
    define(['ApiClient', 'model/NetworksnetworkIdtrafficAnalysisCustomPieChartItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdtrafficAnalysisCustomPieChartItems'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkTrafficAnalysis = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdtrafficAnalysisCustomPieChartItems);
  }
}(this, function(ApiClient, NetworksnetworkIdtrafficAnalysisCustomPieChartItems) {
  'use strict';

  /**
   * The UpdateNetworkTrafficAnalysis model module.
   * @module model/UpdateNetworkTrafficAnalysis
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkTrafficAnalysis</code>.
   * @alias module:model/UpdateNetworkTrafficAnalysis
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkTrafficAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkTrafficAnalysis} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkTrafficAnalysis} The populated <code>UpdateNetworkTrafficAnalysis</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('mode'))
        obj.mode = ApiClient.convertToType(data['mode'], 'String');
      if (data.hasOwnProperty('customPieChartItems'))
        obj.customPieChartItems = ApiClient.convertToType(data['customPieChartItems'], [NetworksnetworkIdtrafficAnalysisCustomPieChartItems]);
    }
    return obj;
  }

  /**
   *     The traffic analysis mode for the network. Can be one of 'disabled' (do not collect traffic types),     'basic' (collect generic traffic categories), or 'detailed' (collect destination hostnames). 
   * @member {module:model/UpdateNetworkTrafficAnalysis.ModeEnum} mode
   */
  exports.prototype.mode = undefined;

  /**
   * The list of items that make up the custom pie chart for traffic reporting.
   * @member {Array.<module:model/NetworksnetworkIdtrafficAnalysisCustomPieChartItems>} customPieChartItems
   */
  exports.prototype.customPieChartItems = undefined;


  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "disabled"
     * @const
     */
    disabled: "disabled",

    /**
     * value: "basic"
     * @const
     */
    basic: "basic",

    /**
     * value: "detailed"
     * @const
     */
    detailed: "detailed"
  };

  return exports;

}));
