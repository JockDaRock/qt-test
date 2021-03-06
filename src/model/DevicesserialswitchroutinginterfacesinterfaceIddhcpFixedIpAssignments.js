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
    root.MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments model module.
   * @module model/DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments</code>.
   * @alias module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments
   * @class
   * @param name {String} The name of the client which has fixed IP address
   * @param mac {String} The MAC address of the client which has fixed IP address
   * @param ip {String} The IP address of the client which has fixed IP address assigned to it
   */
  var exports = function(name, mac, ip) {
    this.name = name;
    this.mac = mac;
    this.ip = ip;
  };

  /**
   * Constructs a <code>DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments} obj Optional instance to populate.
   * @return {module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments} The populated <code>DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('mac'))
        obj.mac = ApiClient.convertToType(data['mac'], 'String');
      if (data.hasOwnProperty('ip'))
        obj.ip = ApiClient.convertToType(data['ip'], 'String');
    }
    return obj;
  }

  /**
   * The name of the client which has fixed IP address
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The MAC address of the client which has fixed IP address
   * @member {String} mac
   */
  exports.prototype.mac = undefined;

  /**
   * The IP address of the client which has fixed IP address assigned to it
   * @member {String} ip
   */
  exports.prototype.ip = undefined;

  return exports;

}));
