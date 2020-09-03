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
    define(['ApiClient', 'model/NetworksnetworkIdfloorPlansBottomLeftCorner', 'model/NetworksnetworkIdfloorPlansBottomRightCorner', 'model/NetworksnetworkIdfloorPlansTopLeftCorner', 'model/NetworksnetworkIdfloorPlansTopRightCorner', 'model/NetworksnetworkIdfloorPlansfloorPlanIdCenter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdfloorPlansBottomLeftCorner'), require('./NetworksnetworkIdfloorPlansBottomRightCorner'), require('./NetworksnetworkIdfloorPlansTopLeftCorner'), require('./NetworksnetworkIdfloorPlansTopRightCorner'), require('./NetworksnetworkIdfloorPlansfloorPlanIdCenter'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.UpdateNetworkFloorPlan = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdfloorPlansBottomLeftCorner, root.MerakiDashboardApi.NetworksnetworkIdfloorPlansBottomRightCorner, root.MerakiDashboardApi.NetworksnetworkIdfloorPlansTopLeftCorner, root.MerakiDashboardApi.NetworksnetworkIdfloorPlansTopRightCorner, root.MerakiDashboardApi.NetworksnetworkIdfloorPlansfloorPlanIdCenter);
  }
}(this, function(ApiClient, NetworksnetworkIdfloorPlansBottomLeftCorner, NetworksnetworkIdfloorPlansBottomRightCorner, NetworksnetworkIdfloorPlansTopLeftCorner, NetworksnetworkIdfloorPlansTopRightCorner, NetworksnetworkIdfloorPlansfloorPlanIdCenter) {
  'use strict';

  /**
   * The UpdateNetworkFloorPlan model module.
   * @module model/UpdateNetworkFloorPlan
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkFloorPlan</code>.
   * @alias module:model/UpdateNetworkFloorPlan
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkFloorPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkFloorPlan} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkFloorPlan} The populated <code>UpdateNetworkFloorPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('center'))
        obj.center = NetworksnetworkIdfloorPlansfloorPlanIdCenter.constructFromObject(data['center']);
      if (data.hasOwnProperty('bottomLeftCorner'))
        obj.bottomLeftCorner = NetworksnetworkIdfloorPlansBottomLeftCorner.constructFromObject(data['bottomLeftCorner']);
      if (data.hasOwnProperty('bottomRightCorner'))
        obj.bottomRightCorner = NetworksnetworkIdfloorPlansBottomRightCorner.constructFromObject(data['bottomRightCorner']);
      if (data.hasOwnProperty('topLeftCorner'))
        obj.topLeftCorner = NetworksnetworkIdfloorPlansTopLeftCorner.constructFromObject(data['topLeftCorner']);
      if (data.hasOwnProperty('topRightCorner'))
        obj.topRightCorner = NetworksnetworkIdfloorPlansTopRightCorner.constructFromObject(data['topRightCorner']);
      if (data.hasOwnProperty('imageContents'))
        obj.imageContents = ApiClient.convertToType(data['imageContents'], 'Blob');
    }
    return obj;
  }

  /**
   * The name of your floor plan.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/NetworksnetworkIdfloorPlansfloorPlanIdCenter} center
   */
  exports.prototype.center = undefined;

  /**
   * @member {module:model/NetworksnetworkIdfloorPlansBottomLeftCorner} bottomLeftCorner
   */
  exports.prototype.bottomLeftCorner = undefined;

  /**
   * @member {module:model/NetworksnetworkIdfloorPlansBottomRightCorner} bottomRightCorner
   */
  exports.prototype.bottomRightCorner = undefined;

  /**
   * @member {module:model/NetworksnetworkIdfloorPlansTopLeftCorner} topLeftCorner
   */
  exports.prototype.topLeftCorner = undefined;

  /**
   * @member {module:model/NetworksnetworkIdfloorPlansTopRightCorner} topRightCorner
   */
  exports.prototype.topRightCorner = undefined;

  /**
   * The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields ('center, 'topLeftCorner', etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image.
   * @member {Blob} imageContents
   */
  exports.prototype.imageContents = undefined;

  return exports;

}));