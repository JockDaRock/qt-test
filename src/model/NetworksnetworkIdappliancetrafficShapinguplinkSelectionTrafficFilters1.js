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
    define(['ApiClient', 'model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1 = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1);
  }
}(this, function(ApiClient, NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1) {
  'use strict';

  /**
   * The NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1 model module.
   * @module model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1</code>.
   * @alias module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1
   * @class
   * @param type {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1.TypeEnum} Type of this traffic filter. Must be one of: 'applicationCategory', 'application' or 'custom'
   * @param value {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1} 
   */
  var exports = function(type, value) {
    this.type = type;
    this.value = value;
  };

  /**
   * Constructs a <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1} The populated <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1.constructFromObject(data['value']);
    }
    return obj;
  }

  /**
   * Type of this traffic filter. Must be one of: 'applicationCategory', 'application' or 'custom'
   * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1} value
   */
  exports.prototype.value = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "applicationCategory"
     * @const
     */
    applicationCategory: "applicationCategory",

    /**
     * value: "application"
     * @const
     */
    application: "application",

    /**
     * value: "custom"
     * @const
     */
    custom: "custom"
  };

  return exports;

}));
