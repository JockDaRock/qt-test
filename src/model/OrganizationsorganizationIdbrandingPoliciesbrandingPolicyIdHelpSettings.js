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
    root.MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings model module.
   * @module model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings</code>.
   *     Settings for describing the modifications to various Help page features. Each property in this object accepts one of     'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show     the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on     Dashboard; see the documentation for each property to see the allowed values. 
   * @alias module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings} obj Optional instance to populate.
   * @return {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings} The populated <code>OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('helpTab'))
        obj.helpTab = ApiClient.convertToType(data['helpTab'], 'String');
      if (data.hasOwnProperty('getHelpSubtab'))
        obj.getHelpSubtab = ApiClient.convertToType(data['getHelpSubtab'], 'String');
      if (data.hasOwnProperty('communitySubtab'))
        obj.communitySubtab = ApiClient.convertToType(data['communitySubtab'], 'String');
      if (data.hasOwnProperty('casesSubtab'))
        obj.casesSubtab = ApiClient.convertToType(data['casesSubtab'], 'String');
      if (data.hasOwnProperty('dataProtectionRequestsSubtab'))
        obj.dataProtectionRequestsSubtab = ApiClient.convertToType(data['dataProtectionRequestsSubtab'], 'String');
      if (data.hasOwnProperty('getHelpSubtabKnowledgeBaseSearch'))
        obj.getHelpSubtabKnowledgeBaseSearch = ApiClient.convertToType(data['getHelpSubtabKnowledgeBaseSearch'], 'String');
      if (data.hasOwnProperty('universalSearchKnowledgeBaseSearch'))
        obj.universalSearchKnowledgeBaseSearch = ApiClient.convertToType(data['universalSearchKnowledgeBaseSearch'], 'String');
      if (data.hasOwnProperty('ciscoMerakiProductDocumentation'))
        obj.ciscoMerakiProductDocumentation = ApiClient.convertToType(data['ciscoMerakiProductDocumentation'], 'String');
      if (data.hasOwnProperty('supportContactInfo'))
        obj.supportContactInfo = ApiClient.convertToType(data['supportContactInfo'], 'String');
      if (data.hasOwnProperty('newFeaturesSubtab'))
        obj.newFeaturesSubtab = ApiClient.convertToType(data['newFeaturesSubtab'], 'String');
      if (data.hasOwnProperty('firewallInfoSubtab'))
        obj.firewallInfoSubtab = ApiClient.convertToType(data['firewallInfoSubtab'], 'String');
      if (data.hasOwnProperty('apiDocsSubtab'))
        obj.apiDocsSubtab = ApiClient.convertToType(data['apiDocsSubtab'], 'String');
      if (data.hasOwnProperty('hardwareReplacementsSubtab'))
        obj.hardwareReplacementsSubtab = ApiClient.convertToType(data['hardwareReplacementsSubtab'], 'String');
      if (data.hasOwnProperty('smForums'))
        obj.smForums = ApiClient.convertToType(data['smForums'], 'String');
    }
    return obj;
  }

  /**
   *     The Help tab, under which all support information resides. If this tab is hidden, no other 'Help' branding     customizations will be visible. Can be one of 'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.HelpTabEnum} helpTab
   */
  exports.prototype.helpTab = undefined;

  /**
   *     The 'Help -> Get Help' subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note     that if this subtab is hidden, branding customizations for the KB on 'Get help', Cisco Meraki product documentation,     and support contact info will not be visible. Can be one of 'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.GetHelpSubtabEnum} getHelpSubtab
   */
  exports.prototype.getHelpSubtab = undefined;

  /**
   *     The 'Help -> Community' subtab which provides a link to Meraki Community. Can be one of 'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.CommunitySubtabEnum} communitySubtab
   */
  exports.prototype.communitySubtab = undefined;

  /**
   *     The 'Help -> Cases' Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one     of 'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.CasesSubtabEnum} casesSubtab
   */
  exports.prototype.casesSubtab = undefined;

  /**
   *     The 'Help -> Data protection requests' Dashboard subtab on which requests to delete, restrict, or export end-user data can     be audited. Can be one of 'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.DataProtectionRequestsSubtabEnum} dataProtectionRequestsSubtab
   */
  exports.prototype.dataProtectionRequestsSubtab = undefined;

  /**
   *     The KB search box which appears on the Help page. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string. 
   * @member {String} getHelpSubtabKnowledgeBaseSearch
   */
  exports.prototype.getHelpSubtabKnowledgeBaseSearch = undefined;

  /**
   *     The universal search box always visible on Dashboard will, by default, present results from the Meraki KB. This configures     whether these Meraki KB results should be returned. Can be one of 'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.UniversalSearchKnowledgeBaseSearchEnum} universalSearchKnowledgeBaseSearch
   */
  exports.prototype.universalSearchKnowledgeBaseSearch = undefined;

  /**
   *     The 'Product Manuals' section of the 'Help -> Get Help' subtab. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string. 
   * @member {String} ciscoMerakiProductDocumentation
   */
  exports.prototype.ciscoMerakiProductDocumentation = undefined;

  /**
   *     The 'Contact Meraki Support' section of the 'Help -> Get Help' subtab. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string. 
   * @member {String} supportContactInfo
   */
  exports.prototype.supportContactInfo = undefined;

  /**
   *     The 'Help -> New features' subtab where new Dashboard features are detailed. Can be one of 'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.NewFeaturesSubtabEnum} newFeaturesSubtab
   */
  exports.prototype.newFeaturesSubtab = undefined;

  /**
   *     The 'Help -> Firewall info' subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are     listed. Can be one of 'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.FirewallInfoSubtabEnum} firewallInfoSubtab
   */
  exports.prototype.firewallInfoSubtab = undefined;

  /**
   *     The 'Help -> API docs' subtab where a detailed description of the Dashboard API is listed. Can be one of     'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.ApiDocsSubtabEnum} apiDocsSubtab
   */
  exports.prototype.apiDocsSubtab = undefined;

  /**
   *     The 'Help -> Replacement info' subtab where important information regarding device replacements is detailed. Can be one of     'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.HardwareReplacementsSubtabEnum} hardwareReplacementsSubtab
   */
  exports.prototype.hardwareReplacementsSubtab = undefined;

  /**
   *     The 'SM Forums' subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for     organizations that contain Systems Manager networks. Can be one of 'default or inherit', 'hide' or 'show'. 
   * @member {module:model/OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings.SmForumsEnum} smForums
   */
  exports.prototype.smForums = undefined;


  /**
   * Allowed values for the <code>helpTab</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HelpTabEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };


  /**
   * Allowed values for the <code>getHelpSubtab</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GetHelpSubtabEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };


  /**
   * Allowed values for the <code>communitySubtab</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CommunitySubtabEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };


  /**
   * Allowed values for the <code>casesSubtab</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CasesSubtabEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };


  /**
   * Allowed values for the <code>dataProtectionRequestsSubtab</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DataProtectionRequestsSubtabEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };


  /**
   * Allowed values for the <code>universalSearchKnowledgeBaseSearch</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UniversalSearchKnowledgeBaseSearchEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };


  /**
   * Allowed values for the <code>newFeaturesSubtab</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NewFeaturesSubtabEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };


  /**
   * Allowed values for the <code>firewallInfoSubtab</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FirewallInfoSubtabEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };


  /**
   * Allowed values for the <code>apiDocsSubtab</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApiDocsSubtabEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };


  /**
   * Allowed values for the <code>hardwareReplacementsSubtab</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HardwareReplacementsSubtabEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };


  /**
   * Allowed values for the <code>smForums</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SmForumsEnum = {
    /**
     * value: "default or inherit"
     * @const
     */
    defaultOrInherit: "default or inherit",

    /**
     * value: "hide"
     * @const
     */
    hide: "hide",

    /**
     * value: "show"
     * @const
     */
    show: "show"
  };

  return exports;

}));
