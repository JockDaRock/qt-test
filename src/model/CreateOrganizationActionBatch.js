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
    define(['ApiClient', 'model/OrganizationsorganizationIdactionBatchesActions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrganizationsorganizationIdactionBatchesActions'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.CreateOrganizationActionBatch = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.OrganizationsorganizationIdactionBatchesActions);
  }
}(this, function(ApiClient, OrganizationsorganizationIdactionBatchesActions) {
  'use strict';

  /**
   * The CreateOrganizationActionBatch model module.
   * @module model/CreateOrganizationActionBatch
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CreateOrganizationActionBatch</code>.
   * @alias module:model/CreateOrganizationActionBatch
   * @class
   * @param actions {Array.<module:model/OrganizationsorganizationIdactionBatchesActions>} A set of changes to make as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)
   */
  var exports = function(actions) {
    this.actions = actions;
  };

  /**
   * Constructs a <code>CreateOrganizationActionBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateOrganizationActionBatch} obj Optional instance to populate.
   * @return {module:model/CreateOrganizationActionBatch} The populated <code>CreateOrganizationActionBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('confirmed'))
        obj.confirmed = ApiClient.convertToType(data['confirmed'], 'Boolean');
      if (data.hasOwnProperty('synchronous'))
        obj.synchronous = ApiClient.convertToType(data['synchronous'], 'Boolean');
      if (data.hasOwnProperty('actions'))
        obj.actions = ApiClient.convertToType(data['actions'], [OrganizationsorganizationIdactionBatchesActions]);
    }
    return obj;
  }

  /**
   * Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false.
   * @member {Boolean} confirmed
   */
  exports.prototype.confirmed = undefined;

  /**
   * Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false.
   * @member {Boolean} synchronous
   */
  exports.prototype.synchronous = undefined;

  /**
   * A set of changes to make as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)
   * @member {Array.<module:model/OrganizationsorganizationIdactionBatchesActions>} actions
   */
  exports.prototype.actions = undefined;

  return exports;

}));
