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
    define(['ApiClient', 'model/NetworksnetworkIdswitchlinkAggregationsSwitchPorts', 'model/NetworksnetworkIdswitchlinkAggregationsSwitchProfilePorts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdswitchlinkAggregationsSwitchPorts'), require('./NetworksnetworkIdswitchlinkAggregationsSwitchProfilePorts'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.CreateNetworkSwitchLinkAggregation = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdswitchlinkAggregationsSwitchPorts, root.MerakiDashboardApi.NetworksnetworkIdswitchlinkAggregationsSwitchProfilePorts);
  }
}(this, function(ApiClient, NetworksnetworkIdswitchlinkAggregationsSwitchPorts, NetworksnetworkIdswitchlinkAggregationsSwitchProfilePorts) {
  'use strict';

  /**
   * The CreateNetworkSwitchLinkAggregation model module.
   * @module model/CreateNetworkSwitchLinkAggregation
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CreateNetworkSwitchLinkAggregation</code>.
   * @alias module:model/CreateNetworkSwitchLinkAggregation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateNetworkSwitchLinkAggregation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateNetworkSwitchLinkAggregation} obj Optional instance to populate.
   * @return {module:model/CreateNetworkSwitchLinkAggregation} The populated <code>CreateNetworkSwitchLinkAggregation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('switchPorts'))
        obj.switchPorts = ApiClient.convertToType(data['switchPorts'], [NetworksnetworkIdswitchlinkAggregationsSwitchPorts]);
      if (data.hasOwnProperty('switchProfilePorts'))
        obj.switchProfilePorts = ApiClient.convertToType(data['switchProfilePorts'], [NetworksnetworkIdswitchlinkAggregationsSwitchProfilePorts]);
    }
    return obj;
  }

  /**
   * Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.
   * @member {Array.<module:model/NetworksnetworkIdswitchlinkAggregationsSwitchPorts>} switchPorts
   */
  exports.prototype.switchPorts = undefined;

  /**
   * Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.
   * @member {Array.<module:model/NetworksnetworkIdswitchlinkAggregationsSwitchProfilePorts>} switchProfilePorts
   */
  exports.prototype.switchProfilePorts = undefined;

  return exports;

}));