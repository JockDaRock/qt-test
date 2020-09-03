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
    instance = new MerakiDashboardApi.QosRulesApi();
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

  describe('QosRulesApi', function() {
    describe('createNetworkSwitchQosRule', function() {
      it('should call createNetworkSwitchQosRule successfully', function(done) {
        //uncomment below and update the code to test createNetworkSwitchQosRule
        //instance.createNetworkSwitchQosRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNetworkSwitchQosRule', function() {
      it('should call deleteNetworkSwitchQosRule successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkSwitchQosRule
        //instance.deleteNetworkSwitchQosRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSwitchQosRule', function() {
      it('should call getNetworkSwitchQosRule successfully', function(done) {
        //uncomment below and update the code to test getNetworkSwitchQosRule
        //instance.getNetworkSwitchQosRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSwitchQosRules', function() {
      it('should call getNetworkSwitchQosRules successfully', function(done) {
        //uncomment below and update the code to test getNetworkSwitchQosRules
        //instance.getNetworkSwitchQosRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkSwitchQosRulesOrder', function() {
      it('should call getNetworkSwitchQosRulesOrder successfully', function(done) {
        //uncomment below and update the code to test getNetworkSwitchQosRulesOrder
        //instance.getNetworkSwitchQosRulesOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNetworkSwitchQosRule', function() {
      it('should call updateNetworkSwitchQosRule successfully', function(done) {
        //uncomment below and update the code to test updateNetworkSwitchQosRule
        //instance.updateNetworkSwitchQosRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNetworkSwitchQosRulesOrder', function() {
      it('should call updateNetworkSwitchQosRulesOrder successfully', function(done) {
        //uncomment below and update the code to test updateNetworkSwitchQosRulesOrder
        //instance.updateNetworkSwitchQosRulesOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
