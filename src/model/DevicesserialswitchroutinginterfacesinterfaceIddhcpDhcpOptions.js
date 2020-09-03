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
    root.MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions model module.
   * @module model/DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions</code>.
   * @alias module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions
   * @class
   * @param code {String} The code for DHCP option which should be from 2 to 254
   * @param type {module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions.TypeEnum} The type of the DHCP option which should be one of ('text', 'ip', 'integer' or 'hex')
   * @param value {String} The value of the DHCP option
   */
  var exports = function(code, type, value) {
    this.code = code;
    this.type = type;
    this.value = value;
  };

  /**
   * Constructs a <code>DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions} obj Optional instance to populate.
   * @return {module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions} The populated <code>DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * The code for DHCP option which should be from 2 to 254
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * The type of the DHCP option which should be one of ('text', 'ip', 'integer' or 'hex')
   * @member {module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * The value of the DHCP option
   * @member {String} value
   */
  exports.prototype.value = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "text"
     * @const
     */
    text: "text",

    /**
     * value: "ip"
     * @const
     */
    ip: "ip",

    /**
     * value: "integer"
     * @const
     */
    integer: "integer",

    /**
     * value: "hex"
     * @const
     */
    hex: "hex"
  };

  return exports;

}));
