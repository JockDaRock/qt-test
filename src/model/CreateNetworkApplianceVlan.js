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
    root.MerakiDashboardApi.CreateNetworkApplianceVlan = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateNetworkApplianceVlan model module.
   * @module model/CreateNetworkApplianceVlan
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CreateNetworkApplianceVlan</code>.
   * @alias module:model/CreateNetworkApplianceVlan
   * @class
   * @param id {String} The VLAN ID of the new VLAN (must be between 1 and 4094)
   * @param name {String} The name of the new VLAN
   * @param subnet {String} The subnet of the VLAN
   * @param applianceIp {String} The local IP of the appliance on the VLAN
   */
  var exports = function(id, name, subnet, applianceIp) {
    this.id = id;
    this.name = name;
    this.subnet = subnet;
    this.applianceIp = applianceIp;
  };

  /**
   * Constructs a <code>CreateNetworkApplianceVlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateNetworkApplianceVlan} obj Optional instance to populate.
   * @return {module:model/CreateNetworkApplianceVlan} The populated <code>CreateNetworkApplianceVlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('subnet'))
        obj.subnet = ApiClient.convertToType(data['subnet'], 'String');
      if (data.hasOwnProperty('applianceIp'))
        obj.applianceIp = ApiClient.convertToType(data['applianceIp'], 'String');
      if (data.hasOwnProperty('groupPolicyId'))
        obj.groupPolicyId = ApiClient.convertToType(data['groupPolicyId'], 'String');
    }
    return obj;
  }

  /**
   * The VLAN ID of the new VLAN (must be between 1 and 4094)
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * The name of the new VLAN
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The subnet of the VLAN
   * @member {String} subnet
   */
  exports.prototype.subnet = undefined;

  /**
   * The local IP of the appliance on the VLAN
   * @member {String} applianceIp
   */
  exports.prototype.applianceIp = undefined;

  /**
   * The id of the desired group policy to apply to the VLAN
   * @member {String} groupPolicyId
   */
  exports.prototype.groupPolicyId = undefined;

  return exports;

}));
