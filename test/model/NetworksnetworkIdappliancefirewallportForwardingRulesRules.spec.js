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
    describe('NetworksnetworkIdappliancefirewallportForwardingRulesRules', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.NetworksnetworkIdappliancefirewallportForwardingRulesRules();
      });

      it('should create an instance of NetworksnetworkIdappliancefirewallportForwardingRulesRules', function() {
        // TODO: update the code to test NetworksnetworkIdappliancefirewallportForwardingRulesRules
        expect(instance).to.be.a(MerakiDashboardApi.NetworksnetworkIdappliancefirewallportForwardingRulesRules);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property lanIp (base name: "lanIp")', function() {
        // TODO: update the code to test the property lanIp
        expect(instance).to.have.property('lanIp');
        // expect(instance.lanIp).to.be(expectedValueLiteral);
      });

      it('should have the property uplink (base name: "uplink")', function() {
        // TODO: update the code to test the property uplink
        expect(instance).to.have.property('uplink');
        // expect(instance.uplink).to.be(expectedValueLiteral);
      });

      it('should have the property publicPort (base name: "publicPort")', function() {
        // TODO: update the code to test the property publicPort
        expect(instance).to.have.property('publicPort');
        // expect(instance.publicPort).to.be(expectedValueLiteral);
      });

      it('should have the property localPort (base name: "localPort")', function() {
        // TODO: update the code to test the property localPort
        expect(instance).to.have.property('localPort');
        // expect(instance.localPort).to.be(expectedValueLiteral);
      });

      it('should have the property allowedIps (base name: "allowedIps")', function() {
        // TODO: update the code to test the property allowedIps
        expect(instance).to.have.property('allowedIps');
        // expect(instance.allowedIps).to.be(expectedValueLiteral);
      });

      it('should have the property protocol (base name: "protocol")', function() {
        // TODO: update the code to test the property protocol
        expect(instance).to.have.property('protocol');
        // expect(instance.protocol).to.be(expectedValueLiteral);
      });

    });
  });

}));
