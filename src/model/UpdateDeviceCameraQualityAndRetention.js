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
    root.MerakiDashboardApi.UpdateDeviceCameraQualityAndRetention = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateDeviceCameraQualityAndRetention model module.
   * @module model/UpdateDeviceCameraQualityAndRetention
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateDeviceCameraQualityAndRetention</code>.
   * @alias module:model/UpdateDeviceCameraQualityAndRetention
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateDeviceCameraQualityAndRetention</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateDeviceCameraQualityAndRetention} obj Optional instance to populate.
   * @return {module:model/UpdateDeviceCameraQualityAndRetention} The populated <code>UpdateDeviceCameraQualityAndRetention</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('profileId'))
        obj.profileId = ApiClient.convertToType(data['profileId'], 'String');
      if (data.hasOwnProperty('motionBasedRetentionEnabled'))
        obj.motionBasedRetentionEnabled = ApiClient.convertToType(data['motionBasedRetentionEnabled'], 'Boolean');
      if (data.hasOwnProperty('audioRecordingEnabled'))
        obj.audioRecordingEnabled = ApiClient.convertToType(data['audioRecordingEnabled'], 'Boolean');
      if (data.hasOwnProperty('restrictedBandwidthModeEnabled'))
        obj.restrictedBandwidthModeEnabled = ApiClient.convertToType(data['restrictedBandwidthModeEnabled'], 'Boolean');
      if (data.hasOwnProperty('quality'))
        obj.quality = ApiClient.convertToType(data['quality'], 'String');
      if (data.hasOwnProperty('resolution'))
        obj.resolution = ApiClient.convertToType(data['resolution'], 'String');
      if (data.hasOwnProperty('motionDetectorVersion'))
        obj.motionDetectorVersion = ApiClient.convertToType(data['motionDetectorVersion'], 'Number');
    }
    return obj;
  }

  /**
   * The ID of a quality and retention profile to assign to the camera. The profile's settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera.
   * @member {String} profileId
   */
  exports.prototype.profileId = undefined;

  /**
   * Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera
   * @member {Boolean} motionBasedRetentionEnabled
   */
  exports.prototype.motionBasedRetentionEnabled = undefined;

  /**
   * Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera
   * @member {Boolean} audioRecordingEnabled
   */
  exports.prototype.audioRecordingEnabled = undefined;

  /**
   * Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera
   * @member {Boolean} restrictedBandwidthModeEnabled
   */
  exports.prototype.restrictedBandwidthModeEnabled = undefined;

  /**
   * Quality of the camera. Can be one of 'Standard', 'High' or 'Enhanced'. Not all qualities are supported by every camera model.
   * @member {module:model/UpdateDeviceCameraQualityAndRetention.QualityEnum} quality
   */
  exports.prototype.quality = undefined;

  /**
   * Resolution of the camera. Can be one of '1280x720', '1920x1080', '1080x1080' or '2058x2058'. Not all resolutions are supported by every camera model.
   * @member {module:model/UpdateDeviceCameraQualityAndRetention.ResolutionEnum} resolution
   */
  exports.prototype.resolution = undefined;

  /**
   * The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.
   * @member {Number} motionDetectorVersion
   */
  exports.prototype.motionDetectorVersion = undefined;


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
     * value: "High"
     * @const
     */
    high: "High",

    /**
     * value: "Enhanced"
     * @const
     */
    enhanced: "Enhanced"
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
    _1280x720: "1280x720",

    /**
     * value: "1920x1080"
     * @const
     */
    _1920x1080: "1920x1080",

    /**
     * value: "1080x1080"
     * @const
     */
    _1080x1080: "1080x1080",

    /**
     * value: "2058x2058"
     * @const
     */
    _2058x2058: "2058x2058"
  };

  return exports;

}));
