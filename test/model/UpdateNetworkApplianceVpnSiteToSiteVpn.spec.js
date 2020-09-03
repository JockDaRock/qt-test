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
    describe('UpdateNetworkApplianceVpnSiteToSiteVpn', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.UpdateNetworkApplianceVpnSiteToSiteVpn();
      });

      it('should create an instance of UpdateNetworkApplianceVpnSiteToSiteVpn', function() {
        // TODO: update the code to test UpdateNetworkApplianceVpnSiteToSiteVpn
        expect(instance).to.be.a(MerakiDashboardApi.UpdateNetworkApplianceVpnSiteToSiteVpn);
      });

      it('should have the property mode (base name: "mode")', function() {
        // TODO: update the code to test the property mode
        expect(instance).to.have.property('mode');
        // expect(instance.mode).to.be(expectedValueLiteral);
      });

      it('should have the property hubs (base name: "hubs")', function() {
        // TODO: update the code to test the property hubs
        expect(instance).to.have.property('hubs');
        // expect(instance.hubs).to.be(expectedValueLiteral);
      });

      it('should have the property subnets (base name: "subnets")', function() {
        // TODO: update the code to test the property subnets
        expect(instance).to.have.property('subnets');
        // expect(instance.subnets).to.be(expectedValueLiteral);
      });

    });
  });

}));