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
    define(['ApiClient', 'model/NetworksnetworkIdmerakiAuthUsersmerakiAuthUserIdAuthorizations'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdmerakiAuthUsersmerakiAuthUserIdAuthorizations'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkMerakiAuthUser = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdmerakiAuthUsersmerakiAuthUserIdAuthorizations);
  }
}(this, function(ApiClient, NetworksnetworkIdmerakiAuthUsersmerakiAuthUserIdAuthorizations) {
  'use strict';

  /**
   * The UpdateNetworkMerakiAuthUser model module.
   * @module model/UpdateNetworkMerakiAuthUser
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkMerakiAuthUser</code>.
   * @alias module:model/UpdateNetworkMerakiAuthUser
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkMerakiAuthUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkMerakiAuthUser} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkMerakiAuthUser} The populated <code>UpdateNetworkMerakiAuthUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('emailPasswordToUser'))
        obj.emailPasswordToUser = ApiClient.convertToType(data['emailPasswordToUser'], 'Boolean');
      if (data.hasOwnProperty('authorizations'))
        obj.authorizations = ApiClient.convertToType(data['authorizations'], [NetworksnetworkIdmerakiAuthUsersmerakiAuthUserIdAuthorizations]);
    }
    return obj;
  }

  /**
   * Name of the user
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The password for this user account
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * Whether or not Meraki should email the password to user. Default is false.
   * @member {Boolean} emailPasswordToUser
   */
  exports.prototype.emailPasswordToUser = undefined;

  /**
   * Authorization zones and expiration dates for the user.
   * @member {Array.<module:model/NetworksnetworkIdmerakiAuthUsersmerakiAuthUserIdAuthorizations>} authorizations
   */
  exports.prototype.authorizations = undefined;

  return exports;

}));
