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
    instance = new MerakiDashboardApi.StpApi();
  });

  describe('(package)', function() {
    describe('StpApi', function() {
      describe('getNetworkSwitchStp', function() {
        it('should call getNetworkSwitchStp successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkSwitchStp call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkSwitchStp(networkId, function(error, data, response) {
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
      describe('updateNetworkSwitchStp', function() {
        it('should call updateNetworkSwitchStp successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkSwitchStp call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.updateNetworkSwitchStp = new MerakiDashboardApi.UpdateNetworkSwitchStp();
          opts.updateNetworkSwitchStp.rstpEnabled = false;
          opts.updateNetworkSwitchStp.stpBridgePriority = [new MerakiDashboardApi.NetworksnetworkIdswitchstpStpBridgePriority()];
          opts.updateNetworkSwitchStp.stpBridgePriority[0].switchProfiles = [""];
          opts.updateNetworkSwitchStp.stpBridgePriority[0].switches = [""];
          opts.updateNetworkSwitchStp.stpBridgePriority[0].stacks = [""];
          opts.updateNetworkSwitchStp.stpBridgePriority[0].stpPriority = 0;

          instance.updateNetworkSwitchStp(networkId, opts, function(error, data, response) {
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
