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
    describe('UpdateNetworkApplianceWarmSpare', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.UpdateNetworkApplianceWarmSpare();
      });

      it('should create an instance of UpdateNetworkApplianceWarmSpare', function() {
        // TODO: update the code to test UpdateNetworkApplianceWarmSpare
        expect(instance).to.be.a(MerakiDashboardApi.UpdateNetworkApplianceWarmSpare);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property spareSerial (base name: "spareSerial")', function() {
        // TODO: update the code to test the property spareSerial
        expect(instance).to.have.property('spareSerial');
        // expect(instance.spareSerial).to.be(expectedValueLiteral);
      });

      it('should have the property uplinkMode (base name: "uplinkMode")', function() {
        // TODO: update the code to test the property uplinkMode
        expect(instance).to.have.property('uplinkMode');
        // expect(instance.uplinkMode).to.be(expectedValueLiteral);
      });

      it('should have the property virtualIp1 (base name: "virtualIp1")', function() {
        // TODO: update the code to test the property virtualIp1
        expect(instance).to.have.property('virtualIp1');
        // expect(instance.virtualIp1).to.be(expectedValueLiteral);
      });

      it('should have the property virtualIp2 (base name: "virtualIp2")', function() {
        // TODO: update the code to test the property virtualIp2
        expect(instance).to.have.property('virtualIp2');
        // expect(instance.virtualIp2).to.be(expectedValueLiteral);
      });

    });
  });

}));
