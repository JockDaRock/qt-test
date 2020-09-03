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

  beforeEach(function() {
    instance = new MerakiDashboardApi.PiiApi();
  });

  describe('(package)', function() {
    describe('PiiApi', function() {
      describe('createNetworkPiiRequest', function() {
        it('should call createNetworkPiiRequest successfully', function(done) {
          // TODO: uncomment, update parameter values for createNetworkPiiRequest call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.createNetworkPiiRequest = new MerakiDashboardApi.CreateNetworkPiiRequest();
          opts.createNetworkPiiRequest.type = "delete";
          opts.createNetworkPiiRequest.datasets = [""];
          opts.createNetworkPiiRequest.username = "";
          opts.createNetworkPiiRequest.email = "";
          opts.createNetworkPiiRequest.mac = "";
          opts.createNetworkPiiRequest.smDeviceId = "";
          opts.createNetworkPiiRequest.smUserId = "";

          instance.createNetworkPiiRequest(networkId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteNetworkPiiRequest', function() {
        it('should call deleteNetworkPiiRequest successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteNetworkPiiRequest call
          /*
          var networkId = "networkId_example";
          var requestId = "requestId_example";

          instance.deleteNetworkPiiRequest(networkId, requestId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNetworkPiiPiiKeys', function() {
        it('should call getNetworkPiiPiiKeys successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkPiiPiiKeys call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.username = "username_example";
          opts.email = "email_example";
          opts.mac = "mac_example";
          opts.serial = "serial_example";
          opts.imei = "imei_example";
          opts.bluetoothMac = "bluetoothMac_example";

          instance.getNetworkPiiPiiKeys(networkId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNetworkPiiRequest', function() {
        it('should call getNetworkPiiRequest successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkPiiRequest call and complete the assertions
          /*
          var networkId = "networkId_example";
          var requestId = "requestId_example";

          instance.getNetworkPiiRequest(networkId, requestId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNetworkPiiRequests', function() {
        it('should call getNetworkPiiRequests successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkPiiRequests call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkPiiRequests(networkId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNetworkPiiSmDevicesForKey', function() {
        it('should call getNetworkPiiSmDevicesForKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkPiiSmDevicesForKey call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.username = "username_example";
          opts.email = "email_example";
          opts.mac = "mac_example";
          opts.serial = "serial_example";
          opts.imei = "imei_example";
          opts.bluetoothMac = "bluetoothMac_example";

          instance.getNetworkPiiSmDevicesForKey(networkId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNetworkPiiSmOwnersForKey', function() {
        it('should call getNetworkPiiSmOwnersForKey successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkPiiSmOwnersForKey call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.username = "username_example";
          opts.email = "email_example";
          opts.mac = "mac_example";
          opts.serial = "serial_example";
          opts.imei = "imei_example";
          opts.bluetoothMac = "bluetoothMac_example";

          instance.getNetworkPiiSmOwnersForKey(networkId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
