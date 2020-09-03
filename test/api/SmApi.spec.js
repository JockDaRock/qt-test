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
    instance = new MerakiDashboardApi.SmApi();
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

  describe('SmApi', function() {
    describe('createNetworkSmBypassActivationLockAttempt', function() {
      it('should call createNetworkSmBypassActivationLockAttempt successfully', function(done) {
        //uncomment below and update the code to test createNetworkSmBypassActivationLockAttempt
        //instance.createNetworkSmBypassActivationLockAttempt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNetworkSmTargetGroup', function() {
      it('should call createNetworkSmTargetGroup successfully', function(done) {
        //uncomment below and update the code to test createNetworkSmTargetGroup
        //instance.createNetworkSmTargetGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNetworkSmTargetGroup', function() {
      it('should call deleteNetworkSmTargetGroup successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkSmTargetGroup
        //instance.deleteNetworkSmTargetGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmBypassActivationLockAttempt', function() {
      it('should call getNetworkSmBypassActivationLockAttempt successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmBypassActivationLockAttempt
        //instance.getNetworkSmBypassActivationLockAttempt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceCellularUsageHistory', function() {
      it('should call getNetworkSmDeviceCellularUsageHistory successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceCellularUsageHistory
        //instance.getNetworkSmDeviceCellularUsageHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceCerts', function() {
      it('should call getNetworkSmDeviceCerts successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceCerts
        //instance.getNetworkSmDeviceCerts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceConnectivity', function() {
      it('should call getNetworkSmDeviceConnectivity successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceConnectivity
        //instance.getNetworkSmDeviceConnectivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceDesktopLogs', function() {
      it('should call getNetworkSmDeviceDesktopLogs successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceDesktopLogs
        //instance.getNetworkSmDeviceDesktopLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceDeviceCommandLogs', function() {
      it('should call getNetworkSmDeviceDeviceCommandLogs successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceDeviceCommandLogs
        //instance.getNetworkSmDeviceDeviceCommandLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceDeviceProfiles', function() {
      it('should call getNetworkSmDeviceDeviceProfiles successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceDeviceProfiles
        //instance.getNetworkSmDeviceDeviceProfiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceNetworkAdapters', function() {
      it('should call getNetworkSmDeviceNetworkAdapters successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceNetworkAdapters
        //instance.getNetworkSmDeviceNetworkAdapters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDevicePerformanceHistory', function() {
      it('should call getNetworkSmDevicePerformanceHistory successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDevicePerformanceHistory
        //instance.getNetworkSmDevicePerformanceHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceRestrictions', function() {
      it('should call getNetworkSmDeviceRestrictions successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceRestrictions
        //instance.getNetworkSmDeviceRestrictions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceSecurityCenters', function() {
      it('should call getNetworkSmDeviceSecurityCenters successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceSecurityCenters
        //instance.getNetworkSmDeviceSecurityCenters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceSoftwares', function() {
      it('should call getNetworkSmDeviceSoftwares successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceSoftwares
        //instance.getNetworkSmDeviceSoftwares(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmDeviceWlanLists', function() {
      it('should call getNetworkSmDeviceWlanLists successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmDeviceWlanLists
        //instance.getNetworkSmDeviceWlanLists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmProfiles', function() {
      it('should call getNetworkSmProfiles successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmProfiles
        //instance.getNetworkSmProfiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmTargetGroup', function() {
      it('should call getNetworkSmTargetGroup successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmTargetGroup
        //instance.getNetworkSmTargetGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmTargetGroups', function() {
      it('should call getNetworkSmTargetGroups successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmTargetGroups
        //instance.getNetworkSmTargetGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmUserDeviceProfiles', function() {
      it('should call getNetworkSmUserDeviceProfiles successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmUserDeviceProfiles
        //instance.getNetworkSmUserDeviceProfiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSmUserSoftwares', function() {
      it('should call getNetworkSmUserSoftwares successfully', function(done) {
        //uncomment below and update the code to test getNetworkSmUserSoftwares
        //instance.getNetworkSmUserSoftwares(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSmApnsCert', function() {
      it('should call getOrganizationSmApnsCert successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSmApnsCert
        //instance.getOrganizationSmApnsCert(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSmVppAccount', function() {
      it('should call getOrganizationSmVppAccount successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSmVppAccount
        //instance.getOrganizationSmVppAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSmVppAccounts', function() {
      it('should call getOrganizationSmVppAccounts successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSmVppAccounts
        //instance.getOrganizationSmVppAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('refreshNetworkSmDeviceDetails', function() {
      it('should call refreshNetworkSmDeviceDetails successfully', function(done) {
        //uncomment below and update the code to test refreshNetworkSmDeviceDetails
        //instance.refreshNetworkSmDeviceDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unenrollNetworkSmDevice', function() {
      it('should call unenrollNetworkSmDevice successfully', function(done) {
        //uncomment below and update the code to test unenrollNetworkSmDevice
        //instance.unenrollNetworkSmDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNetworkSmDevicesFields', function() {
      it('should call updateNetworkSmDevicesFields successfully', function(done) {
        //uncomment below and update the code to test updateNetworkSmDevicesFields
        //instance.updateNetworkSmDevicesFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNetworkSmTargetGroup', function() {
      it('should call updateNetworkSmTargetGroup successfully', function(done) {
        //uncomment below and update the code to test updateNetworkSmTargetGroup
        //instance.updateNetworkSmTargetGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('wipeNetworkSmDevices', function() {
      it('should call wipeNetworkSmDevices successfully', function(done) {
        //uncomment below and update the code to test wipeNetworkSmDevices
        //instance.wipeNetworkSmDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));