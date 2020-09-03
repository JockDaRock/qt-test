/**
 * Meraki Dashboard API
 * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date: 05 August, 2020 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https://meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https://www.meraki.com) 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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

  beforeEach(function() {
    instance = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OrganizationsorganizationIdbrandingPoliciesHelpSettings', function() {
    it('should create an instance of OrganizationsorganizationIdbrandingPoliciesHelpSettings', function() {
      // uncomment below and update the code to test OrganizationsorganizationIdbrandingPoliciesHelpSettings
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be.a(MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings);
    });

    it('should have the property helpTab (base name: "helpTab")', function() {
      // uncomment below and update the code to test the property helpTab
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property getHelpSubtab (base name: "getHelpSubtab")', function() {
      // uncomment below and update the code to test the property getHelpSubtab
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property communitySubtab (base name: "communitySubtab")', function() {
      // uncomment below and update the code to test the property communitySubtab
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property casesSubtab (base name: "casesSubtab")', function() {
      // uncomment below and update the code to test the property casesSubtab
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property dataProtectionRequestsSubtab (base name: "dataProtectionRequestsSubtab")', function() {
      // uncomment below and update the code to test the property dataProtectionRequestsSubtab
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property getHelpSubtabKnowledgeBaseSearch (base name: "getHelpSubtabKnowledgeBaseSearch")', function() {
      // uncomment below and update the code to test the property getHelpSubtabKnowledgeBaseSearch
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property universalSearchKnowledgeBaseSearch (base name: "universalSearchKnowledgeBaseSearch")', function() {
      // uncomment below and update the code to test the property universalSearchKnowledgeBaseSearch
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property ciscoMerakiProductDocumentation (base name: "ciscoMerakiProductDocumentation")', function() {
      // uncomment below and update the code to test the property ciscoMerakiProductDocumentation
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property supportContactInfo (base name: "supportContactInfo")', function() {
      // uncomment below and update the code to test the property supportContactInfo
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property newFeaturesSubtab (base name: "newFeaturesSubtab")', function() {
      // uncomment below and update the code to test the property newFeaturesSubtab
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property firewallInfoSubtab (base name: "firewallInfoSubtab")', function() {
      // uncomment below and update the code to test the property firewallInfoSubtab
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property apiDocsSubtab (base name: "apiDocsSubtab")', function() {
      // uncomment below and update the code to test the property apiDocsSubtab
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property hardwareReplacementsSubtab (base name: "hardwareReplacementsSubtab")', function() {
      // uncomment below and update the code to test the property hardwareReplacementsSubtab
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

    it('should have the property smForums (base name: "smForums")', function() {
      // uncomment below and update the code to test the property smForums
      //var instane = new MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings();
      //expect(instance).to.be();
    });

  });

}));
