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
    root.MerakiDashboardApi.CreateOrganizationAdmin = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.OrganizationsorganizationIdadminsNetworks, root.MerakiDashboardApi.OrganizationsorganizationIdadminsTags);
  }
}(this, function(ApiClient, OrganizationsorganizationIdadminsNetworks, OrganizationsorganizationIdadminsTags) {
  'use strict';

  /**
   * The CreateOrganizationAdmin model module.
   * @module model/CreateOrganizationAdmin
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CreateOrganizationAdmin</code>.
   * @alias module:model/CreateOrganizationAdmin
   * @class
   * @param email {String} The email of the dashboard administrator. This attribute can not be updated.
   * @param name {String} The name of the dashboard administrator
   * @param orgAccess {module:model/CreateOrganizationAdmin.OrgAccessEnum} The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'
   */
  var exports = function(email, name, orgAccess) {
    this.email = email;
    this.name = name;
    this.orgAccess = orgAccess;
  };

  /**
   * Constructs a <code>CreateOrganizationAdmin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateOrganizationAdmin} obj Optional instance to populate.
   * @return {module:model/CreateOrganizationAdmin} The populated <code>CreateOrganizationAdmin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('orgAccess'))
        obj.orgAccess = ApiClient.convertToType(data['orgAccess'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], [OrganizationsorganizationIdadminsTags]);
      if (data.hasOwnProperty('networks'))
        obj.networks = ApiClient.convertToType(data['networks'], [OrganizationsorganizationIdadminsNetworks]);
      if (data.hasOwnProperty('authenticationMethod'))
        obj.authenticationMethod = ApiClient.convertToType(data['authenticationMethod'], 'String');
    }
    return obj;
  }

  /**
   * The email of the dashboard administrator. This attribute can not be updated.
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * The name of the dashboard administrator
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'
   * @member {module:model/CreateOrganizationAdmin.OrgAccessEnum} orgAccess
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
   * The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of 'Email' or 'Cisco SecureX Sign-On'. The default is Email authentication
   * @member {module:model/CreateOrganizationAdmin.AuthenticationMethodEnum} authenticationMethod
   */
  exports.prototype.authenticationMethod = undefined;


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


  /**
   * Allowed values for the <code>authenticationMethod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthenticationMethodEnum = {
    /**
     * value: "Email"
     * @const
     */
    email: "Email",

    /**
     * value: "Cisco SecureX Sign-On"
     * @const
     */
    ciscoSecureXSignOn: "Cisco SecureX Sign-On"
  };

  return exports;

}));
