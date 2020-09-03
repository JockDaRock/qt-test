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
    instance = new MerakiDashboardApi.DevicesApi();
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

  describe('DevicesApi', function() {
    describe('blinkDeviceLeds', function() {
      it('should call blinkDeviceLeds successfully', function(done) {
        //uncomment below and update the code to test blinkDeviceLeds
        //instance.blinkDeviceLeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('claimNetworkDevices', function() {
      it('should call claimNetworkDevices successfully', function(done) {
        //uncomment below and update the code to test claimNetworkDevices
        //instance.claimNetworkDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDevice', function() {
      it('should call getDevice successfully', function(done) {
        //uncomment below and update the code to test getDevice
        //instance.getDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceClients', function() {
      it('should call getDeviceClients successfully', function(done) {
        //uncomment below and update the code to test getDeviceClients
        //instance.getDeviceClients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceLldpCdp', function() {
      it('should call getDeviceLldpCdp successfully', function(done) {
        //uncomment below and update the code to test getDeviceLldpCdp
        //instance.getDeviceLldpCdp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceLossAndLatencyHistory', function() {
      it('should call getDeviceLossAndLatencyHistory successfully', function(done) {
        //uncomment below and update the code to test getDeviceLossAndLatencyHistory
        //instance.getDeviceLossAndLatencyHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceManagementInterface', function() {
      it('should call getDeviceManagementInterface successfully', function(done) {
        //uncomment below and update the code to test getDeviceManagementInterface
        //instance.getDeviceManagementInterface(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkDevices', function() {
      it('should call getNetworkDevices successfully', function(done) {
        //uncomment below and update the code to test getNetworkDevices
        //instance.getNetworkDevices(function(error) {
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
    describe('getNetworkWirelessDevicesConnectionStats', function() {
      it('should call getNetworkWirelessDevicesConnectionStats successfully', function(done) {
        //uncomment below and update the code to test getNetworkWirelessDevicesConnectionStats
        //instance.getNetworkWirelessDevicesConnectionStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkWirelessDevicesLatencyStats', function() {
      it('should call getNetworkWirelessDevicesLatencyStats successfully', function(done) {
        //uncomment below and update the code to test getNetworkWirelessDevicesLatencyStats
        //instance.getNetworkWirelessDevicesLatencyStats(function(error) {
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
    describe('rebootDevice', function() {
      it('should call rebootDevice successfully', function(done) {
        //uncomment below and update the code to test rebootDevice
        //instance.rebootDevice(function(error) {
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
    describe('removeNetworkDevices', function() {
      it('should call removeNetworkDevices successfully', function(done) {
        //uncomment below and update the code to test removeNetworkDevices
        //instance.removeNetworkDevices(function(error) {
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
    describe('updateDevice', function() {
      it('should call updateDevice successfully', function(done) {
        //uncomment below and update the code to test updateDevice
        //instance.updateDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDeviceManagementInterface', function() {
      it('should call updateDeviceManagementInterface successfully', function(done) {
        //uncomment below and update the code to test updateDeviceManagementInterface
        //instance.updateDeviceManagementInterface(function(error) {
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