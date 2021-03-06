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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MerakiDashboardApi);
  }
}(this, function(expect, MerakiDashboardApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MerakiDashboardApi.RadioApi();
  });

  describe('(package)', function() {
    describe('RadioApi', function() {
      describe('getDeviceWirelessRadioSettings', function() {
        it('should call getDeviceWirelessRadioSettings successfully', function(done) {
          // TODO: uncomment, update parameter values for getDeviceWirelessRadioSettings call and complete the assertions
          /*
          var serial = "serial_example";

          instance.getDeviceWirelessRadioSettings(serial, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateDeviceWirelessRadioSettings', function() {
        it('should call updateDeviceWirelessRadioSettings successfully', function(done) {
          // TODO: uncomment, update parameter values for updateDeviceWirelessRadioSettings call and complete the assertions
          /*
          var serial = "serial_example";
          var opts = {};
          opts.updateDeviceWirelessRadioSettings = new MerakiDashboardApi.UpdateDeviceWirelessRadioSettings();
          opts.updateDeviceWirelessRadioSettings.rfProfileId = 0;
          opts.updateDeviceWirelessRadioSettings.twoFourGhzSettings = new MerakiDashboardApi.DevicesserialwirelessradiosettingsTwoFourGhzSettings();
          opts.updateDeviceWirelessRadioSettings.twoFourGhzSettings.channel = 0;
          opts.updateDeviceWirelessRadioSettings.twoFourGhzSettings.targetPower = 0;
          opts.updateDeviceWirelessRadioSettings.fiveGhzSettings = new MerakiDashboardApi.DevicesserialwirelessradiosettingsFiveGhzSettings();
          opts.updateDeviceWirelessRadioSettings.fiveGhzSettings.channel = 0;
          opts.updateDeviceWirelessRadioSettings.fiveGhzSettings.channelWidth = 0;
          opts.updateDeviceWirelessRadioSettings.fiveGhzSettings.targetPower = 0;

          instance.updateDeviceWirelessRadioSettings(serial, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
