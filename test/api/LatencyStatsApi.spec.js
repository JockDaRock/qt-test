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
    instance = new MerakiDashboardApi.LatencyStatsApi();
  });

  describe('(package)', function() {
    describe('LatencyStatsApi', function() {
      describe('getDeviceWirelessLatencyStats', function() {
        it('should call getDeviceWirelessLatencyStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getDeviceWirelessLatencyStats call and complete the assertions
          /*
          var serial = "serial_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.band = "band_example";
          opts.ssid = 56;
          opts.vlan = 56;
          opts.apTag = "apTag_example";
          opts.fields = "fields_example";

          instance.getDeviceWirelessLatencyStats(serial, opts, function(error, data, response) {
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
      describe('getNetworkWirelessClientLatencyStats', function() {
        it('should call getNetworkWirelessClientLatencyStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkWirelessClientLatencyStats call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.band = "band_example";
          opts.ssid = 56;
          opts.vlan = 56;
          opts.apTag = "apTag_example";
          opts.fields = "fields_example";

          instance.getNetworkWirelessClientLatencyStats(networkId, clientId, opts, function(error, data, response) {
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
      describe('getNetworkWirelessClientsLatencyStats', function() {
        it('should call getNetworkWirelessClientsLatencyStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkWirelessClientsLatencyStats call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.band = "band_example";
          opts.ssid = 56;
          opts.vlan = 56;
          opts.apTag = "apTag_example";
          opts.fields = "fields_example";

          instance.getNetworkWirelessClientsLatencyStats(networkId, opts, function(error, data, response) {
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
      describe('getNetworkWirelessDevicesLatencyStats', function() {
        it('should call getNetworkWirelessDevicesLatencyStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkWirelessDevicesLatencyStats call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.band = "band_example";
          opts.ssid = 56;
          opts.vlan = 56;
          opts.apTag = "apTag_example";
          opts.fields = "fields_example";

          instance.getNetworkWirelessDevicesLatencyStats(networkId, opts, function(error, data, response) {
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
      describe('getNetworkWirelessLatencyStats', function() {
        it('should call getNetworkWirelessLatencyStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkWirelessLatencyStats call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.band = "band_example";
          opts.ssid = 56;
          opts.vlan = 56;
          opts.apTag = "apTag_example";
          opts.fields = "fields_example";

          instance.getNetworkWirelessLatencyStats(networkId, opts, function(error, data, response) {
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
