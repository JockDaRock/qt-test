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
    instance = new MerakiDashboardApi.OrganizationsApi();
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

  describe('OrganizationsApi', function() {
    describe('assignOrganizationLicensesSeats', function() {
      it('should call assignOrganizationLicensesSeats successfully', function(done) {
        //uncomment below and update the code to test assignOrganizationLicensesSeats
        //instance.assignOrganizationLicensesSeats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('claimIntoOrganization', function() {
      it('should call claimIntoOrganization successfully', function(done) {
        //uncomment below and update the code to test claimIntoOrganization
        //instance.claimIntoOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cloneOrganization', function() {
      it('should call cloneOrganization successfully', function(done) {
        //uncomment below and update the code to test cloneOrganization
        //instance.cloneOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('combineOrganizationNetworks', function() {
      it('should call combineOrganizationNetworks successfully', function(done) {
        //uncomment below and update the code to test combineOrganizationNetworks
        //instance.combineOrganizationNetworks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrganization', function() {
      it('should call createOrganization successfully', function(done) {
        //uncomment below and update the code to test createOrganization
        //instance.createOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrganizationActionBatch', function() {
      it('should call createOrganizationActionBatch successfully', function(done) {
        //uncomment below and update the code to test createOrganizationActionBatch
        //instance.createOrganizationActionBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrganizationAdmin', function() {
      it('should call createOrganizationAdmin successfully', function(done) {
        //uncomment below and update the code to test createOrganizationAdmin
        //instance.createOrganizationAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrganizationBrandingPolicy', function() {
      it('should call createOrganizationBrandingPolicy successfully', function(done) {
        //uncomment below and update the code to test createOrganizationBrandingPolicy
        //instance.createOrganizationBrandingPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrganizationConfigTemplate', function() {
      it('should call createOrganizationConfigTemplate successfully', function(done) {
        //uncomment below and update the code to test createOrganizationConfigTemplate
        //instance.createOrganizationConfigTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrganizationNetwork', function() {
      it('should call createOrganizationNetwork successfully', function(done) {
        //uncomment below and update the code to test createOrganizationNetwork
        //instance.createOrganizationNetwork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrganizationSamlIdp', function() {
      it('should call createOrganizationSamlIdp successfully', function(done) {
        //uncomment below and update the code to test createOrganizationSamlIdp
        //instance.createOrganizationSamlIdp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrganizationSamlRole', function() {
      it('should call createOrganizationSamlRole successfully', function(done) {
        //uncomment below and update the code to test createOrganizationSamlRole
        //instance.createOrganizationSamlRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganization', function() {
      it('should call deleteOrganization successfully', function(done) {
        //uncomment below and update the code to test deleteOrganization
        //instance.deleteOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationActionBatch', function() {
      it('should call deleteOrganizationActionBatch successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationActionBatch
        //instance.deleteOrganizationActionBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationAdmin', function() {
      it('should call deleteOrganizationAdmin successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationAdmin
        //instance.deleteOrganizationAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationBrandingPolicy', function() {
      it('should call deleteOrganizationBrandingPolicy successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationBrandingPolicy
        //instance.deleteOrganizationBrandingPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationConfigTemplate', function() {
      it('should call deleteOrganizationConfigTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationConfigTemplate
        //instance.deleteOrganizationConfigTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationSamlIdp', function() {
      it('should call deleteOrganizationSamlIdp successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationSamlIdp
        //instance.deleteOrganizationSamlIdp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationSamlRole', function() {
      it('should call deleteOrganizationSamlRole successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationSamlRole
        //instance.deleteOrganizationSamlRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganization', function() {
      it('should call getOrganization successfully', function(done) {
        //uncomment below and update the code to test getOrganization
        //instance.getOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationActionBatch', function() {
      it('should call getOrganizationActionBatch successfully', function(done) {
        //uncomment below and update the code to test getOrganizationActionBatch
        //instance.getOrganizationActionBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationActionBatches', function() {
      it('should call getOrganizationActionBatches successfully', function(done) {
        //uncomment below and update the code to test getOrganizationActionBatches
        //instance.getOrganizationActionBatches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationAdmins', function() {
      it('should call getOrganizationAdmins successfully', function(done) {
        //uncomment below and update the code to test getOrganizationAdmins
        //instance.getOrganizationAdmins(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationApiRequests', function() {
      it('should call getOrganizationApiRequests successfully', function(done) {
        //uncomment below and update the code to test getOrganizationApiRequests
        //instance.getOrganizationApiRequests(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationApiRequestsOverview', function() {
      it('should call getOrganizationApiRequestsOverview successfully', function(done) {
        //uncomment below and update the code to test getOrganizationApiRequestsOverview
        //instance.getOrganizationApiRequestsOverview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationBrandingPolicies', function() {
      it('should call getOrganizationBrandingPolicies successfully', function(done) {
        //uncomment below and update the code to test getOrganizationBrandingPolicies
        //instance.getOrganizationBrandingPolicies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationBrandingPoliciesPriorities', function() {
      it('should call getOrganizationBrandingPoliciesPriorities successfully', function(done) {
        //uncomment below and update the code to test getOrganizationBrandingPoliciesPriorities
        //instance.getOrganizationBrandingPoliciesPriorities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationBrandingPolicy', function() {
      it('should call getOrganizationBrandingPolicy successfully', function(done) {
        //uncomment below and update the code to test getOrganizationBrandingPolicy
        //instance.getOrganizationBrandingPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationConfigTemplate', function() {
      it('should call getOrganizationConfigTemplate successfully', function(done) {
        //uncomment below and update the code to test getOrganizationConfigTemplate
        //instance.getOrganizationConfigTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationConfigTemplates', function() {
      it('should call getOrganizationConfigTemplates successfully', function(done) {
        //uncomment below and update the code to test getOrganizationConfigTemplates
        //instance.getOrganizationConfigTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationConfigurationChanges', function() {
      it('should call getOrganizationConfigurationChanges successfully', function(done) {
        //uncomment below and update the code to test getOrganizationConfigurationChanges
        //instance.getOrganizationConfigurationChanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationDevices', function() {
      it('should call getOrganizationDevices successfully', function(done) {
        //uncomment below and update the code to test getOrganizationDevices
        //instance.getOrganizationDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationDevicesStatuses', function() {
      it('should call getOrganizationDevicesStatuses successfully', function(done) {
        //uncomment below and update the code to test getOrganizationDevicesStatuses
        //instance.getOrganizationDevicesStatuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationDevicesUplinksLossAndLatency', function() {
      it('should call getOrganizationDevicesUplinksLossAndLatency successfully', function(done) {
        //uncomment below and update the code to test getOrganizationDevicesUplinksLossAndLatency
        //instance.getOrganizationDevicesUplinksLossAndLatency(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationInventoryDevices', function() {
      it('should call getOrganizationInventoryDevices successfully', function(done) {
        //uncomment below and update the code to test getOrganizationInventoryDevices
        //instance.getOrganizationInventoryDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationLicense', function() {
      it('should call getOrganizationLicense successfully', function(done) {
        //uncomment below and update the code to test getOrganizationLicense
        //instance.getOrganizationLicense(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationLicenses', function() {
      it('should call getOrganizationLicenses successfully', function(done) {
        //uncomment below and update the code to test getOrganizationLicenses
        //instance.getOrganizationLicenses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationLicensesOverview', function() {
      it('should call getOrganizationLicensesOverview successfully', function(done) {
        //uncomment below and update the code to test getOrganizationLicensesOverview
        //instance.getOrganizationLicensesOverview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationNetworks', function() {
      it('should call getOrganizationNetworks successfully', function(done) {
        //uncomment below and update the code to test getOrganizationNetworks
        //instance.getOrganizationNetworks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationOpenapiSpec', function() {
      it('should call getOrganizationOpenapiSpec successfully', function(done) {
        //uncomment below and update the code to test getOrganizationOpenapiSpec
        //instance.getOrganizationOpenapiSpec(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSaml', function() {
      it('should call getOrganizationSaml successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSaml
        //instance.getOrganizationSaml(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSamlIdp', function() {
      it('should call getOrganizationSamlIdp successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSamlIdp
        //instance.getOrganizationSamlIdp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSamlIdps', function() {
      it('should call getOrganizationSamlIdps successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSamlIdps
        //instance.getOrganizationSamlIdps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSamlRole', function() {
      it('should call getOrganizationSamlRole successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSamlRole
        //instance.getOrganizationSamlRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSamlRoles', function() {
      it('should call getOrganizationSamlRoles successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSamlRoles
        //instance.getOrganizationSamlRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSnmp', function() {
      it('should call getOrganizationSnmp successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSnmp
        //instance.getOrganizationSnmp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationWebhooksLogs', function() {
      it('should call getOrganizationWebhooksLogs successfully', function(done) {
        //uncomment below and update the code to test getOrganizationWebhooksLogs
        //instance.getOrganizationWebhooksLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizations', function() {
      it('should call getOrganizations successfully', function(done) {
        //uncomment below and update the code to test getOrganizations
        //instance.getOrganizations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('moveOrganizationLicenses', function() {
      it('should call moveOrganizationLicenses successfully', function(done) {
        //uncomment below and update the code to test moveOrganizationLicenses
        //instance.moveOrganizationLicenses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('moveOrganizationLicensesSeats', function() {
      it('should call moveOrganizationLicensesSeats successfully', function(done) {
        //uncomment below and update the code to test moveOrganizationLicensesSeats
        //instance.moveOrganizationLicensesSeats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('renewOrganizationLicensesSeats', function() {
      it('should call renewOrganizationLicensesSeats successfully', function(done) {
        //uncomment below and update the code to test renewOrganizationLicensesSeats
        //instance.renewOrganizationLicensesSeats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganization', function() {
      it('should call updateOrganization successfully', function(done) {
        //uncomment below and update the code to test updateOrganization
        //instance.updateOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationActionBatch', function() {
      it('should call updateOrganizationActionBatch successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationActionBatch
        //instance.updateOrganizationActionBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationAdmin', function() {
      it('should call updateOrganizationAdmin successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationAdmin
        //instance.updateOrganizationAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationBrandingPoliciesPriorities', function() {
      it('should call updateOrganizationBrandingPoliciesPriorities successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationBrandingPoliciesPriorities
        //instance.updateOrganizationBrandingPoliciesPriorities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationBrandingPolicy', function() {
      it('should call updateOrganizationBrandingPolicy successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationBrandingPolicy
        //instance.updateOrganizationBrandingPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationConfigTemplate', function() {
      it('should call updateOrganizationConfigTemplate successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationConfigTemplate
        //instance.updateOrganizationConfigTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationLicense', function() {
      it('should call updateOrganizationLicense successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationLicense
        //instance.updateOrganizationLicense(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationSaml', function() {
      it('should call updateOrganizationSaml successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationSaml
        //instance.updateOrganizationSaml(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationSamlIdp', function() {
      it('should call updateOrganizationSamlIdp successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationSamlIdp
        //instance.updateOrganizationSamlIdp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationSamlRole', function() {
      it('should call updateOrganizationSamlRole successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationSamlRole
        //instance.updateOrganizationSamlRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationSnmp', function() {
      it('should call updateOrganizationSnmp successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationSnmp
        //instance.updateOrganizationSnmp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
