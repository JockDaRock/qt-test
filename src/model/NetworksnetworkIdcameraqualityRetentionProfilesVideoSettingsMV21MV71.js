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
    root.MerakiDashboardApi.NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71 = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71 model module.
   * @module model/NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71</code>.
   * Quality and resolution for MV21/MV71 camera models.
   * @alias module:model/NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71
   * @class
   * @param quality {module:model/NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71.QualityEnum} Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
   * @param resolution {module:model/NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71.ResolutionEnum} Resolution of the camera. Can be one of '1280x720'.
   */
  var exports = function(quality, resolution) {
    this.quality = quality;
    this.resolution = resolution;
  };

  /**
   * Constructs a <code>NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71} The populated <code>NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('quality'))
        obj.quality = ApiClient.convertToType(data['quality'], 'String');
      if (data.hasOwnProperty('resolution'))
        obj.resolution = ApiClient.convertToType(data['resolution'], 'String');
    }
    return obj;
  }

  /**
   * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
   * @member {module:model/NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71.QualityEnum} quality
   */
  exports.prototype.quality = undefined;

  /**
   * Resolution of the camera. Can be one of '1280x720'.
   * @member {module:model/NetworksnetworkIdcameraqualityRetentionProfilesVideoSettingsMV21MV71.ResolutionEnum} resolution
   */
  exports.prototype.resolution = undefined;


  /**
   * Allowed values for the <code>quality</code> property.
   * @enum {String}
   * @readonly
   */
  exports.QualityEnum = {
    /**
     * value: "Standard"
     * @const
     */
    standard: "Standard",

    /**
     * value: "Enhanced"
     * @const
     */
    enhanced: "Enhanced",

    /**
     * value: "High"
     * @const
     */
    high: "High"
  };


  /**
   * Allowed values for the <code>resolution</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResolutionEnum = {
    /**
     * value: "1280x720"
     * @const
     */
    _1280x720: "1280x720"
  };

  return exports;

}));
