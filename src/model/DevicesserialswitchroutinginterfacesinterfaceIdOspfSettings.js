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
    root.MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings model module.
   * @module model/DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings</code>.
   * The OSPF routing settings of the interface.
   * @alias module:model/DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings} obj Optional instance to populate.
   * @return {module:model/DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings} The populated <code>DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('area'))
        obj.area = ApiClient.convertToType(data['area'], 'String');
      if (data.hasOwnProperty('cost'))
        obj.cost = ApiClient.convertToType(data['cost'], 'Number');
      if (data.hasOwnProperty('isPassiveEnabled'))
        obj.isPassiveEnabled = ApiClient.convertToType(data['isPassiveEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * The OSPF area to which this interface should belong. Can be either 'disabled' or the identifier of an existing OSPF area.
   * @member {String} area
   */
  exports.prototype.area = undefined;

  /**
   * The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority.
   * @member {Number} cost
   */
  exports.prototype.cost = undefined;

  /**
   * When enabled, OSPF will not run on the interface, but the subnet will still be advertised.
   * @member {Boolean} isPassiveEnabled
   */
  exports.prototype.isPassiveEnabled = undefined;

  return exports;

}));
