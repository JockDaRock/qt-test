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
    instance = new MerakiDashboardApi.ConnectivityMonitoringDestinationsApi();
  });

  describe('(package)', function() {
    describe('ConnectivityMonitoringDestinationsApi', function() {
      describe('getNetworkApplianceConnectivityMonitoringDestinations', function() {
        it('should call getNetworkApplianceConnectivityMonitoringDestinations successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkApplianceConnectivityMonitoringDestinations call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkApplianceConnectivityMonitoringDestinations(networkId, function(error, data, response) {
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
      describe('getNetworkCellularGatewayConnectivityMonitoringDestinations', function() {
        it('should call getNetworkCellularGatewayConnectivityMonitoringDestinations successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkCellularGatewayConnectivityMonitoringDestinations call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, function(error, data, response) {
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
      describe('updateNetworkApplianceConnectivityMonitoringDestinations', function() {
        it('should call updateNetworkApplianceConnectivityMonitoringDestinations successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkApplianceConnectivityMonitoringDestinations call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.updateNetworkApplianceConnectivityMonitoringDestinations = new MerakiDashboardApi.UpdateNetworkApplianceConnectivityMonitoringDestinations();
          opts.updateNetworkApplianceConnectivityMonitoringDestinations.destinations = [new MerakiDashboardApi.NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations()];
          opts.updateNetworkApplianceConnectivityMonitoringDestinations.destinations[0].ip = "";
          opts.updateNetworkApplianceConnectivityMonitoringDestinations.destinations[0].description = "";
          opts.updateNetworkApplianceConnectivityMonitoringDestinations.destinations[0]._default = false;

          instance.updateNetworkApplianceConnectivityMonitoringDestinations(networkId, opts, function(error, data, response) {
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
      describe('updateNetworkCellularGatewayConnectivityMonitoringDestinations', function() {
        it('should call updateNetworkCellularGatewayConnectivityMonitoringDestinations successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkCellularGatewayConnectivityMonitoringDestinations call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.updateNetworkCellularGatewayConnectivityMonitoringDestinations = new MerakiDashboardApi.UpdateNetworkCellularGatewayConnectivityMonitoringDestinations();
          opts.updateNetworkCellularGatewayConnectivityMonitoringDestinations.destinations = [new MerakiDashboardApi.NetworksnetworkIdcellularGatewayconnectivityMonitoringDestinationsDestinations()];
          opts.updateNetworkCellularGatewayConnectivityMonitoringDestinations.destinations[0].ip = "";
          opts.updateNetworkCellularGatewayConnectivityMonitoringDestinations.destinations[0].description = "";
          opts.updateNetworkCellularGatewayConnectivityMonitoringDestinations.destinations[0]._default = false;

          instance.updateNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, opts, function(error, data, response) {
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
