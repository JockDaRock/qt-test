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
    root.MerakiDashboardApi.UpdateNetworkWirelessSsidSplashSettings = factory(root.MerakiDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateNetworkWirelessSsidSplashSettings model module.
   * @module model/UpdateNetworkWirelessSsidSplashSettings
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>UpdateNetworkWirelessSsidSplashSettings</code>.
   * @alias module:model/UpdateNetworkWirelessSsidSplashSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateNetworkWirelessSsidSplashSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNetworkWirelessSsidSplashSettings} obj Optional instance to populate.
   * @return {module:model/UpdateNetworkWirelessSsidSplashSettings} The populated <code>UpdateNetworkWirelessSsidSplashSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('splashUrl'))
        obj.splashUrl = ApiClient.convertToType(data['splashUrl'], 'String');
      if (data.hasOwnProperty('useSplashUrl'))
        obj.useSplashUrl = ApiClient.convertToType(data['useSplashUrl'], 'Boolean');
    }
    return obj;
  }

  /**
   * [optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl'
   * @member {String} splashUrl
   */
  exports.prototype.splashUrl = undefined;

  /**
   * [optional] Boolean indicating whether the users will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL.
   * @member {Boolean} useSplashUrl
   */
  exports.prototype.useSplashUrl = undefined;

  return exports;

}));
