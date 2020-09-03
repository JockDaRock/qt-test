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
    root.MerakiDashboardApi.CreateNetworkSwitchStackRoutingStaticRoute = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateNetworkSwitchStackRoutingStaticRoute model module.
   * @module model/CreateNetworkSwitchStackRoutingStaticRoute
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CreateNetworkSwitchStackRoutingStaticRoute</code>.
   * @alias module:model/CreateNetworkSwitchStackRoutingStaticRoute
   * @class
   * @param subnet {String} The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)
   * @param nextHopIp {String} IP address of the next hop device to which the device sends its traffic for the subnet
   */
  var exports = function(subnet, nextHopIp) {
    this.subnet = subnet;
    this.nextHopIp = nextHopIp;
  };

  /**
   * Constructs a <code>CreateNetworkSwitchStackRoutingStaticRoute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateNetworkSwitchStackRoutingStaticRoute} obj Optional instance to populate.
   * @return {module:model/CreateNetworkSwitchStackRoutingStaticRoute} The populated <code>CreateNetworkSwitchStackRoutingStaticRoute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('subnet'))
        obj.subnet = ApiClient.convertToType(data['subnet'], 'String');
      if (data.hasOwnProperty('nextHopIp'))
        obj.nextHopIp = ApiClient.convertToType(data['nextHopIp'], 'String');
      if (data.hasOwnProperty('advertiseViaOspfEnabled'))
        obj.advertiseViaOspfEnabled = ApiClient.convertToType(data['advertiseViaOspfEnabled'], 'Boolean');
      if (data.hasOwnProperty('preferOverOspfRoutesEnabled'))
        obj.preferOverOspfRoutesEnabled = ApiClient.convertToType(data['preferOverOspfRoutesEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * Name or description for layer 3 static route
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)
   * @member {String} subnet
   */
  exports.prototype.subnet = undefined;

  /**
   * IP address of the next hop device to which the device sends its traffic for the subnet
   * @member {String} nextHopIp
   */
  exports.prototype.nextHopIp = undefined;

  /**
   * Option to advertise static route via OSPF
   * @member {Boolean} advertiseViaOspfEnabled
   */
  exports.prototype.advertiseViaOspfEnabled = undefined;

  /**
   * Option to prefer static route over OSPF routes
   * @member {Boolean} preferOverOspfRoutesEnabled
   */
  exports.prototype.preferOverOspfRoutesEnabled = undefined;

  return exports;

}));