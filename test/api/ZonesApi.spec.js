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
    instance = new MerakiDashboardApi.ZonesApi();
  });

  describe('(package)', function() {
    describe('ZonesApi', function() {
      describe('getDeviceCameraAnalyticsZoneHistory', function() {
        it('should call getDeviceCameraAnalyticsZoneHistory successfully', function(done) {
          // TODO: uncomment, update parameter values for getDeviceCameraAnalyticsZoneHistory call and complete the assertions
          /*
          var serial = "serial_example";
          var zoneId = "zoneId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.resolution = 56;
          opts.objectType = "objectType_example";

          instance.getDeviceCameraAnalyticsZoneHistory(serial, zoneId, opts, function(error, data, response) {
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
      describe('getDeviceCameraAnalyticsZones', function() {
        it('should call getDeviceCameraAnalyticsZones successfully', function(done) {
          // TODO: uncomment, update parameter values for getDeviceCameraAnalyticsZones call and complete the assertions
          /*
          var serial = "serial_example";

          instance.getDeviceCameraAnalyticsZones(serial, function(error, data, response) {
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
