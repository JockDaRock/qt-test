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
    root.MerakiDashboardApi.OrganizationsorganizationIdclaimLicenses = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrganizationsorganizationIdclaimLicenses model module.
   * @module model/OrganizationsorganizationIdclaimLicenses
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>OrganizationsorganizationIdclaimLicenses</code>.
   * @alias module:model/OrganizationsorganizationIdclaimLicenses
   * @class
   * @param key {String} The key of the license
   */
  var exports = function(key) {
    this.key = key;
  };

  /**
   * Constructs a <code>OrganizationsorganizationIdclaimLicenses</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationsorganizationIdclaimLicenses} obj Optional instance to populate.
   * @return {module:model/OrganizationsorganizationIdclaimLicenses} The populated <code>OrganizationsorganizationIdclaimLicenses</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('mode'))
        obj.mode = ApiClient.convertToType(data['mode'], 'String');
    }
    return obj;
  }

  /**
   * The key of the license
   * @member {String} key
   */
  exports.prototype.key = undefined;

  /**
   * Either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. This parameter is legacy and only applies to coterm licensing; it should not be specified when claiming per-device licenses. Please see <a target='_blank' href='https://documentation.meraki.com/zGeneral_Administration/Licensing/Adding_an_Enterprise_license_to_an_existing_Dashboard_account'>this article</a> for more information.
   * @member {module:model/OrganizationsorganizationIdclaimLicenses.ModeEnum} mode
   */
  exports.prototype.mode = undefined;


  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "addDevices"
     * @const
     */
    addDevices: "addDevices",

    /**
     * value: "renew"
     * @const
     */
    renew: "renew"
  };

  return exports;

}));
