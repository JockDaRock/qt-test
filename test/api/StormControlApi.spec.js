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
    instance = new MerakiDashboardApi.StormControlApi();
  });

  describe('(package)', function() {
    describe('StormControlApi', function() {
      describe('getNetworkSwitchStormControl', function() {
        it('should call getNetworkSwitchStormControl successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkSwitchStormControl call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkSwitchStormControl(networkId, function(error, data, response) {
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
      describe('updateNetworkSwitchStormControl', function() {
        it('should call updateNetworkSwitchStormControl successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkSwitchStormControl call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.updateNetworkSwitchStormControl = new MerakiDashboardApi.UpdateNetworkSwitchStormControl();
          opts.updateNetworkSwitchStormControl.broadcastThreshold = 0;
          opts.updateNetworkSwitchStormControl.multicastThreshold = 0;
          opts.updateNetworkSwitchStormControl.unknownUnicastThreshold = 0;

          instance.updateNetworkSwitchStormControl(networkId, opts, function(error, data, response) {
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
