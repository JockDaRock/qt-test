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
    describe('UpdateNetworkAppliancePort', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.UpdateNetworkAppliancePort();
      });

      it('should create an instance of UpdateNetworkAppliancePort', function() {
        // TODO: update the code to test UpdateNetworkAppliancePort
        expect(instance).to.be.a(MerakiDashboardApi.UpdateNetworkAppliancePort);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property dropUntaggedTraffic (base name: "dropUntaggedTraffic")', function() {
        // TODO: update the code to test the property dropUntaggedTraffic
        expect(instance).to.have.property('dropUntaggedTraffic');
        // expect(instance.dropUntaggedTraffic).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property vlan (base name: "vlan")', function() {
        // TODO: update the code to test the property vlan
        expect(instance).to.have.property('vlan');
        // expect(instance.vlan).to.be(expectedValueLiteral);
      });

      it('should have the property allowedVlans (base name: "allowedVlans")', function() {
        // TODO: update the code to test the property allowedVlans
        expect(instance).to.have.property('allowedVlans');
        // expect(instance.allowedVlans).to.be(expectedValueLiteral);
      });

      it('should have the property accessPolicy (base name: "accessPolicy")', function() {
        // TODO: update the code to test the property accessPolicy
        expect(instance).to.have.property('accessPolicy');
        // expect(instance.accessPolicy).to.be(expectedValueLiteral);
      });

    });
  });

}));
