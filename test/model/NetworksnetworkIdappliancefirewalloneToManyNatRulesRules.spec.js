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
    describe('NetworksnetworkIdappliancefirewalloneToManyNatRulesRules', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.NetworksnetworkIdappliancefirewalloneToManyNatRulesRules();
      });

      it('should create an instance of NetworksnetworkIdappliancefirewalloneToManyNatRulesRules', function() {
        // TODO: update the code to test NetworksnetworkIdappliancefirewalloneToManyNatRulesRules
        expect(instance).to.be.a(MerakiDashboardApi.NetworksnetworkIdappliancefirewalloneToManyNatRulesRules);
      });

      it('should have the property publicIp (base name: "publicIp")', function() {
        // TODO: update the code to test the property publicIp
        expect(instance).to.have.property('publicIp');
        // expect(instance.publicIp).to.be(expectedValueLiteral);
      });

      it('should have the property uplink (base name: "uplink")', function() {
        // TODO: update the code to test the property uplink
        expect(instance).to.have.property('uplink');
        // expect(instance.uplink).to.be(expectedValueLiteral);
      });

      it('should have the property portRules (base name: "portRules")', function() {
        // TODO: update the code to test the property portRules
        expect(instance).to.have.property('portRules');
        // expect(instance.portRules).to.be(expectedValueLiteral);
      });

    });
  });

}));
