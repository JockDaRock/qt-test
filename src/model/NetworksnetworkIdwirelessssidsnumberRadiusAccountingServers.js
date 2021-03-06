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
    root.MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers model module.
   * @module model/NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers</code>.
   * @alias module:model/NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers
   * @class
   * @param host {String} IP address to which the APs will send RADIUS accounting messages
   * @param secret {String} Shared key used to authenticate messages between the APs and RADIUS server
   */
  var exports = function(host, secret) {
    this.host = host;
    this.secret = secret;
  };

  /**
   * Constructs a <code>NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers} The populated <code>NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('host'))
        obj.host = ApiClient.convertToType(data['host'], 'String');
      if (data.hasOwnProperty('port'))
        obj.port = ApiClient.convertToType(data['port'], 'Number');
      if (data.hasOwnProperty('secret'))
        obj.secret = ApiClient.convertToType(data['secret'], 'String');
    }
    return obj;
  }

  /**
   * IP address to which the APs will send RADIUS accounting messages
   * @member {String} host
   */
  exports.prototype.host = undefined;

  /**
   * Port on the RADIUS server that is listening for accounting messages
   * @member {Number} port
   */
  exports.prototype.port = undefined;

  /**
   * Shared key used to authenticate messages between the APs and RADIUS server
   * @member {String} secret
   */
  exports.prototype.secret = undefined;

  return exports;

}));
