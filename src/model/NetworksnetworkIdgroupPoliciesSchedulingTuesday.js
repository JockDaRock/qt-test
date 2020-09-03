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
    root.MerakiDashboardApi.NetworksnetworkIdgroupPoliciesSchedulingTuesday = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdgroupPoliciesSchedulingTuesday model module.
   * @module model/NetworksnetworkIdgroupPoliciesSchedulingTuesday
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdgroupPoliciesSchedulingTuesday</code>.
   * The schedule object for Tuesday.
   * @alias module:model/NetworksnetworkIdgroupPoliciesSchedulingTuesday
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworksnetworkIdgroupPoliciesSchedulingTuesday</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdgroupPoliciesSchedulingTuesday} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdgroupPoliciesSchedulingTuesday} The populated <code>NetworksnetworkIdgroupPoliciesSchedulingTuesday</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('from'))
        obj.from = ApiClient.convertToType(data['from'], 'String');
      if (data.hasOwnProperty('to'))
        obj.to = ApiClient.convertToType(data['to'], 'String');
    }
    return obj;
  }

  /**
   * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
   * @member {String} from
   */
  exports.prototype.from = undefined;

  /**
   * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
   * @member {String} to
   */
  exports.prototype.to = undefined;

  return exports;

}));
