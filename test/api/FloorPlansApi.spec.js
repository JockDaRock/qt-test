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
    instance = new MerakiDashboardApi.FloorPlansApi();
  });

  describe('(package)', function() {
    describe('FloorPlansApi', function() {
      describe('createNetworkFloorPlan', function() {
        it('should call createNetworkFloorPlan successfully', function(done) {
          // TODO: uncomment, update parameter values for createNetworkFloorPlan call and complete the assertions
          /*
          var networkId = "networkId_example";
          var createNetworkFloorPlan = new MerakiDashboardApi.CreateNetworkFloorPlan();
          createNetworkFloorPlan.name = "";
          createNetworkFloorPlan.center = new MerakiDashboardApi.NetworksnetworkIdfloorPlansCenter();
          createNetworkFloorPlan.center.lat = 0.0;
          createNetworkFloorPlan.center.lng = 0.0;
          createNetworkFloorPlan.bottomLeftCorner = new MerakiDashboardApi.NetworksnetworkIdfloorPlansBottomLeftCorner();
          createNetworkFloorPlan.bottomLeftCorner.lat = 0.0;
          createNetworkFloorPlan.bottomLeftCorner.lng = 0.0;
          createNetworkFloorPlan.bottomRightCorner = new MerakiDashboardApi.NetworksnetworkIdfloorPlansBottomRightCorner();
          createNetworkFloorPlan.bottomRightCorner.lat = 0.0;
          createNetworkFloorPlan.bottomRightCorner.lng = 0.0;
          createNetworkFloorPlan.topLeftCorner = new MerakiDashboardApi.NetworksnetworkIdfloorPlansTopLeftCorner();
          createNetworkFloorPlan.topLeftCorner.lat = 0.0;
          createNetworkFloorPlan.topLeftCorner.lng = 0.0;
          createNetworkFloorPlan.topRightCorner = new MerakiDashboardApi.NetworksnetworkIdfloorPlansTopRightCorner();
          createNetworkFloorPlan.topRightCorner.lat = 0.0;
          createNetworkFloorPlan.topRightCorner.lng = 0.0;
          createNetworkFloorPlan.imageContents = ""undefined;

          instance.createNetworkFloorPlan(networkId, createNetworkFloorPlan, function(error, data, response) {
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
      describe('deleteNetworkFloorPlan', function() {
        it('should call deleteNetworkFloorPlan successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteNetworkFloorPlan call
          /*
          var networkId = "networkId_example";
          var floorPlanId = "floorPlanId_example";

          instance.deleteNetworkFloorPlan(networkId, floorPlanId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNetworkFloorPlan', function() {
        it('should call getNetworkFloorPlan successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkFloorPlan call and complete the assertions
          /*
          var networkId = "networkId_example";
          var floorPlanId = "floorPlanId_example";

          instance.getNetworkFloorPlan(networkId, floorPlanId, function(error, data, response) {
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
      describe('getNetworkFloorPlans', function() {
        it('should call getNetworkFloorPlans successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkFloorPlans call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkFloorPlans(networkId, function(error, data, response) {
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
      describe('updateNetworkFloorPlan', function() {
        it('should call updateNetworkFloorPlan successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkFloorPlan call and complete the assertions
          /*
          var networkId = "networkId_example";
          var floorPlanId = "floorPlanId_example";
          var opts = {};
          opts.updateNetworkFloorPlan = new MerakiDashboardApi.UpdateNetworkFloorPlan();
          opts.updateNetworkFloorPlan.name = "";
          opts.updateNetworkFloorPlan.center = new MerakiDashboardApi.NetworksnetworkIdfloorPlansfloorPlanIdCenter();
          opts.updateNetworkFloorPlan.center.lat = 0.0;
          opts.updateNetworkFloorPlan.center.lng = 0.0;
          opts.updateNetworkFloorPlan.bottomLeftCorner = new MerakiDashboardApi.NetworksnetworkIdfloorPlansBottomLeftCorner();
          opts.updateNetworkFloorPlan.bottomLeftCorner.lat = 0.0;
          opts.updateNetworkFloorPlan.bottomLeftCorner.lng = 0.0;
          opts.updateNetworkFloorPlan.bottomRightCorner = new MerakiDashboardApi.NetworksnetworkIdfloorPlansBottomRightCorner();
          opts.updateNetworkFloorPlan.bottomRightCorner.lat = 0.0;
          opts.updateNetworkFloorPlan.bottomRightCorner.lng = 0.0;
          opts.updateNetworkFloorPlan.topLeftCorner = new MerakiDashboardApi.NetworksnetworkIdfloorPlansTopLeftCorner();
          opts.updateNetworkFloorPlan.topLeftCorner.lat = 0.0;
          opts.updateNetworkFloorPlan.topLeftCorner.lng = 0.0;
          opts.updateNetworkFloorPlan.topRightCorner = new MerakiDashboardApi.NetworksnetworkIdfloorPlansTopRightCorner();
          opts.updateNetworkFloorPlan.topRightCorner.lat = 0.0;
          opts.updateNetworkFloorPlan.topRightCorner.lng = 0.0;
          opts.updateNetworkFloorPlan.imageContents = ""undefined;

          instance.updateNetworkFloorPlan(networkId, floorPlanId, opts, function(error, data, response) {
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
