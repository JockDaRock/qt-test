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
    root.MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination model module.
   * @module model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination</code>.
   * Destination of this custom type traffic filter
   * @alias module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination} The populated <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('port'))
        obj.port = ApiClient.convertToType(data['port'], 'String');
      if (data.hasOwnProperty('cidr'))
        obj.cidr = ApiClient.convertToType(data['cidr'], 'String');
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

  return exports;

}));
