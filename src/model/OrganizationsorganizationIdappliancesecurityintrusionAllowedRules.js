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
    root.MerakiDashboardApi.OrganizationsorganizationIdappliancesecurityintrusionAllowedRules = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrganizationsorganizationIdappliancesecurityintrusionAllowedRules model module.
   * @module model/OrganizationsorganizationIdappliancesecurityintrusionAllowedRules
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>OrganizationsorganizationIdappliancesecurityintrusionAllowedRules</code>.
   * @alias module:model/OrganizationsorganizationIdappliancesecurityintrusionAllowedRules
   * @class
   * @param ruleId {String} A rule identifier of the format meraki:intrusion/snort/GID/<gid>/SID/<sid>. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents
   */
  var exports = function(ruleId) {
    this.ruleId = ruleId;
  };

  /**
   * Constructs a <code>OrganizationsorganizationIdappliancesecurityintrusionAllowedRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationsorganizationIdappliancesecurityintrusionAllowedRules} obj Optional instance to populate.
   * @return {module:model/OrganizationsorganizationIdappliancesecurityintrusionAllowedRules} The populated <code>OrganizationsorganizationIdappliancesecurityintrusionAllowedRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ruleId'))
        obj.ruleId = ApiClient.convertToType(data['ruleId'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }

  /**
   * A rule identifier of the format meraki:intrusion/snort/GID/<gid>/SID/<sid>. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents
   * @member {String} ruleId
   */
  exports.prototype.ruleId = undefined;

  /**
   * Message is optional and is ignored on a PUT call. It is allowed in order for PUT to be compatible with GET
   * @member {String} message
   */
  exports.prototype.message = undefined;

  return exports;

}));
