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
    describe('UpdateOrganizationSnmp', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.UpdateOrganizationSnmp();
      });

      it('should create an instance of UpdateOrganizationSnmp', function() {
        // TODO: update the code to test UpdateOrganizationSnmp
        expect(instance).to.be.a(MerakiDashboardApi.UpdateOrganizationSnmp);
      });

      it('should have the property v2cEnabled (base name: "v2cEnabled")', function() {
        // TODO: update the code to test the property v2cEnabled
        expect(instance).to.have.property('v2cEnabled');
        // expect(instance.v2cEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property v3Enabled (base name: "v3Enabled")', function() {
        // TODO: update the code to test the property v3Enabled
        expect(instance).to.have.property('v3Enabled');
        // expect(instance.v3Enabled).to.be(expectedValueLiteral);
      });

      it('should have the property v3AuthMode (base name: "v3AuthMode")', function() {
        // TODO: update the code to test the property v3AuthMode
        expect(instance).to.have.property('v3AuthMode');
        // expect(instance.v3AuthMode).to.be(expectedValueLiteral);
      });

      it('should have the property v3AuthPass (base name: "v3AuthPass")', function() {
        // TODO: update the code to test the property v3AuthPass
        expect(instance).to.have.property('v3AuthPass');
        // expect(instance.v3AuthPass).to.be(expectedValueLiteral);
      });

      it('should have the property v3PrivMode (base name: "v3PrivMode")', function() {
        // TODO: update the code to test the property v3PrivMode
        expect(instance).to.have.property('v3PrivMode');
        // expect(instance.v3PrivMode).to.be(expectedValueLiteral);
      });

      it('should have the property v3PrivPass (base name: "v3PrivPass")', function() {
        // TODO: update the code to test the property v3PrivPass
        expect(instance).to.have.property('v3PrivPass');
        // expect(instance.v3PrivPass).to.be(expectedValueLiteral);
      });

      it('should have the property peerIps (base name: "peerIps")', function() {
        // TODO: update the code to test the property peerIps
        expect(instance).to.have.property('peerIps');
        // expect(instance.peerIps).to.be(expectedValueLiteral);
      });

    });
  });

}));
