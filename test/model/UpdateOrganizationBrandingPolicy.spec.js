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
    describe('UpdateOrganizationBrandingPolicy', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.UpdateOrganizationBrandingPolicy();
      });

      it('should create an instance of UpdateOrganizationBrandingPolicy', function() {
        // TODO: update the code to test UpdateOrganizationBrandingPolicy
        expect(instance).to.be.a(MerakiDashboardApi.UpdateOrganizationBrandingPolicy);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property adminSettings (base name: "adminSettings")', function() {
        // TODO: update the code to test the property adminSettings
        expect(instance).to.have.property('adminSettings');
        // expect(instance.adminSettings).to.be(expectedValueLiteral);
      });

      it('should have the property helpSettings (base name: "helpSettings")', function() {
        // TODO: update the code to test the property helpSettings
        expect(instance).to.have.property('helpSettings');
        // expect(instance.helpSettings).to.be(expectedValueLiteral);
      });

    });
  });

}));
