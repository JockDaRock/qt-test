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
    define(['ApiClient', 'model/NetworksnetworkIdfloorPlansBottomLeftCorner', 'model/NetworksnetworkIdfloorPlansBottomRightCorner', 'model/NetworksnetworkIdfloorPlansCenter', 'model/NetworksnetworkIdfloorPlansTopLeftCorner', 'model/NetworksnetworkIdfloorPlansTopRightCorner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworksnetworkIdfloorPlansBottomLeftCorner'), require('./NetworksnetworkIdfloorPlansBottomRightCorner'), require('./NetworksnetworkIdfloorPlansCenter'), require('./NetworksnetworkIdfloorPlansTopLeftCorner'), require('./NetworksnetworkIdfloorPlansTopRightCorner'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.CreateNetworkFloorPlan = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.NetworksnetworkIdfloorPlansBottomLeftCorner, root.MerakiDashboardApi.NetworksnetworkIdfloorPlansBottomRightCorner, root.MerakiDashboardApi.NetworksnetworkIdfloorPlansCenter, root.MerakiDashboardApi.NetworksnetworkIdfloorPlansTopLeftCorner, root.MerakiDashboardApi.NetworksnetworkIdfloorPlansTopRightCorner);
  }
}(this, function(ApiClient, NetworksnetworkIdfloorPlansBottomLeftCorner, NetworksnetworkIdfloorPlansBottomRightCorner, NetworksnetworkIdfloorPlansCenter, NetworksnetworkIdfloorPlansTopLeftCorner, NetworksnetworkIdfloorPlansTopRightCorner) {
  'use strict';

  /**
   * The CreateNetworkFloorPlan model module.
   * @module model/CreateNetworkFloorPlan
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CreateNetworkFloorPlan</code>.
   * @alias module:model/CreateNetworkFloorPlan
   * @class
   * @param name {String} The name of your floor plan.
   * @param imageContents {Blob} The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in.
   */
  var exports = function(name, imageContents) {
    this.name = name;
    this.imageContents = imageContents;
  };

  /**
   * Constructs a <code>CreateNetworkFloorPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateNetworkFloorPlan} obj Optional instance to populate.
   * @return {module:model/CreateNetworkFloorPlan} The populated <code>CreateNetworkFloorPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('center'))
        obj.center = NetworksnetworkIdfloorPlansCenter.constructFromObject(data['center']);
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
   * @member {module:model/NetworksnetworkIdfloorPlansCenter} center
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
   * The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in.
   * @member {Blob} imageContents
   */
  exports.prototype.imageContents = undefined;

  return exports;

}));
