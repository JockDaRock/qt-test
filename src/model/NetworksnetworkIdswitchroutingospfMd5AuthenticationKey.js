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
    root.MerakiDashboardApi.NetworksnetworkIdswitchroutingospfMd5AuthenticationKey = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdswitchroutingospfMd5AuthenticationKey model module.
   * @module model/NetworksnetworkIdswitchroutingospfMd5AuthenticationKey
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdswitchroutingospfMd5AuthenticationKey</code>.
   * MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
   * @alias module:model/NetworksnetworkIdswitchroutingospfMd5AuthenticationKey
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworksnetworkIdswitchroutingospfMd5AuthenticationKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdswitchroutingospfMd5AuthenticationKey} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdswitchroutingospfMd5AuthenticationKey} The populated <code>NetworksnetworkIdswitchroutingospfMd5AuthenticationKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('passphrase'))
        obj.passphrase = ApiClient.convertToType(data['passphrase'], 'String');
    }
    return obj;
  }

  /**
   * MD5 authentication key index. Key index must be between 1 to 255
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * MD5 authentication passphrase
   * @member {String} passphrase
   */
  exports.prototype.passphrase = undefined;

  return exports;

}));
