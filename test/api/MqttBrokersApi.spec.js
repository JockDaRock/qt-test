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
    instance = new MerakiDashboardApi.MqttBrokersApi();
  });

  describe('(package)', function() {
    describe('MqttBrokersApi', function() {
      describe('createNetworkMqttBroker', function() {
        it('should call createNetworkMqttBroker successfully', function(done) {
          // TODO: uncomment, update parameter values for createNetworkMqttBroker call and complete the assertions
          /*
          var networkId = "networkId_example";
          var createNetworkMqttBroker = new MerakiDashboardApi.CreateNetworkMqttBroker();
          createNetworkMqttBroker.name = "";
          createNetworkMqttBroker.host = "";
          createNetworkMqttBroker.port = 0;

          instance.createNetworkMqttBroker(networkId, createNetworkMqttBroker, function(error, data, response) {
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
      describe('deleteNetworkMqttBroker', function() {
        it('should call deleteNetworkMqttBroker successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteNetworkMqttBroker call
          /*
          var networkId = "networkId_example";
          var mqttBrokerId = "mqttBrokerId_example";

          instance.deleteNetworkMqttBroker(networkId, mqttBrokerId, function(error, data, response) {
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
      describe('getNetworkMqttBroker', function() {
        it('should call getNetworkMqttBroker successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkMqttBroker call and complete the assertions
          /*
          var networkId = "networkId_example";
          var mqttBrokerId = "mqttBrokerId_example";

          instance.getNetworkMqttBroker(networkId, mqttBrokerId, function(error, data, response) {
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
      describe('getNetworkMqttBrokers', function() {
        it('should call getNetworkMqttBrokers successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkMqttBrokers call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkMqttBrokers(networkId, function(error, data, response) {
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
      describe('updateNetworkMqttBroker', function() {
        it('should call updateNetworkMqttBroker successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkMqttBroker call and complete the assertions
          /*
          var networkId = "networkId_example";
          var mqttBrokerId = "mqttBrokerId_example";
          var opts = {};
          opts.updateNetworkMqttBroker = new MerakiDashboardApi.UpdateNetworkMqttBroker();
          opts.updateNetworkMqttBroker.name = "";
          opts.updateNetworkMqttBroker.host = "";
          opts.updateNetworkMqttBroker.port = 0;

          instance.updateNetworkMqttBroker(networkId, mqttBrokerId, opts, function(error, data, response) {
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
