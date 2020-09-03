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
    root.MerakiDashboardApi.NetworksnetworkIdswitchdscpToCosMappingsMappings = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdswitchdscpToCosMappingsMappings model module.
   * @module model/NetworksnetworkIdswitchdscpToCosMappingsMappings
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdswitchdscpToCosMappingsMappings</code>.
   * @alias module:model/NetworksnetworkIdswitchdscpToCosMappingsMappings
   * @class
   * @param dscp {Number} The Differentiated Services Code Point (DSCP) tag in the IP header that will be mapped to a particular Class-of-Service (CoS) queue. Value can be in the range of 0 to 63 inclusive.
   * @param cos {Number} The actual layer-2 CoS queue the DSCP value is mapped to. These are not bits set on outgoing frames. Value can be in the range of 0 to 5 inclusive.
   */
  var exports = function(dscp, cos) {
    this.dscp = dscp;
    this.cos = cos;
  };

  /**
   * Constructs a <code>NetworksnetworkIdswitchdscpToCosMappingsMappings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdswitchdscpToCosMappingsMappings} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdswitchdscpToCosMappingsMappings} The populated <code>NetworksnetworkIdswitchdscpToCosMappingsMappings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dscp'))
        obj.dscp = ApiClient.convertToType(data['dscp'], 'Number');
      if (data.hasOwnProperty('cos'))
        obj.cos = ApiClient.convertToType(data['cos'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }

  /**
   * The Differentiated Services Code Point (DSCP) tag in the IP header that will be mapped to a particular Class-of-Service (CoS) queue. Value can be in the range of 0 to 63 inclusive.
   * @member {Number} dscp
   */
  exports.prototype.dscp = undefined;

  /**
   * The actual layer-2 CoS queue the DSCP value is mapped to. These are not bits set on outgoing frames. Value can be in the range of 0 to 5 inclusive.
   * @member {Number} cos
   */
  exports.prototype.cos = undefined;

  /**
   * Label for the mapping (optional).
   * @member {String} title
   */
  exports.prototype.title = undefined;

  return exports;

}));
