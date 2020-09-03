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
    describe('NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules();
      });

      it('should create an instance of NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules', function() {
        // TODO: update the code to test NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules
        expect(instance).to.be.a(MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules);
      });

      it('should have the property comment (base name: "comment")', function() {
        // TODO: update the code to test the property comment
        expect(instance).to.have.property('comment');
        // expect(instance.comment).to.be(expectedValueLiteral);
      });

      it('should have the property policy (base name: "policy")', function() {
        // TODO: update the code to test the property policy
        expect(instance).to.have.property('policy');
        // expect(instance.policy).to.be(expectedValueLiteral);
      });

      it('should have the property protocol (base name: "protocol")', function() {
        // TODO: update the code to test the property protocol
        expect(instance).to.have.property('protocol');
        // expect(instance.protocol).to.be(expectedValueLiteral);
      });

      it('should have the property destPort (base name: "destPort")', function() {
        // TODO: update the code to test the property destPort
        expect(instance).to.have.property('destPort');
        // expect(instance.destPort).to.be(expectedValueLiteral);
      });

      it('should have the property destCidr (base name: "destCidr")', function() {
        // TODO: update the code to test the property destCidr
        expect(instance).to.have.property('destCidr');
        // expect(instance.destCidr).to.be(expectedValueLiteral);
      });

    });
  });

}));
