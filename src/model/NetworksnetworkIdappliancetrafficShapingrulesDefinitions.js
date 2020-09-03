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
    root.MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapingrulesDefinitions = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdappliancetrafficShapingrulesDefinitions model module.
   * @module model/NetworksnetworkIdappliancetrafficShapingrulesDefinitions
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdappliancetrafficShapingrulesDefinitions</code>.
   * @alias module:model/NetworksnetworkIdappliancetrafficShapingrulesDefinitions
   * @class
   * @param type {module:model/NetworksnetworkIdappliancetrafficShapingrulesDefinitions.TypeEnum} The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
   * @param value {String}     If \"type\" is 'host', 'port', 'ipRange' or 'localNet', then \"value\" must be a string, matching either     a hostname (e.g. \"somesite.com\"), a port (e.g. 8080), or an IP range (\"192.1.0.0\",     \"192.1.0.0/16\", or \"10.1.0.0/16:80\"). 'localNet' also supports CIDR notation, excluding     custom ports.      If \"type\" is 'application' or 'applicationCategory', then \"value\" must be an object     with the structure { \"id\": \"meraki:layer7/...\" }, where \"id\" is the application category or     application ID (for a list of IDs for your network, use the trafficShaping/applicationCategories     endpoint). 
   */
  var exports = function(type, value) {
    this.type = type;
    this.value = value;
  };

  /**
   * Constructs a <code>NetworksnetworkIdappliancetrafficShapingrulesDefinitions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdappliancetrafficShapingrulesDefinitions} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdappliancetrafficShapingrulesDefinitions} The populated <code>NetworksnetworkIdappliancetrafficShapingrulesDefinitions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
   * @member {module:model/NetworksnetworkIdappliancetrafficShapingrulesDefinitions.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   *     If \"type\" is 'host', 'port', 'ipRange' or 'localNet', then \"value\" must be a string, matching either     a hostname (e.g. \"somesite.com\"), a port (e.g. 8080), or an IP range (\"192.1.0.0\",     \"192.1.0.0/16\", or \"10.1.0.0/16:80\"). 'localNet' also supports CIDR notation, excluding     custom ports.      If \"type\" is 'application' or 'applicationCategory', then \"value\" must be an object     with the structure { \"id\": \"meraki:layer7/...\" }, where \"id\" is the application category or     application ID (for a list of IDs for your network, use the trafficShaping/applicationCategories     endpoint). 
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
     * value: "application"
     * @const
     */
    application: "application",

    /**
     * value: "applicationCategory"
     * @const
     */
    applicationCategory: "applicationCategory",

    /**
     * value: "host"
     * @const
     */
    host: "host",

    /**
     * value: "port"
     * @const
     */
    port: "port",

    /**
     * value: "ipRange"
     * @const
     */
    ipRange: "ipRange",

    /**
     * value: "localNet"
     * @const
     */
    localNet: "localNet"
  };

  return exports;

}));
