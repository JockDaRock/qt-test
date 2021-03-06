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
    instance = new MerakiDashboardApi.StatusesApi();
  });

  describe('(package)', function() {
    describe('StatusesApi', function() {
      describe('getDeviceSwitchPortsStatuses', function() {
        it('should call getDeviceSwitchPortsStatuses successfully', function(done) {
          // TODO: uncomment, update parameter values for getDeviceSwitchPortsStatuses call and complete the assertions
          /*
          var serial = "serial_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.timespan = 3.4;

          instance.getDeviceSwitchPortsStatuses(serial, opts, function(error, data, response) {
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
      describe('getDeviceSwitchPortsStatusesPackets', function() {
        it('should call getDeviceSwitchPortsStatusesPackets successfully', function(done) {
          // TODO: uncomment, update parameter values for getDeviceSwitchPortsStatusesPackets call and complete the assertions
          /*
          var serial = "serial_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.timespan = 3.4;

          instance.getDeviceSwitchPortsStatusesPackets(serial, opts, function(error, data, response) {
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
      describe('getOrganizationApplianceUplinkStatuses', function() {
        it('should call getOrganizationApplianceUplinkStatuses successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganizationApplianceUplinkStatuses call and complete the assertions
          /*
          var organizationId = "organizationId_example";
          var opts = {};
          opts.perPage = 56;
          opts.startingAfter = "startingAfter_example";
          opts.endingBefore = "endingBefore_example";

          instance.getOrganizationApplianceUplinkStatuses(organizationId, opts, function(error, data, response) {
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
      describe('getOrganizationApplianceVpnStatuses', function() {
        it('should call getOrganizationApplianceVpnStatuses successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganizationApplianceVpnStatuses call and complete the assertions
          /*
          var organizationId = "organizationId_example";
          var opts = {};
          opts.perPage = 56;
          opts.startingAfter = "startingAfter_example";
          opts.endingBefore = "endingBefore_example";
          opts.networkIds = ["networkIds_example"];

          instance.getOrganizationApplianceVpnStatuses(organizationId, opts, function(error, data, response) {
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
      describe('getOrganizationDevicesStatuses', function() {
        it('should call getOrganizationDevicesStatuses successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganizationDevicesStatuses call and complete the assertions
          /*
          var organizationId = "organizationId_example";
          var opts = {};
          opts.perPage = 56;
          opts.startingAfter = "startingAfter_example";
          opts.endingBefore = "endingBefore_example";

          instance.getOrganizationDevicesStatuses(organizationId, opts, function(error, data, response) {
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
