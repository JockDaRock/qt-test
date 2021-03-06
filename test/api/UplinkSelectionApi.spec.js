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
    instance = new MerakiDashboardApi.UplinkSelectionApi();
  });

  describe('(package)', function() {
    describe('UplinkSelectionApi', function() {
      describe('getNetworkApplianceTrafficShapingUplinkSelection', function() {
        it('should call getNetworkApplianceTrafficShapingUplinkSelection successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkApplianceTrafficShapingUplinkSelection call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkApplianceTrafficShapingUplinkSelection(networkId, function(error, data, response) {
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
      describe('updateNetworkApplianceTrafficShapingUplinkSelection', function() {
        it('should call updateNetworkApplianceTrafficShapingUplinkSelection successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkApplianceTrafficShapingUplinkSelection call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.updateNetworkApplianceTrafficShapingUplinkSelection = new MerakiDashboardApi.UpdateNetworkApplianceTrafficShapingUplinkSelection();
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.activeActiveAutoVpnEnabled = false;
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.defaultUplink = "wan1";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.loadBalancingEnabled = false;
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences = [new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences()];
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters = [new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters()];
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].type = "custom";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].value = new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue();
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].value.protocol = "tcp";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].value.source = new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueSource();
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].value.source.port = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].value.source.cidr = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].value.source.vlan = 0;
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].value.source.host = 0;
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].value.destination = new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination();
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].value.destination.port = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].trafficFilters[0].value.destination.cidr = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.wanTrafficUplinkPreferences[0].preferredUplink = "wan1";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences = [new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionVpnTrafficUplinkPreferences()];
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters = [new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1()];
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].type = "applicationCategory";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value = new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1();
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.id = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.protocol = "tcp";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.source = new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source();
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.source.port = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.source.cidr = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.source.network = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.source.vlan = 0;
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.source.host = 0;
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.destination = new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination();
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.destination.port = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.destination.cidr = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.destination.network = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.destination.vlan = 0;
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.destination.host = 0;
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].trafficFilters[0].value.destination.fqdn = "";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].preferredUplink = "wan1";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].failOverCriterion = "poorPerformance";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].performanceClass = new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass();
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].performanceClass.type = "builtin";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].performanceClass.builtinPerformanceClassName = "VoIP";
          opts.updateNetworkApplianceTrafficShapingUplinkSelection.vpnTrafficUplinkPreferences[0].performanceClass.customPerformanceClassId = "";

          instance.updateNetworkApplianceTrafficShapingUplinkSelection(networkId, opts, function(error, data, response) {
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
