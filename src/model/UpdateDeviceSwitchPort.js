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
    root.MerakiDashboardApi.UpdateDeviceSwitchPort = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateDeviceSwitchPort model module.
   * @module model/UpdateDeviceSwitchPort
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateDeviceSwitchPort</code>.
   * @alias module:model/UpdateDeviceSwitchPort
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateDeviceSwitchPort</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateDeviceSwitchPort} obj Optional instance to populate.
   * @return {module:model/UpdateDeviceSwitchPort} The populated <code>UpdateDeviceSwitchPort</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('vlan'))
        obj.vlan = ApiClient.convertToType(data['vlan'], 'Number');
      if (data.hasOwnProperty('voiceVlan'))
        obj.voiceVlan = ApiClient.convertToType(data['voiceVlan'], 'Number');
      if (data.hasOwnProperty('allowedVlans'))
        obj.allowedVlans = ApiClient.convertToType(data['allowedVlans'], 'String');
      if (data.hasOwnProperty('poeEnabled'))
        obj.poeEnabled = ApiClient.convertToType(data['poeEnabled'], 'Boolean');
      if (data.hasOwnProperty('isolationEnabled'))
        obj.isolationEnabled = ApiClient.convertToType(data['isolationEnabled'], 'Boolean');
      if (data.hasOwnProperty('rstpEnabled'))
        obj.rstpEnabled = ApiClient.convertToType(data['rstpEnabled'], 'Boolean');
      if (data.hasOwnProperty('stpGuard'))
        obj.stpGuard = ApiClient.convertToType(data['stpGuard'], 'String');
      if (data.hasOwnProperty('linkNegotiation'))
        obj.linkNegotiation = ApiClient.convertToType(data['linkNegotiation'], 'String');
      if (data.hasOwnProperty('portScheduleId'))
        obj.portScheduleId = ApiClient.convertToType(data['portScheduleId'], 'String');
      if (data.hasOwnProperty('udld'))
        obj.udld = ApiClient.convertToType(data['udld'], 'String');
      if (data.hasOwnProperty('accessPolicyType'))
        obj.accessPolicyType = ApiClient.convertToType(data['accessPolicyType'], 'String');
      if (data.hasOwnProperty('accessPolicyNumber'))
        obj.accessPolicyNumber = ApiClient.convertToType(data['accessPolicyNumber'], 'Number');
      if (data.hasOwnProperty('macAllowList'))
        obj.macAllowList = ApiClient.convertToType(data['macAllowList'], ['String']);
      if (data.hasOwnProperty('stickyMacAllowList'))
        obj.stickyMacAllowList = ApiClient.convertToType(data['stickyMacAllowList'], ['String']);
      if (data.hasOwnProperty('stickyMacAllowListLimit'))
        obj.stickyMacAllowListLimit = ApiClient.convertToType(data['stickyMacAllowListLimit'], 'Number');
      if (data.hasOwnProperty('stormControlEnabled'))
        obj.stormControlEnabled = ApiClient.convertToType(data['stormControlEnabled'], 'Boolean');
      if (data.hasOwnProperty('flexibleStackingEnabled'))
        obj.flexibleStackingEnabled = ApiClient.convertToType(data['flexibleStackingEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * The name of the switch port
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The list of tags of the switch port
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * The status of the switch port
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * The type of the switch port ('trunk' or 'access')
   * @member {module:model/UpdateDeviceSwitchPort.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * The VLAN of the switch port. A null value will clear the value set for trunk ports.
   * @member {Number} vlan
   */
  exports.prototype.vlan = undefined;

  /**
   * The voice VLAN of the switch port. Only applicable to access ports.
   * @member {Number} voiceVlan
   */
  exports.prototype.voiceVlan = undefined;

  /**
   * The VLANs allowed on the switch port. Only applicable to trunk ports.
   * @member {String} allowedVlans
   */
  exports.prototype.allowedVlans = undefined;

  /**
   * The PoE status of the switch port
   * @member {Boolean} poeEnabled
   */
  exports.prototype.poeEnabled = undefined;

  /**
   * The isolation status of the switch port
   * @member {Boolean} isolationEnabled
   */
  exports.prototype.isolationEnabled = undefined;

  /**
   * The rapid spanning tree protocol status
   * @member {Boolean} rstpEnabled
   */
  exports.prototype.rstpEnabled = undefined;

  /**
   * The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard')
   * @member {module:model/UpdateDeviceSwitchPort.StpGuardEnum} stpGuard
   */
  exports.prototype.stpGuard = undefined;

  /**
   * The link speed for the switch port
   * @member {String} linkNegotiation
   */
  exports.prototype.linkNegotiation = undefined;

  /**
   * The ID of the port schedule. A value of null will clear the port schedule.
   * @member {String} portScheduleId
   */
  exports.prototype.portScheduleId = undefined;

  /**
   * The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
   * @member {module:model/UpdateDeviceSwitchPort.UdldEnum} udld
   */
  exports.prototype.udld = undefined;

  /**
   * The type of the access policy of the switch port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'
   * @member {module:model/UpdateDeviceSwitchPort.AccessPolicyTypeEnum} accessPolicyType
   */
  exports.prototype.accessPolicyType = undefined;

  /**
   * The number of a custom access policy to configure on the switch port. Only applicable when 'accessPolicyType' is 'Custom access policy'
   * @member {Number} accessPolicyNumber
   */
  exports.prototype.accessPolicyNumber = undefined;

  /**
   * Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when 'accessPolicyType' is 'MAC allow list'
   * @member {Array.<String>} macAllowList
   */
  exports.prototype.macAllowList = undefined;

  /**
   * The initial list of MAC addresses for sticky Mac allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'
   * @member {Array.<String>} stickyMacAllowList
   */
  exports.prototype.stickyMacAllowList = undefined;

  /**
   * The maximum number of MAC addresses for sticky MAC allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'
   * @member {Number} stickyMacAllowListLimit
   */
  exports.prototype.stickyMacAllowListLimit = undefined;

  /**
   * The storm control status of the switch port
   * @member {Boolean} stormControlEnabled
   */
  exports.prototype.stormControlEnabled = undefined;

  /**
   * For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled.
   * @member {Boolean} flexibleStackingEnabled
   */
  exports.prototype.flexibleStackingEnabled = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "trunk"
     * @const
     */
    trunk: "trunk",

    /**
     * value: "access"
     * @const
     */
    access: "access"
  };


  /**
   * Allowed values for the <code>stpGuard</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StpGuardEnum = {
    /**
     * value: "disabled"
     * @const
     */
    disabled: "disabled",

    /**
     * value: "root guard"
     * @const
     */
    rootGuard: "root guard",

    /**
     * value: "bpdu guard"
     * @const
     */
    bpduGuard: "bpdu guard",

    /**
     * value: "loop guard"
     * @const
     */
    loopGuard: "loop guard"
  };


  /**
   * Allowed values for the <code>udld</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UdldEnum = {
    /**
     * value: "Alert only"
     * @const
     */
    alertOnly: "Alert only",

    /**
     * value: "Enforce"
     * @const
     */
    enforce: "Enforce"
  };


  /**
   * Allowed values for the <code>accessPolicyType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessPolicyTypeEnum = {
    /**
     * value: "Open"
     * @const
     */
    open: "Open",

    /**
     * value: "Custom access policy"
     * @const
     */
    customAccessPolicy: "Custom access policy",

    /**
     * value: "MAC allow list"
     * @const
     */
    mACAllowList: "MAC allow list",

    /**
     * value: "Sticky MAC allow list"
     * @const
     */
    stickyMACAllowList: "Sticky MAC allow list"
  };

  return exports;

}));
