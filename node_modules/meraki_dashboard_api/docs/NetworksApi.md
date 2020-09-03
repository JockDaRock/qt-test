# MerakiDashboardApi.NetworksApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bindNetwork**](NetworksApi.md#bindNetwork) | **POST** /networks/{networkId}/bind | Bind a network to a template.
[**claimNetworkDevices**](NetworksApi.md#claimNetworkDevices) | **POST** /networks/{networkId}/devices/claim | Claim devices into a network
[**combineOrganizationNetworks**](NetworksApi.md#combineOrganizationNetworks) | **POST** /organizations/{organizationId}/networks/combine | Combine multiple networks into a single network
[**createNetworkFloorPlan**](NetworksApi.md#createNetworkFloorPlan) | **POST** /networks/{networkId}/floorPlans | Upload a floor plan
[**createNetworkGroupPolicy**](NetworksApi.md#createNetworkGroupPolicy) | **POST** /networks/{networkId}/groupPolicies | Create a group policy
[**createNetworkMerakiAuthUser**](NetworksApi.md#createNetworkMerakiAuthUser) | **POST** /networks/{networkId}/merakiAuthUsers | Create a user configured with Meraki Authentication for a network (currently only 802.1X RADIUS users can be created, and currently, organizations have a 50,000 user cap)
[**createNetworkMqttBroker**](NetworksApi.md#createNetworkMqttBroker) | **POST** /networks/{networkId}/mqttBrokers | Add an MQTT broker
[**createNetworkPiiRequest**](NetworksApi.md#createNetworkPiiRequest) | **POST** /networks/{networkId}/pii/requests | Submit a new delete or restrict processing PII request
[**createNetworkWebhooksHttpServer**](NetworksApi.md#createNetworkWebhooksHttpServer) | **POST** /networks/{networkId}/webhooks/httpServers | Add an HTTP server to a network
[**createNetworkWebhooksWebhookTest**](NetworksApi.md#createNetworkWebhooksWebhookTest) | **POST** /networks/{networkId}/webhooks/webhookTests | Send a test webhook for a network
[**createOrganizationNetwork**](NetworksApi.md#createOrganizationNetwork) | **POST** /organizations/{organizationId}/networks | Create a network
[**deleteNetwork**](NetworksApi.md#deleteNetwork) | **DELETE** /networks/{networkId} | Delete a network
[**deleteNetworkFloorPlan**](NetworksApi.md#deleteNetworkFloorPlan) | **DELETE** /networks/{networkId}/floorPlans/{floorPlanId} | Destroy a floor plan
[**deleteNetworkGroupPolicy**](NetworksApi.md#deleteNetworkGroupPolicy) | **DELETE** /networks/{networkId}/groupPolicies/{groupPolicyId} | Delete a group policy
[**deleteNetworkMerakiAuthUser**](NetworksApi.md#deleteNetworkMerakiAuthUser) | **DELETE** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)
[**deleteNetworkMqttBroker**](NetworksApi.md#deleteNetworkMqttBroker) | **DELETE** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Delete an MQTT broker
[**deleteNetworkPiiRequest**](NetworksApi.md#deleteNetworkPiiRequest) | **DELETE** /networks/{networkId}/pii/requests/{requestId} | Delete a restrict processing PII request
[**deleteNetworkWebhooksHttpServer**](NetworksApi.md#deleteNetworkWebhooksHttpServer) | **DELETE** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Delete an HTTP server from a network
[**getNetwork**](NetworksApi.md#getNetwork) | **GET** /networks/{networkId} | Return a network
[**getNetworkAlertsSettings**](NetworksApi.md#getNetworkAlertsSettings) | **GET** /networks/{networkId}/alerts/settings | Return the alert configuration for this network
[**getNetworkBluetoothClient**](NetworksApi.md#getNetworkBluetoothClient) | **GET** /networks/{networkId}/bluetoothClients/{bluetoothClientId} | Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
[**getNetworkBluetoothClients**](NetworksApi.md#getNetworkBluetoothClients) | **GET** /networks/{networkId}/bluetoothClients | List the Bluetooth clients seen by APs in this network
[**getNetworkClient**](NetworksApi.md#getNetworkClient) | **GET** /networks/{networkId}/clients/{clientId} | Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientPolicy**](NetworksApi.md#getNetworkClientPolicy) | **GET** /networks/{networkId}/clients/{clientId}/policy | Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientSplashAuthorizationStatus**](NetworksApi.md#getNetworkClientSplashAuthorizationStatus) | **GET** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Return the splash authorization for a client, for each SSID they&#x27;ve associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientTrafficHistory**](NetworksApi.md#getNetworkClientTrafficHistory) | **GET** /networks/{networkId}/clients/{clientId}/trafficHistory | Return the client&#x27;s network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide &gt; General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientUsageHistory**](NetworksApi.md#getNetworkClientUsageHistory) | **GET** /networks/{networkId}/clients/{clientId}/usageHistory | Return the client&#x27;s daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClients**](NetworksApi.md#getNetworkClients) | **GET** /networks/{networkId}/clients | List the clients that have used this network in the timespan
[**getNetworkDevices**](NetworksApi.md#getNetworkDevices) | **GET** /networks/{networkId}/devices | List the devices in a network
[**getNetworkEvents**](NetworksApi.md#getNetworkEvents) | **GET** /networks/{networkId}/events | List the events for the network
[**getNetworkEventsEventTypes**](NetworksApi.md#getNetworkEventsEventTypes) | **GET** /networks/{networkId}/events/eventTypes | List the event type to human-readable description
[**getNetworkFirmwareUpgrades**](NetworksApi.md#getNetworkFirmwareUpgrades) | **GET** /networks/{networkId}/firmwareUpgrades | Get current maintenance window for a network
[**getNetworkFloorPlan**](NetworksApi.md#getNetworkFloorPlan) | **GET** /networks/{networkId}/floorPlans/{floorPlanId} | Find a floor plan by ID
[**getNetworkFloorPlans**](NetworksApi.md#getNetworkFloorPlans) | **GET** /networks/{networkId}/floorPlans | List the floor plans that belong to your network
[**getNetworkGroupPolicies**](NetworksApi.md#getNetworkGroupPolicies) | **GET** /networks/{networkId}/groupPolicies | List the group policies in a network
[**getNetworkGroupPolicy**](NetworksApi.md#getNetworkGroupPolicy) | **GET** /networks/{networkId}/groupPolicies/{groupPolicyId} | Display a group policy
[**getNetworkMerakiAuthUser**](NetworksApi.md#getNetworkMerakiAuthUser) | **GET** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Return the Meraki Auth splash or RADIUS user
[**getNetworkMerakiAuthUsers**](NetworksApi.md#getNetworkMerakiAuthUsers) | **GET** /networks/{networkId}/merakiAuthUsers | List the splash or RADIUS users configured under Meraki Authentication for a network
[**getNetworkMqttBroker**](NetworksApi.md#getNetworkMqttBroker) | **GET** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Return an MQTT broker
[**getNetworkMqttBrokers**](NetworksApi.md#getNetworkMqttBrokers) | **GET** /networks/{networkId}/mqttBrokers | List the MQTT brokers for this network
[**getNetworkNetflow**](NetworksApi.md#getNetworkNetflow) | **GET** /networks/{networkId}/netflow | Return the NetFlow traffic reporting settings for a network
[**getNetworkNetworkHealthChannelUtilization**](NetworksApi.md#getNetworkNetworkHealthChannelUtilization) | **GET** /networks/{networkId}/networkHealth/channelUtilization | Get the channel utilization over each radio for all APs in a network.
[**getNetworkPiiPiiKeys**](NetworksApi.md#getNetworkPiiPiiKeys) | **GET** /networks/{networkId}/pii/piiKeys | List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \&quot;0\&quot; containing the applicable keys.
[**getNetworkPiiRequest**](NetworksApi.md#getNetworkPiiRequest) | **GET** /networks/{networkId}/pii/requests/{requestId} | Return a PII request
[**getNetworkPiiRequests**](NetworksApi.md#getNetworkPiiRequests) | **GET** /networks/{networkId}/pii/requests | List the PII requests for this network or organization
[**getNetworkPiiSmDevicesForKey**](NetworksApi.md#getNetworkPiiSmDevicesForKey) | **GET** /networks/{networkId}/pii/smDevicesForKey | Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
[**getNetworkPiiSmOwnersForKey**](NetworksApi.md#getNetworkPiiSmOwnersForKey) | **GET** /networks/{networkId}/pii/smOwnersForKey | Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
[**getNetworkSettings**](NetworksApi.md#getNetworkSettings) | **GET** /networks/{networkId}/settings | Return the settings for a network
[**getNetworkSnmp**](NetworksApi.md#getNetworkSnmp) | **GET** /networks/{networkId}/snmp | Return the SNMP settings for a network
[**getNetworkSplashLoginAttempts**](NetworksApi.md#getNetworkSplashLoginAttempts) | **GET** /networks/{networkId}/splashLoginAttempts | List the splash login attempts for a network
[**getNetworkSyslogServers**](NetworksApi.md#getNetworkSyslogServers) | **GET** /networks/{networkId}/syslogServers | List the syslog servers for a network
[**getNetworkTraffic**](NetworksApi.md#getNetworkTraffic) | **GET** /networks/{networkId}/traffic |     The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 
[**getNetworkTrafficAnalysis**](NetworksApi.md#getNetworkTrafficAnalysis) | **GET** /networks/{networkId}/trafficAnalysis | Return the traffic analysis settings for a network
[**getNetworkTrafficShapingApplicationCategories**](NetworksApi.md#getNetworkTrafficShapingApplicationCategories) | **GET** /networks/{networkId}/trafficShaping/applicationCategories | Returns the application categories for traffic shaping rules.
[**getNetworkTrafficShapingDscpTaggingOptions**](NetworksApi.md#getNetworkTrafficShapingDscpTaggingOptions) | **GET** /networks/{networkId}/trafficShaping/dscpTaggingOptions | Returns the available DSCP tagging options for your traffic shaping rules.
[**getNetworkWebhooksHttpServer**](NetworksApi.md#getNetworkWebhooksHttpServer) | **GET** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Return an HTTP server for a network
[**getNetworkWebhooksHttpServers**](NetworksApi.md#getNetworkWebhooksHttpServers) | **GET** /networks/{networkId}/webhooks/httpServers | List the HTTP servers for a network
[**getNetworkWebhooksWebhookTest**](NetworksApi.md#getNetworkWebhooksWebhookTest) | **GET** /networks/{networkId}/webhooks/webhookTests/{webhookTestId} | Return the status of a webhook test for a network
[**getOrganizationNetworks**](NetworksApi.md#getOrganizationNetworks) | **GET** /organizations/{organizationId}/networks | List the networks that the user has privileges on in an organization
[**provisionNetworkClients**](NetworksApi.md#provisionNetworkClients) | **POST** /networks/{networkId}/clients/provision | Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
[**removeNetworkDevices**](NetworksApi.md#removeNetworkDevices) | **POST** /networks/{networkId}/devices/remove | Remove a single device
[**splitNetwork**](NetworksApi.md#splitNetwork) | **POST** /networks/{networkId}/split | Split a combined network into individual networks for each type of device
[**unbindNetwork**](NetworksApi.md#unbindNetwork) | **POST** /networks/{networkId}/unbind | Unbind a network from a template.
[**updateNetwork**](NetworksApi.md#updateNetwork) | **PUT** /networks/{networkId} | Update a network
[**updateNetworkAlertsSettings**](NetworksApi.md#updateNetworkAlertsSettings) | **PUT** /networks/{networkId}/alerts/settings | Update the alert configuration for this network
[**updateNetworkClientPolicy**](NetworksApi.md#updateNetworkClientPolicy) | **PUT** /networks/{networkId}/clients/{clientId}/policy | Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**updateNetworkClientSplashAuthorizationStatus**](NetworksApi.md#updateNetworkClientSplashAuthorizationStatus) | **PUT** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Update a client&#x27;s splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**updateNetworkFirmwareUpgrades**](NetworksApi.md#updateNetworkFirmwareUpgrades) | **PUT** /networks/{networkId}/firmwareUpgrades | Update current maintenance window for a network
[**updateNetworkFloorPlan**](NetworksApi.md#updateNetworkFloorPlan) | **PUT** /networks/{networkId}/floorPlans/{floorPlanId} | Update a floor plan&#x27;s geolocation and other meta data
[**updateNetworkGroupPolicy**](NetworksApi.md#updateNetworkGroupPolicy) | **PUT** /networks/{networkId}/groupPolicies/{groupPolicyId} | Update a group policy
[**updateNetworkMerakiAuthUser**](NetworksApi.md#updateNetworkMerakiAuthUser) | **PUT** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)
[**updateNetworkMqttBroker**](NetworksApi.md#updateNetworkMqttBroker) | **PUT** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Update an MQTT broker
[**updateNetworkNetflow**](NetworksApi.md#updateNetworkNetflow) | **PUT** /networks/{networkId}/netflow | Update the NetFlow traffic reporting settings for a network
[**updateNetworkSettings**](NetworksApi.md#updateNetworkSettings) | **PUT** /networks/{networkId}/settings | Update the settings for a network
[**updateNetworkSnmp**](NetworksApi.md#updateNetworkSnmp) | **PUT** /networks/{networkId}/snmp | Update the SNMP settings for a network
[**updateNetworkSyslogServers**](NetworksApi.md#updateNetworkSyslogServers) | **PUT** /networks/{networkId}/syslogServers | Update the syslog servers for a network
[**updateNetworkTrafficAnalysis**](NetworksApi.md#updateNetworkTrafficAnalysis) | **PUT** /networks/{networkId}/trafficAnalysis | Update the traffic analysis settings for a network
[**updateNetworkWebhooksHttpServer**](NetworksApi.md#updateNetworkWebhooksHttpServer) | **PUT** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Update an HTTP server

<a name="bindNetwork"></a>
# **bindNetwork**
> Object bindNetwork(bodynetworkId)

Bind a network to a template.

Bind a network to a template.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body47(); // Body47 | 
let networkId = "networkId_example"; // String | 

apiInstance.bindNetwork(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body47**](Body47.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="claimNetworkDevices"></a>
# **claimNetworkDevices**
> claimNetworkDevices(bodynetworkId)

Claim devices into a network

Claim devices into a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body57(); // Body57 | 
let networkId = "networkId_example"; // String | 

apiInstance.claimNetworkDevices(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body57**](Body57.md)|  | 
 **networkId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="combineOrganizationNetworks"></a>
# **combineOrganizationNetworks**
> Object combineOrganizationNetworks(bodyorganizationId)

Combine multiple networks into a single network

Combine multiple networks into a single network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body145(); // Body145 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.combineOrganizationNetworks(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body145**](Body145.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkFloorPlan"></a>
# **createNetworkFloorPlan**
> Object createNetworkFloorPlan(bodynetworkId)

Upload a floor plan

Upload a floor plan

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body60(); // Body60 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkFloorPlan(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body60**](Body60.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkGroupPolicy"></a>
# **createNetworkGroupPolicy**
> Object createNetworkGroupPolicy(bodynetworkId)

Create a group policy

Create a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body62(); // Body62 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkGroupPolicy(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body62**](Body62.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkMerakiAuthUser"></a>
# **createNetworkMerakiAuthUser**
> Object createNetworkMerakiAuthUser(bodynetworkId)

Create a user configured with Meraki Authentication for a network (currently only 802.1X RADIUS users can be created, and currently, organizations have a 50,000 user cap)

Create a user configured with Meraki Authentication for a network (currently only 802.1X RADIUS users can be created, and currently, organizations have a 50,000 user cap)

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body64(); // Body64 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkMerakiAuthUser(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body64**](Body64.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkMqttBroker"></a>
# **createNetworkMqttBroker**
> Object createNetworkMqttBroker(bodynetworkId)

Add an MQTT broker

Add an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body66(); // Body66 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkMqttBroker(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body66**](Body66.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkPiiRequest"></a>
# **createNetworkPiiRequest**
> Object createNetworkPiiRequest(networkId, opts)

Submit a new delete or restrict processing PII request

Submit a new delete or restrict processing PII request  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body69() // Body69 | 
};
apiInstance.createNetworkPiiRequest(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body69**](Body69.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkWebhooksHttpServer"></a>
# **createNetworkWebhooksHttpServer**
> Object createNetworkWebhooksHttpServer(bodynetworkId)

Add an HTTP server to a network

Add an HTTP server to a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body105(); // Body105 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkWebhooksHttpServer(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body105**](Body105.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkWebhooksWebhookTest"></a>
# **createNetworkWebhooksWebhookTest**
> Object createNetworkWebhooksWebhookTest(bodynetworkId)

Send a test webhook for a network

Send a test webhook for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body107(); // Body107 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkWebhooksWebhookTest(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body107**](Body107.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganizationNetwork"></a>
# **createOrganizationNetwork**
> Object createOrganizationNetwork(bodyorganizationId)

Create a network

Create a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body144(); // Body144 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationNetwork(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body144**](Body144.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetwork"></a>
# **deleteNetwork**
> deleteNetwork(networkId)

Delete a network

Delete a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.deleteNetwork(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkFloorPlan"></a>
# **deleteNetworkFloorPlan**
> deleteNetworkFloorPlan(networkId, floorPlanId)

Destroy a floor plan

Destroy a floor plan

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let floorPlanId = "floorPlanId_example"; // String | 

apiInstance.deleteNetworkFloorPlan(networkId, floorPlanId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **floorPlanId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkGroupPolicy"></a>
# **deleteNetworkGroupPolicy**
> deleteNetworkGroupPolicy(networkId, groupPolicyId)

Delete a group policy

Delete a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let groupPolicyId = "groupPolicyId_example"; // String | 

apiInstance.deleteNetworkGroupPolicy(networkId, groupPolicyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **groupPolicyId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkMerakiAuthUser"></a>
# **deleteNetworkMerakiAuthUser**
> deleteNetworkMerakiAuthUser(networkId, merakiAuthUserId)

Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)

Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let merakiAuthUserId = "merakiAuthUserId_example"; // String | 

apiInstance.deleteNetworkMerakiAuthUser(networkId, merakiAuthUserId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **merakiAuthUserId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkMqttBroker"></a>
# **deleteNetworkMqttBroker**
> deleteNetworkMqttBroker(networkId, mqttBrokerId)

Delete an MQTT broker

Delete an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let mqttBrokerId = "mqttBrokerId_example"; // String | 

apiInstance.deleteNetworkMqttBroker(networkId, mqttBrokerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **mqttBrokerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkPiiRequest"></a>
# **deleteNetworkPiiRequest**
> deleteNetworkPiiRequest(networkId, requestId)

Delete a restrict processing PII request

Delete a restrict processing PII request  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests/{requestId} &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let requestId = "requestId_example"; // String | 

apiInstance.deleteNetworkPiiRequest(networkId, requestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **requestId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkWebhooksHttpServer"></a>
# **deleteNetworkWebhooksHttpServer**
> deleteNetworkWebhooksHttpServer(networkId, httpServerId)

Delete an HTTP server from a network

Delete an HTTP server from a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let httpServerId = "httpServerId_example"; // String | 

apiInstance.deleteNetworkWebhooksHttpServer(networkId, httpServerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetwork"></a>
# **getNetwork**
> Object getNetwork(networkId)

Return a network

Return a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetwork(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkAlertsSettings"></a>
# **getNetworkAlertsSettings**
> Object getNetworkAlertsSettings(networkId)

Return the alert configuration for this network

Return the alert configuration for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkAlertsSettings(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkBluetoothClient"></a>
# **getNetworkBluetoothClient**
> Object getNetworkBluetoothClient(networkId, bluetoothClientId, opts)

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let bluetoothClientId = "bluetoothClientId_example"; // String | 
let opts = { 
  'includeConnectivityHistory': true, // Boolean | Include the connectivity history for this client
  'connectivityHistoryTimespan': 56 // Number | The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used.
};
apiInstance.getNetworkBluetoothClient(networkId, bluetoothClientId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **bluetoothClientId** | **String**|  | 
 **includeConnectivityHistory** | **Boolean**| Include the connectivity history for this client | [optional] 
 **connectivityHistoryTimespan** | **Number**| The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkBluetoothClients"></a>
# **getNetworkBluetoothClients**
> Object getNetworkBluetoothClients(networkId, opts)

List the Bluetooth clients seen by APs in this network

List the Bluetooth clients seen by APs in this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 7 days from today.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'includeConnectivityHistory': true // Boolean | Include the connectivity history for this client
};
apiInstance.getNetworkBluetoothClients(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 7 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **includeConnectivityHistory** | **Boolean**| Include the connectivity history for this client | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClient"></a>
# **getNetworkClient**
> Object getNetworkClient(networkId, clientId)

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.getNetworkClient(networkId, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClientPolicy"></a>
# **getNetworkClientPolicy**
> Object getNetworkClientPolicy(networkId, clientId)

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.getNetworkClientPolicy(networkId, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClientSplashAuthorizationStatus"></a>
# **getNetworkClientSplashAuthorizationStatus**
> Object getNetworkClientSplashAuthorizationStatus(networkId, clientId)

Return the splash authorization for a client, for each SSID they&#x27;ve associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the splash authorization for a client, for each SSID they&#x27;ve associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.getNetworkClientSplashAuthorizationStatus(networkId, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClientTrafficHistory"></a>
# **getNetworkClientTrafficHistory**
> Object getNetworkClientTrafficHistory(networkId, clientId, opts)

Return the client&#x27;s network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide &gt; General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the client&#x27;s network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide &gt; General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkClientTrafficHistory(networkId, clientId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClientUsageHistory"></a>
# **getNetworkClientUsageHistory**
> Object getNetworkClientUsageHistory(networkId, clientId)

Return the client&#x27;s daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the client&#x27;s daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.getNetworkClientUsageHistory(networkId, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClients"></a>
# **getNetworkClients**
> Object getNetworkClients(networkId, opts)

List the clients that have used this network in the timespan

List the clients that have used this network in the timespan

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkClients(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkDevices"></a>
# **getNetworkDevices**
> Object getNetworkDevices(networkId)

List the devices in a network

List the devices in a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkDevices(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkEvents"></a>
# **getNetworkEvents**
> Object getNetworkEvents(networkId, opts)

List the events for the network

List the events for the network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'productType': "productType_example", // String | The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway
  'includedEventTypes': ["includedEventTypes_example"], // [String] | A list of event types. The returned events will be filtered to only include events with these types.
  'excludedEventTypes': ["excludedEventTypes_example"], // [String] | A list of event types. The returned events will be filtered to exclude events with these types.
  'deviceMac': "deviceMac_example", // String | The MAC address of the Meraki device which the list of events will be filtered with
  'deviceSerial': "deviceSerial_example", // String | The serial of the Meraki device which the list of events will be filtered with
  'deviceName': "deviceName_example", // String | The name of the Meraki device which the list of events will be filtered with
  'clientIp': "clientIp_example", // String | The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks.
  'clientMac': "clientMac_example", // String | The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks.
  'clientName': "clientName_example", // String | The name, or partial name, of the client which the list of events will be filtered with
  'smDeviceMac': "smDeviceMac_example", // String | The MAC address of the Systems Manager device which the list of events will be filtered with
  'smDeviceName': "smDeviceName_example", // String | The name of the Systems Manager device which the list of events will be filtered with
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkEvents(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **productType** | **String**| The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway | [optional] 
 **includedEventTypes** | [**[String]**](String.md)| A list of event types. The returned events will be filtered to only include events with these types. | [optional] 
 **excludedEventTypes** | [**[String]**](String.md)| A list of event types. The returned events will be filtered to exclude events with these types. | [optional] 
 **deviceMac** | **String**| The MAC address of the Meraki device which the list of events will be filtered with | [optional] 
 **deviceSerial** | **String**| The serial of the Meraki device which the list of events will be filtered with | [optional] 
 **deviceName** | **String**| The name of the Meraki device which the list of events will be filtered with | [optional] 
 **clientIp** | **String**| The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks. | [optional] 
 **clientMac** | **String**| The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks. | [optional] 
 **clientName** | **String**| The name, or partial name, of the client which the list of events will be filtered with | [optional] 
 **smDeviceMac** | **String**| The MAC address of the Systems Manager device which the list of events will be filtered with | [optional] 
 **smDeviceName** | **String**| The name of the Systems Manager device which the list of events will be filtered with | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkEventsEventTypes"></a>
# **getNetworkEventsEventTypes**
> Object getNetworkEventsEventTypes(networkId)

List the event type to human-readable description

List the event type to human-readable description

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkEventsEventTypes(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkFirmwareUpgrades"></a>
# **getNetworkFirmwareUpgrades**
> Object getNetworkFirmwareUpgrades(networkId)

Get current maintenance window for a network

Get current maintenance window for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkFirmwareUpgrades(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkFloorPlan"></a>
# **getNetworkFloorPlan**
> Object getNetworkFloorPlan(networkId, floorPlanId)

Find a floor plan by ID

Find a floor plan by ID

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let floorPlanId = "floorPlanId_example"; // String | 

apiInstance.getNetworkFloorPlan(networkId, floorPlanId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **floorPlanId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkFloorPlans"></a>
# **getNetworkFloorPlans**
> Object getNetworkFloorPlans(networkId)

List the floor plans that belong to your network

List the floor plans that belong to your network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkFloorPlans(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkGroupPolicies"></a>
# **getNetworkGroupPolicies**
> Object getNetworkGroupPolicies(networkId)

List the group policies in a network

List the group policies in a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkGroupPolicies(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkGroupPolicy"></a>
# **getNetworkGroupPolicy**
> Object getNetworkGroupPolicy(networkId, groupPolicyId)

Display a group policy

Display a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let groupPolicyId = "groupPolicyId_example"; // String | 

apiInstance.getNetworkGroupPolicy(networkId, groupPolicyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **groupPolicyId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkMerakiAuthUser"></a>
# **getNetworkMerakiAuthUser**
> Object getNetworkMerakiAuthUser(networkId, merakiAuthUserId)

Return the Meraki Auth splash or RADIUS user

Return the Meraki Auth splash or RADIUS user

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let merakiAuthUserId = "merakiAuthUserId_example"; // String | 

apiInstance.getNetworkMerakiAuthUser(networkId, merakiAuthUserId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **merakiAuthUserId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkMerakiAuthUsers"></a>
# **getNetworkMerakiAuthUsers**
> Object getNetworkMerakiAuthUsers(networkId)

List the splash or RADIUS users configured under Meraki Authentication for a network

List the splash or RADIUS users configured under Meraki Authentication for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkMerakiAuthUsers(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkMqttBroker"></a>
# **getNetworkMqttBroker**
> Object getNetworkMqttBroker(networkId, mqttBrokerId)

Return an MQTT broker

Return an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let mqttBrokerId = "mqttBrokerId_example"; // String | 

apiInstance.getNetworkMqttBroker(networkId, mqttBrokerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **mqttBrokerId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkMqttBrokers"></a>
# **getNetworkMqttBrokers**
> Object getNetworkMqttBrokers(networkId)

List the MQTT brokers for this network

List the MQTT brokers for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkMqttBrokers(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkNetflow"></a>
# **getNetworkNetflow**
> Object getNetworkNetflow(networkId)

Return the NetFlow traffic reporting settings for a network

Return the NetFlow traffic reporting settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkNetflow(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkNetworkHealthChannelUtilization"></a>
# **getNetworkNetworkHealthChannelUtilization**
> Object getNetworkNetworkHealthChannelUtilization(networkId, opts)

Get the channel utilization over each radio for all APs in a network.

Get the channel utilization over each radio for all APs in a network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 100. Default is 10.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkNetworkHealthChannelUtilization(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 100. Default is 10. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkPiiPiiKeys"></a>
# **getNetworkPiiPiiKeys**
> Object getNetworkPiiPiiKeys(networkId, opts)

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \&quot;0\&quot; containing the applicable keys.

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \&quot;0\&quot; containing the applicable keys.  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/piiKeys &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'username': "username_example", // String | The username of a Systems Manager user
  'email': "email_example", // String | The email of a network user account or a Systems Manager device
  'mac': "mac_example", // String | The MAC of a network client device or a Systems Manager device
  'serial': "serial_example", // String | The serial of a Systems Manager device
  'imei': "imei_example", // String | The IMEI of a Systems Manager device
  'bluetoothMac': "bluetoothMac_example" // String | The MAC of a Bluetooth client
};
apiInstance.getNetworkPiiPiiKeys(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **username** | **String**| The username of a Systems Manager user | [optional] 
 **email** | **String**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **String**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **String**| The serial of a Systems Manager device | [optional] 
 **imei** | **String**| The IMEI of a Systems Manager device | [optional] 
 **bluetoothMac** | **String**| The MAC of a Bluetooth client | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkPiiRequest"></a>
# **getNetworkPiiRequest**
> Object getNetworkPiiRequest(networkId, requestId)

Return a PII request

Return a PII request  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests/{requestId} &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let requestId = "requestId_example"; // String | 

apiInstance.getNetworkPiiRequest(networkId, requestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **requestId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkPiiRequests"></a>
# **getNetworkPiiRequests**
> Object getNetworkPiiRequests(networkId)

List the PII requests for this network or organization

List the PII requests for this network or organization  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkPiiRequests(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkPiiSmDevicesForKey"></a>
# **getNetworkPiiSmDevicesForKey**
> Object getNetworkPiiSmDevicesForKey(networkId, opts)

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/smDevicesForKey &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'username': "username_example", // String | The username of a Systems Manager user
  'email': "email_example", // String | The email of a network user account or a Systems Manager device
  'mac': "mac_example", // String | The MAC of a network client device or a Systems Manager device
  'serial': "serial_example", // String | The serial of a Systems Manager device
  'imei': "imei_example", // String | The IMEI of a Systems Manager device
  'bluetoothMac': "bluetoothMac_example" // String | The MAC of a Bluetooth client
};
apiInstance.getNetworkPiiSmDevicesForKey(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **username** | **String**| The username of a Systems Manager user | [optional] 
 **email** | **String**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **String**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **String**| The serial of a Systems Manager device | [optional] 
 **imei** | **String**| The IMEI of a Systems Manager device | [optional] 
 **bluetoothMac** | **String**| The MAC of a Bluetooth client | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkPiiSmOwnersForKey"></a>
# **getNetworkPiiSmOwnersForKey**
> Object getNetworkPiiSmOwnersForKey(networkId, opts)

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/smOwnersForKey &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'username': "username_example", // String | The username of a Systems Manager user
  'email': "email_example", // String | The email of a network user account or a Systems Manager device
  'mac': "mac_example", // String | The MAC of a network client device or a Systems Manager device
  'serial': "serial_example", // String | The serial of a Systems Manager device
  'imei': "imei_example", // String | The IMEI of a Systems Manager device
  'bluetoothMac': "bluetoothMac_example" // String | The MAC of a Bluetooth client
};
apiInstance.getNetworkPiiSmOwnersForKey(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **username** | **String**| The username of a Systems Manager user | [optional] 
 **email** | **String**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **String**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **String**| The serial of a Systems Manager device | [optional] 
 **imei** | **String**| The IMEI of a Systems Manager device | [optional] 
 **bluetoothMac** | **String**| The MAC of a Bluetooth client | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSettings"></a>
# **getNetworkSettings**
> Object getNetworkSettings(networkId)

Return the settings for a network

Return the settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSettings(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSnmp"></a>
# **getNetworkSnmp**
> Object getNetworkSnmp(networkId)

Return the SNMP settings for a network

Return the SNMP settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSnmp(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSplashLoginAttempts"></a>
# **getNetworkSplashLoginAttempts**
> Object getNetworkSplashLoginAttempts(networkId, opts)

List the splash login attempts for a network

List the splash login attempts for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'ssidNumber': 56, // Number | Only return the login attempts for the specified SSID
  'loginIdentifier': "loginIdentifier_example", // String | The username, email, or phone number used during login
  'timespan': 56 // Number | The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months
};
apiInstance.getNetworkSplashLoginAttempts(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **ssidNumber** | **Number**| Only return the login attempts for the specified SSID | [optional] 
 **loginIdentifier** | **String**| The username, email, or phone number used during login | [optional] 
 **timespan** | **Number**| The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSyslogServers"></a>
# **getNetworkSyslogServers**
> Object getNetworkSyslogServers(networkId)

List the syslog servers for a network

List the syslog servers for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSyslogServers(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkTraffic"></a>
# **getNetworkTraffic**
> Object getNetworkTraffic(networkId, opts)

    The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 

    The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 30 days from today.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days.
  'deviceType': "deviceType_example" // String |     Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'.     When using 'combined', for each rule the data will come from the device type with the most usage. 
};
apiInstance.getNetworkTraffic(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 30 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days. | [optional] 
 **deviceType** | **String**|     Filter the data by device type: &#x27;combined&#x27;, &#x27;wireless&#x27;, &#x27;switch&#x27; or &#x27;appliance&#x27;. Defaults to &#x27;combined&#x27;.     When using &#x27;combined&#x27;, for each rule the data will come from the device type with the most usage.  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkTrafficAnalysis"></a>
# **getNetworkTrafficAnalysis**
> Object getNetworkTrafficAnalysis(networkId)

Return the traffic analysis settings for a network

Return the traffic analysis settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkTrafficAnalysis(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkTrafficShapingApplicationCategories"></a>
# **getNetworkTrafficShapingApplicationCategories**
> Object getNetworkTrafficShapingApplicationCategories(networkId)

Returns the application categories for traffic shaping rules.

Returns the application categories for traffic shaping rules.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkTrafficShapingApplicationCategories(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkTrafficShapingDscpTaggingOptions"></a>
# **getNetworkTrafficShapingDscpTaggingOptions**
> Object getNetworkTrafficShapingDscpTaggingOptions(networkId)

Returns the available DSCP tagging options for your traffic shaping rules.

Returns the available DSCP tagging options for your traffic shaping rules.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkTrafficShapingDscpTaggingOptions(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWebhooksHttpServer"></a>
# **getNetworkWebhooksHttpServer**
> Object getNetworkWebhooksHttpServer(networkId, httpServerId)

Return an HTTP server for a network

Return an HTTP server for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let httpServerId = "httpServerId_example"; // String | 

apiInstance.getNetworkWebhooksHttpServer(networkId, httpServerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWebhooksHttpServers"></a>
# **getNetworkWebhooksHttpServers**
> Object getNetworkWebhooksHttpServers(networkId)

List the HTTP servers for a network

List the HTTP servers for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkWebhooksHttpServers(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWebhooksWebhookTest"></a>
# **getNetworkWebhooksWebhookTest**
> Object getNetworkWebhooksWebhookTest(networkId, webhookTestId)

Return the status of a webhook test for a network

Return the status of a webhook test for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let webhookTestId = "webhookTestId_example"; // String | 

apiInstance.getNetworkWebhooksWebhookTest(networkId, webhookTestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **webhookTestId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationNetworks"></a>
# **getOrganizationNetworks**
> Object getOrganizationNetworks(organizationId, opts)

List the networks that the user has privileges on in an organization

List the networks that the user has privileges on in an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'configTemplateId': "configTemplateId_example", // String | An optional parameter that is the ID of a config template. Will return all networks bound to that template.
  'tags': ["tags_example"], // [String] | An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below).
  'tagsFilterType': "tagsFilterType_example", // String | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getOrganizationNetworks(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**| An optional parameter that is the ID of a config template. Will return all networks bound to that template. | [optional] 
 **tags** | [**[String]**](String.md)| An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, &#x27;tagsFilterType&#x27; should also be included (see below). | [optional] 
 **tagsFilterType** | **String**| An optional parameter of value &#x27;withAnyTags&#x27; or &#x27;withAllTags&#x27; to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, &#x27;withAnyTags&#x27; will be selected. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="provisionNetworkClients"></a>
# **provisionNetworkClients**
> Object provisionNetworkClients(bodynetworkId)

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body54(); // Body54 | 
let networkId = "networkId_example"; // String | 

apiInstance.provisionNetworkClients(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body54**](Body54.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeNetworkDevices"></a>
# **removeNetworkDevices**
> removeNetworkDevices(bodynetworkId)

Remove a single device

Remove a single device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body58(); // Body58 | 
let networkId = "networkId_example"; // String | 

apiInstance.removeNetworkDevices(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body58**](Body58.md)|  | 
 **networkId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="splitNetwork"></a>
# **splitNetwork**
> Object splitNetwork(networkId)

Split a combined network into individual networks for each type of device

Split a combined network into individual networks for each type of device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.splitNetwork(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="unbindNetwork"></a>
# **unbindNetwork**
> Object unbindNetwork(networkId)

Unbind a network from a template.

Unbind a network from a template.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 

apiInstance.unbindNetwork(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNetwork"></a>
# **updateNetwork**
> Object updateNetwork(networkId, opts)

Update a network

Update a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body19() // Body19 | 
};
apiInstance.updateNetwork(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body19**](Body19.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkAlertsSettings"></a>
# **updateNetworkAlertsSettings**
> Object updateNetworkAlertsSettings(networkId, opts)

Update the alert configuration for this network

Update the alert configuration for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body20() // Body20 | 
};
apiInstance.updateNetworkAlertsSettings(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body20**](Body20.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkClientPolicy"></a>
# **updateNetworkClientPolicy**
> Object updateNetworkClientPolicy(bodynetworkIdclientId)

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body55(); // Body55 | 
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.updateNetworkClientPolicy(bodynetworkIdclientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body55**](Body55.md)|  | 
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkClientSplashAuthorizationStatus"></a>
# **updateNetworkClientSplashAuthorizationStatus**
> Object updateNetworkClientSplashAuthorizationStatus(bodynetworkIdclientId)

Update a client&#x27;s splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Update a client&#x27;s splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body56(); // Body56 | 
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.updateNetworkClientSplashAuthorizationStatus(bodynetworkIdclientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body56**](Body56.md)|  | 
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkFirmwareUpgrades"></a>
# **updateNetworkFirmwareUpgrades**
> Object updateNetworkFirmwareUpgrades(networkId, opts)

Update current maintenance window for a network

Update current maintenance window for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body59() // Body59 | 
};
apiInstance.updateNetworkFirmwareUpgrades(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body59**](Body59.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkFloorPlan"></a>
# **updateNetworkFloorPlan**
> Object updateNetworkFloorPlan(networkIdfloorPlanId, opts)

Update a floor plan&#x27;s geolocation and other meta data

Update a floor plan&#x27;s geolocation and other meta data

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let floorPlanId = "floorPlanId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body61() // Body61 | 
};
apiInstance.updateNetworkFloorPlan(networkIdfloorPlanId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **floorPlanId** | **String**|  | 
 **body** | [**Body61**](Body61.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkGroupPolicy"></a>
# **updateNetworkGroupPolicy**
> Object updateNetworkGroupPolicy(networkIdgroupPolicyId, opts)

Update a group policy

Update a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let groupPolicyId = "groupPolicyId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body63() // Body63 | 
};
apiInstance.updateNetworkGroupPolicy(networkIdgroupPolicyId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **groupPolicyId** | **String**|  | 
 **body** | [**Body63**](Body63.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkMerakiAuthUser"></a>
# **updateNetworkMerakiAuthUser**
> Object updateNetworkMerakiAuthUser(networkIdmerakiAuthUserId, opts)

Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)

Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let merakiAuthUserId = "merakiAuthUserId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body65() // Body65 | 
};
apiInstance.updateNetworkMerakiAuthUser(networkIdmerakiAuthUserId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **merakiAuthUserId** | **String**|  | 
 **body** | [**Body65**](Body65.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkMqttBroker"></a>
# **updateNetworkMqttBroker**
> Object updateNetworkMqttBroker(networkIdmqttBrokerId, opts)

Update an MQTT broker

Update an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let mqttBrokerId = "mqttBrokerId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body67() // Body67 | 
};
apiInstance.updateNetworkMqttBroker(networkIdmqttBrokerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **mqttBrokerId** | **String**|  | 
 **body** | [**Body67**](Body67.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkNetflow"></a>
# **updateNetworkNetflow**
> Object updateNetworkNetflow(networkId, opts)

Update the NetFlow traffic reporting settings for a network

Update the NetFlow traffic reporting settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body68() // Body68 | 
};
apiInstance.updateNetworkNetflow(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body68**](Body68.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSettings"></a>
# **updateNetworkSettings**
> Object updateNetworkSettings(networkId, opts)

Update the settings for a network

Update the settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body70() // Body70 | 
};
apiInstance.updateNetworkSettings(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body70**](Body70.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSnmp"></a>
# **updateNetworkSnmp**
> Object updateNetworkSnmp(networkId, opts)

Update the SNMP settings for a network

Update the SNMP settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body76() // Body76 | 
};
apiInstance.updateNetworkSnmp(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body76**](Body76.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSyslogServers"></a>
# **updateNetworkSyslogServers**
> Object updateNetworkSyslogServers(bodynetworkId)

Update the syslog servers for a network

Update the syslog servers for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let body = new MerakiDashboardApi.Body103(); // Body103 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkSyslogServers(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body103**](Body103.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkTrafficAnalysis"></a>
# **updateNetworkTrafficAnalysis**
> Object updateNetworkTrafficAnalysis(networkId, opts)

Update the traffic analysis settings for a network

Update the traffic analysis settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body104() // Body104 | 
};
apiInstance.updateNetworkTrafficAnalysis(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body104**](Body104.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWebhooksHttpServer"></a>
# **updateNetworkWebhooksHttpServer**
> Object updateNetworkWebhooksHttpServer(networkIdhttpServerId, opts)

Update an HTTP server

Update an HTTP server

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.NetworksApi();
let networkId = "networkId_example"; // String | 
let httpServerId = "httpServerId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body106() // Body106 | 
};
apiInstance.updateNetworkWebhooksHttpServer(networkIdhttpServerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 
 **body** | [**Body106**](Body106.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

