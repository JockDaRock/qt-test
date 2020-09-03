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
    define(['ApiClient', 'model/DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkSwitchStackRoutingInterface = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings);
  }
}(this, function(ApiClient, DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings) {
  'use strict';

  /**
   * The UpdateNetworkSwitchStackRoutingInterface model module.
   * @module model/UpdateNetworkSwitchStackRoutingInterface
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkSwitchStackRoutingInterface</code>.
   * @alias module:model/UpdateNetworkSwitchStackRoutingInterface
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkSwitchStackRoutingInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkSwitchStackRoutingInterface} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkSwitchStackRoutingInterface} The populated <code>UpdateNetworkSwitchStackRoutingInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('subnet'))
        obj.subnet = ApiClient.convertToType(data['subnet'], 'String');
      if (data.hasOwnProperty('interfaceIp'))
        obj.interfaceIp = ApiClient.convertToType(data['interfaceIp'], 'String');
      if (data.hasOwnProperty('multicastRouting'))
        obj.multicastRouting = ApiClient.convertToType(data['multicastRouting'], 'String');
      if (data.hasOwnProperty('vlanId'))
        obj.vlanId = ApiClient.convertToType(data['vlanId'], 'Number');
      if (data.hasOwnProperty('ospfSettings'))
        obj.ospfSettings = DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings.constructFromObject(data['ospfSettings']);
    }
    return obj;
  }

  /**
   * A friendly name or description for the interface or VLAN.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24).
   * @member {String} subnet
   */
  exports.prototype.subnet = undefined;

  /**
   * The IP address this switch stack will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch's management IP.
   * @member {String} interfaceIp
   */
  exports.prototype.interfaceIp = undefined;

  /**
   * Enable multicast support if, multicast routing between VLANs is required. Options are, 'disabled', 'enabled' or 'IGMP snooping querier'.
   * @member {module:model/UpdateNetworkSwitchStackRoutingInterface.MulticastRoutingEnum} multicastRouting
   */
  exports.prototype.multicastRouting = undefined;

  /**
   * The VLAN this routed interface is on. VLAN must be between 1 and 4094.
   * @member {Number} vlanId
   */
  exports.prototype.vlanId = undefined;

  /**
   * @member {module:model/DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings} ospfSettings
   */
  exports.prototype.ospfSettings = undefined;


  /**
   * Allowed values for the <code>multicastRouting</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MulticastRoutingEnum = {
    /**
     * value: "disabled"
     * @const
     */
    disabled: "disabled",

    /**
     * value: "enabled"
     * @const
     */
    enabled: "enabled",

    /**
     * value: "IGMP snooping querier"
     * @const
     */
    iGMPSnoopingQuerier: "IGMP snooping querier"
  };

  return exports;

}));
