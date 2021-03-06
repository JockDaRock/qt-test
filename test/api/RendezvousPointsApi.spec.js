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
    instance = new MerakiDashboardApi.RendezvousPointsApi();
  });

  describe('(package)', function() {
    describe('RendezvousPointsApi', function() {
      describe('createNetworkSwitchRoutingMulticastRendezvousPoint', function() {
        it('should call createNetworkSwitchRoutingMulticastRendezvousPoint successfully', function(done) {
          // TODO: uncomment, update parameter values for createNetworkSwitchRoutingMulticastRendezvousPoint call and complete the assertions
          /*
          var networkId = "networkId_example";
          var createNetworkSwitchRoutingMulticastRendezvousPoint = new MerakiDashboardApi.CreateNetworkSwitchRoutingMulticastRendezvousPoint();
          createNetworkSwitchRoutingMulticastRendezvousPoint.interfaceIp = "";
          createNetworkSwitchRoutingMulticastRendezvousPoint.multicastGroup = "";

          instance.createNetworkSwitchRoutingMulticastRendezvousPoint(networkId, createNetworkSwitchRoutingMulticastRendezvousPoint, function(error, data, response) {
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
      describe('deleteNetworkSwitchRoutingMulticastRendezvousPoint', function() {
        it('should call deleteNetworkSwitchRoutingMulticastRendezvousPoint successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteNetworkSwitchRoutingMulticastRendezvousPoint call
          /*
          var networkId = "networkId_example";
          var rendezvousPointId = "rendezvousPointId_example";

          instance.deleteNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, function(error, data, response) {
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
      describe('getNetworkSwitchRoutingMulticastRendezvousPoint', function() {
        it('should call getNetworkSwitchRoutingMulticastRendezvousPoint successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkSwitchRoutingMulticastRendezvousPoint call and complete the assertions
          /*
          var networkId = "networkId_example";
          var rendezvousPointId = "rendezvousPointId_example";

          instance.getNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, function(error, data, response) {
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
      describe('getNetworkSwitchRoutingMulticastRendezvousPoints', function() {
        it('should call getNetworkSwitchRoutingMulticastRendezvousPoints successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkSwitchRoutingMulticastRendezvousPoints call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkSwitchRoutingMulticastRendezvousPoints(networkId, function(error, data, response) {
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
      describe('updateNetworkSwitchRoutingMulticastRendezvousPoint', function() {
        it('should call updateNetworkSwitchRoutingMulticastRendezvousPoint successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkSwitchRoutingMulticastRendezvousPoint call and complete the assertions
          /*
          var networkId = "networkId_example";
          var rendezvousPointId = "rendezvousPointId_example";
          var updateNetworkSwitchRoutingMulticastRendezvousPoint = new MerakiDashboardApi.UpdateNetworkSwitchRoutingMulticastRendezvousPoint();
          updateNetworkSwitchRoutingMulticastRendezvousPoint.interfaceIp = "";
          updateNetworkSwitchRoutingMulticastRendezvousPoint.multicastGroup = "";

          instance.updateNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, updateNetworkSwitchRoutingMulticastRendezvousPoint, function(error, data, response) {
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
