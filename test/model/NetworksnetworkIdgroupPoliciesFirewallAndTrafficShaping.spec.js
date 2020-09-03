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

  describe('(package)', function() {
    describe('NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping();
      });

      it('should create an instance of NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping', function() {
        // TODO: update the code to test NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping
        expect(instance).to.be.a(MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping);
      });

      it('should have the property settings (base name: "settings")', function() {
        // TODO: update the code to test the property settings
        expect(instance).to.have.property('settings');
        // expect(instance.settings).to.be(expectedValueLiteral);
      });

      it('should have the property trafficShapingRules (base name: "trafficShapingRules")', function() {
        // TODO: update the code to test the property trafficShapingRules
        expect(instance).to.have.property('trafficShapingRules');
        // expect(instance.trafficShapingRules).to.be(expectedValueLiteral);
      });

      it('should have the property l3FirewallRules (base name: "l3FirewallRules")', function() {
        // TODO: update the code to test the property l3FirewallRules
        expect(instance).to.have.property('l3FirewallRules');
        // expect(instance.l3FirewallRules).to.be(expectedValueLiteral);
      });

      it('should have the property l7FirewallRules (base name: "l7FirewallRules")', function() {
        // TODO: update the code to test the property l7FirewallRules
        expect(instance).to.have.property('l7FirewallRules');
        // expect(instance.l7FirewallRules).to.be(expectedValueLiteral);
      });

    });
  });

}));
