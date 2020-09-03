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
    describe('NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source();
      });

      it('should create an instance of NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source', function() {
        // TODO: update the code to test NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source
        expect(instance).to.be.a(MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source);
      });

      it('should have the property port (base name: "port")', function() {
        // TODO: update the code to test the property port
        expect(instance).to.have.property('port');
        // expect(instance.port).to.be(expectedValueLiteral);
      });

      it('should have the property cidr (base name: "cidr")', function() {
        // TODO: update the code to test the property cidr
        expect(instance).to.have.property('cidr');
        // expect(instance.cidr).to.be(expectedValueLiteral);
      });

      it('should have the property network (base name: "network")', function() {
        // TODO: update the code to test the property network
        expect(instance).to.have.property('network');
        // expect(instance.network).to.be(expectedValueLiteral);
      });

      it('should have the property vlan (base name: "vlan")', function() {
        // TODO: update the code to test the property vlan
        expect(instance).to.have.property('vlan');
        // expect(instance.vlan).to.be(expectedValueLiteral);
      });

      it('should have the property host (base name: "host")', function() {
        // TODO: update the code to test the property host
        expect(instance).to.have.property('host');
        // expect(instance.host).to.be(expectedValueLiteral);
      });

    });
  });

}));
