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
    instance = new MerakiDashboardApi.CellularFirewallRulesApi();
  });

  describe('(package)', function() {
    describe('CellularFirewallRulesApi', function() {
      describe('getNetworkApplianceFirewallCellularFirewallRules', function() {
        it('should call getNetworkApplianceFirewallCellularFirewallRules successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkApplianceFirewallCellularFirewallRules call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkApplianceFirewallCellularFirewallRules(networkId, function(error, data, response) {
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
      describe('updateNetworkApplianceFirewallCellularFirewallRules', function() {
        it('should call updateNetworkApplianceFirewallCellularFirewallRules successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkApplianceFirewallCellularFirewallRules call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.updateNetworkApplianceFirewallCellularFirewallRules = new MerakiDashboardApi.UpdateNetworkApplianceFirewallCellularFirewallRules();
          opts.updateNetworkApplianceFirewallCellularFirewallRules.rules = [new MerakiDashboardApi.NetworksnetworkIdappliancefirewallcellularFirewallRulesRules()];
          opts.updateNetworkApplianceFirewallCellularFirewallRules.rules[0].comment = "";
          opts.updateNetworkApplianceFirewallCellularFirewallRules.rules[0].policy = "allow";
          opts.updateNetworkApplianceFirewallCellularFirewallRules.rules[0].protocol = "tcp";
          opts.updateNetworkApplianceFirewallCellularFirewallRules.rules[0].srcPort = "";
          opts.updateNetworkApplianceFirewallCellularFirewallRules.rules[0].srcCidr = "";
          opts.updateNetworkApplianceFirewallCellularFirewallRules.rules[0].destPort = "";
          opts.updateNetworkApplianceFirewallCellularFirewallRules.rules[0].destCidr = "";
          opts.updateNetworkApplianceFirewallCellularFirewallRules.rules[0].syslogEnabled = false;

          instance.updateNetworkApplianceFirewallCellularFirewallRules(networkId, opts, function(error, data, response) {
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
