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
    root.MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination model module.
   * @module model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination</code>.
   * Destination of this custom type traffic filter
   * @alias module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination} The populated <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('port'))
        obj.port = ApiClient.convertToType(data['port'], 'String');
      if (data.hasOwnProperty('cidr'))
        obj.cidr = ApiClient.convertToType(data['cidr'], 'String');
      if (data.hasOwnProperty('network'))
        obj.network = ApiClient.convertToType(data['network'], 'String');
      if (data.hasOwnProperty('vlan'))
        obj.vlan = ApiClient.convertToType(data['vlan'], 'Number');
      if (data.hasOwnProperty('host'))
        obj.host = ApiClient.convertToType(data['host'], 'Number');
      if (data.hasOwnProperty('fqdn'))
        obj.fqdn = ApiClient.convertToType(data['fqdn'], 'String');
    }
    return obj;
  }

  /**
   * E.g.: \"any\", \"0\" (also means \"any\"), \"8080\", \"1-1024\"
   * @member {String} port
   */
  exports.prototype.port = undefined;

  /**
   * CIDR format address, or \"any\". E.g.: \"192.168.10.0/24\",  \"192.168.10.1\" (same as \"192.168.10.1/32\"), \"0.0.0.0/0\" (same as \"any\")
   * @member {String} cidr
   */
  exports.prototype.cidr = undefined;

  /**
   * Meraki network ID. Currently only available under a template network, and the value should be ID of either same template network, or another template network currently. E.g.: \"L_12345678\".
   * @member {String} network
   */
  exports.prototype.network = undefined;

  /**
   * VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network.
   * @member {Number} vlan
   */
  exports.prototype.vlan = undefined;

  /**
   * Host ID in the VLAN, should be used along with 'vlan', and not exceed the vlan subnet capacity. Currently only available under a template network.
   * @member {Number} host
   */
  exports.prototype.host = undefined;

  /**
   * FQDN format address. Currently only availabe in 'destination' of 'vpnTrafficUplinkPreference' object. E.g.: 'www.google.com'
   * @member {String} fqdn
   */
  exports.prototype.fqdn = undefined;

  return exports;

}));
