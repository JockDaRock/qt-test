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
    describe('UpdateNetworkApplianceTrafficShapingUplinkBandwidth', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.UpdateNetworkApplianceTrafficShapingUplinkBandwidth();
      });

      it('should create an instance of UpdateNetworkApplianceTrafficShapingUplinkBandwidth', function() {
        // TODO: update the code to test UpdateNetworkApplianceTrafficShapingUplinkBandwidth
        expect(instance).to.be.a(MerakiDashboardApi.UpdateNetworkApplianceTrafficShapingUplinkBandwidth);
      });

      it('should have the property bandwidthLimits (base name: "bandwidthLimits")', function() {
        // TODO: update the code to test the property bandwidthLimits
        expect(instance).to.have.property('bandwidthLimits');
        // expect(instance.bandwidthLimits).to.be(expectedValueLiteral);
      });

    });
  });

}));
