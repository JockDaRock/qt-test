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
    define(['ApiClient', 'model/OrganizationsorganizationIdadminsNetworks', 'model/OrganizationsorganizationIdadminsTags'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrganizationsorganizationIdadminsNetworks'), require('./OrganizationsorganizationIdadminsTags'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateOrganizationAdmin = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.OrganizationsorganizationIdadminsNetworks, root.MerakiDashboardApi.OrganizationsorganizationIdadminsTags);
  }
}(this, function(ApiClient, OrganizationsorganizationIdadminsNetworks, OrganizationsorganizationIdadminsTags) {
  'use strict';

  /**
   * The UpdateOrganizationAdmin model module.
   * @module model/UpdateOrganizationAdmin
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateOrganizationAdmin</code>.
   * @alias module:model/UpdateOrganizationAdmin
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateOrganizationAdmin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateOrganizationAdmin} obj Optional instance to populate.
   * @return {module:model/UpdateOrganizationAdmin} The populated <code>UpdateOrganizationAdmin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('orgAccess'))
        obj.orgAccess = ApiClient.convertToType(data['orgAccess'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], [OrganizationsorganizationIdadminsTags]);
      if (data.hasOwnProperty('networks'))
        obj.networks = ApiClient.convertToType(data['networks'], [OrganizationsorganizationIdadminsNetworks]);
    }
    return obj;
  }

  /**
   * The name of the dashboard administrator
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'
   * @member {module:model/UpdateOrganizationAdmin.OrgAccessEnum} orgAccess
   */
  exports.prototype.orgAccess = undefined;

  /**
   * The list of tags that the dashboard administrator has privileges on
   * @member {Array.<module:model/OrganizationsorganizationIdadminsTags>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * The list of networks that the dashboard administrator has privileges on
   * @member {Array.<module:model/OrganizationsorganizationIdadminsNetworks>} networks
   */
  exports.prototype.networks = undefined;


  /**
   * Allowed values for the <code>orgAccess</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrgAccessEnum = {
    /**
     * value: "full"
     * @const
     */
    full: "full",

    /**
     * value: "read-only"
     * @const
     */
    readOnly: "read-only",

    /**
     * value: "enterprise"
     * @const
     */
    enterprise: "enterprise",

    /**
     * value: "none"
     * @const
     */
    none: "none"
  };

  return exports;

}));
