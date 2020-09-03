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
    root.MerakiDashboardApi.NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings model module.
   * @module model/NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings</code>.
   * Settings related to 5Ghz band
   * @alias module:model/NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings} obj Optional instance to populate.
   * @return {module:model/NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings} The populated <code>NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('maxPower'))
        obj.maxPower = ApiClient.convertToType(data['maxPower'], 'Number');
      if (data.hasOwnProperty('minPower'))
        obj.minPower = ApiClient.convertToType(data['minPower'], 'Number');
      if (data.hasOwnProperty('minBitrate'))
        obj.minBitrate = ApiClient.convertToType(data['minBitrate'], 'Number');
      if (data.hasOwnProperty('validAutoChannels'))
        obj.validAutoChannels = ApiClient.convertToType(data['validAutoChannels'], ['Number']);
      if (data.hasOwnProperty('channelWidth'))
        obj.channelWidth = ApiClient.convertToType(data['channelWidth'], 'String');
      if (data.hasOwnProperty('rxsop'))
        obj.rxsop = ApiClient.convertToType(data['rxsop'], 'Number');
    }
    return obj;
  }

  /**
   * Sets max power (dBm) of 5Ghz band. Can be integer between 8 and 30.
   * @member {Number} maxPower
   */
  exports.prototype.maxPower = undefined;

  /**
   * Sets min power (dBm) of 5Ghz band. Can be integer between 8 and 30.
   * @member {Number} minPower
   */
  exports.prototype.minPower = undefined;

  /**
   * Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'.
   * @member {Number} minBitrate
   */
  exports.prototype.minBitrate = undefined;

  /**
   * Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'.
   * @member {Array.<Number>} validAutoChannels
   */
  exports.prototype.validAutoChannels = undefined;

  /**
   * Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'.
   * @member {String} channelWidth
   */
  exports.prototype.channelWidth = undefined;

  /**
   *     The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after     consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will     reset this to the default. 
   * @member {Number} rxsop
   */
  exports.prototype.rxsop = undefined;

  return exports;

}));
