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
    root.MerakiDashboardApi.CreateNetworkApplianceStaticRoute = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateNetworkApplianceStaticRoute model module.
   * @module model/CreateNetworkApplianceStaticRoute
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CreateNetworkApplianceStaticRoute</code>.
   * @alias module:model/CreateNetworkApplianceStaticRoute
   * @class
   * @param name {String} The name of the new static route
   * @param subnet {String} The subnet of the static route
   * @param gatewayIp {String} The gateway IP (next hop) of the static route
   */
  var exports = function(name, subnet, gatewayIp) {
    this.name = name;
    this.subnet = subnet;
    this.gatewayIp = gatewayIp;
  };

  /**
   * Constructs a <code>CreateNetworkApplianceStaticRoute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateNetworkApplianceStaticRoute} obj Optional instance to populate.
   * @return {module:model/CreateNetworkApplianceStaticRoute} The populated <code>CreateNetworkApplianceStaticRoute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('subnet'))
        obj.subnet = ApiClient.convertToType(data['subnet'], 'String');
      if (data.hasOwnProperty('gatewayIp'))
        obj.gatewayIp = ApiClient.convertToType(data['gatewayIp'], 'String');
    }
    return obj;
  }

  /**
   * The name of the new static route
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The subnet of the static route
   * @member {String} subnet
   */
  exports.prototype.subnet = undefined;

  /**
   * The gateway IP (next hop) of the static route
   * @member {String} gatewayIp
   */
  exports.prototype.gatewayIp = undefined;

  return exports;

}));
