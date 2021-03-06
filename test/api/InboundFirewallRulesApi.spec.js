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
    instance = new MerakiDashboardApi.InboundFirewallRulesApi();
  });

  describe('(package)', function() {
    describe('InboundFirewallRulesApi', function() {
      describe('getNetworkApplianceFirewallInboundFirewallRules', function() {
        it('should call getNetworkApplianceFirewallInboundFirewallRules successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkApplianceFirewallInboundFirewallRules call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkApplianceFirewallInboundFirewallRules(networkId, function(error, data, response) {
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
      describe('updateNetworkApplianceFirewallInboundFirewallRules', function() {
        it('should call updateNetworkApplianceFirewallInboundFirewallRules successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkApplianceFirewallInboundFirewallRules call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.updateNetworkApplianceFirewallInboundFirewallRules = new MerakiDashboardApi.UpdateNetworkApplianceFirewallInboundFirewallRules();
          opts.updateNetworkApplianceFirewallInboundFirewallRules.rules = [new MerakiDashboardApi.NetworksnetworkIdappliancefirewallcellularFirewallRulesRules()];
          opts.updateNetworkApplianceFirewallInboundFirewallRules.rules[0].comment = "";
          opts.updateNetworkApplianceFirewallInboundFirewallRules.rules[0].policy = "allow";
          opts.updateNetworkApplianceFirewallInboundFirewallRules.rules[0].protocol = "tcp";
          opts.updateNetworkApplianceFirewallInboundFirewallRules.rules[0].srcPort = "";
          opts.updateNetworkApplianceFirewallInboundFirewallRules.rules[0].srcCidr = "";
          opts.updateNetworkApplianceFirewallInboundFirewallRules.rules[0].destPort = "";
          opts.updateNetworkApplianceFirewallInboundFirewallRules.rules[0].destCidr = "";
          opts.updateNetworkApplianceFirewallInboundFirewallRules.rules[0].syslogEnabled = false;
          opts.updateNetworkApplianceFirewallInboundFirewallRules.syslogDefaultRule = false;

          instance.updateNetworkApplianceFirewallInboundFirewallRules(networkId, opts, function(error, data, response) {
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
