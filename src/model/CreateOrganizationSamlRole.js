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
    define(['ApiClient', 'model/OrganizationsorganizationIdsamlRolesNetworks', 'model/OrganizationsorganizationIdsamlRolesTags'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrganizationsorganizationIdsamlRolesNetworks'), require('./OrganizationsorganizationIdsamlRolesTags'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.CreateOrganizationSamlRole = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.OrganizationsorganizationIdsamlRolesNetworks, root.MerakiDashboardApi.OrganizationsorganizationIdsamlRolesTags);
  }
}(this, function(ApiClient, OrganizationsorganizationIdsamlRolesNetworks, OrganizationsorganizationIdsamlRolesTags) {
  'use strict';

  /**
   * The CreateOrganizationSamlRole model module.
   * @module model/CreateOrganizationSamlRole
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CreateOrganizationSamlRole</code>.
   * @alias module:model/CreateOrganizationSamlRole
   * @class
   * @param role {String} The role of the SAML administrator
   * @param orgAccess {module:model/CreateOrganizationSamlRole.OrgAccessEnum} The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only' or 'full'
   */
  var exports = function(role, orgAccess) {
    this.role = role;
    this.orgAccess = orgAccess;
  };

  /**
   * Constructs a <code>CreateOrganizationSamlRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateOrganizationSamlRole} obj Optional instance to populate.
   * @return {module:model/CreateOrganizationSamlRole} The populated <code>CreateOrganizationSamlRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('orgAccess'))
        obj.orgAccess = ApiClient.convertToType(data['orgAccess'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], [OrganizationsorganizationIdsamlRolesTags]);
      if (data.hasOwnProperty('networks'))
        obj.networks = ApiClient.convertToType(data['networks'], [OrganizationsorganizationIdsamlRolesNetworks]);
    }
    return obj;
  }

  /**
   * The role of the SAML administrator
   * @member {String} role
   */
  exports.prototype.role = undefined;

  /**
   * The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only' or 'full'
   * @member {module:model/CreateOrganizationSamlRole.OrgAccessEnum} orgAccess
   */
  exports.prototype.orgAccess = undefined;

  /**
   * The list of tags that the SAML administrator has privleges on
   * @member {Array.<module:model/OrganizationsorganizationIdsamlRolesTags>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * The list of networks that the SAML administrator has privileges on
   * @member {Array.<module:model/OrganizationsorganizationIdsamlRolesNetworks>} networks
   */
  exports.prototype.networks = undefined;


  /**
   * Allowed values for the <code>orgAccess</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrgAccessEnum = {
    /**
     * value: "none"
     * @const
     */
    none: "none",

    /**
     * value: "read-only"
     * @const
     */
    readOnly: "read-only",

    /**
     * value: "full"
     * @const
     */
    full: "full"
  };

  return exports;

}));