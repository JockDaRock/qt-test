# MerakiDashboardApi.RulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceTrafficShapingRules**](RulesApi.md#getNetworkApplianceTrafficShapingRules) | **GET** /networks/{networkId}/appliance/trafficShaping/rules | Display the traffic shaping settings rules for an MX network
[**getNetworkWirelessSsidTrafficShapingRules**](RulesApi.md#getNetworkWirelessSsidTrafficShapingRules) | **GET** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Display the traffic shaping settings for a SSID on an MR network
[**updateNetworkApplianceTrafficShapingRules**](RulesApi.md#updateNetworkApplianceTrafficShapingRules) | **PUT** /networks/{networkId}/appliance/trafficShaping/rules | Update the traffic shaping settings rules for an MX network
[**updateNetworkWirelessSsidTrafficShapingRules**](RulesApi.md#updateNetworkWirelessSsidTrafficShapingRules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Update the traffic shaping settings for an SSID on an MR network


<a name="getNetworkApplianceTrafficShapingRules"></a>
# **getNetworkApplianceTrafficShapingRules**
> Object getNetworkApplianceTrafficShapingRules(networkId)

Display the traffic shaping settings rules for an MX network

Display the traffic shaping settings rules for an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RulesApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceTrafficShapingRules(networkId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessSsidTrafficShapingRules"></a>
# **getNetworkWirelessSsidTrafficShapingRules**
> Object getNetworkWirelessSsidTrafficShapingRules(networkId, _number)

Display the traffic shaping settings for a SSID on an MR network

Display the traffic shaping settings for a SSID on an MR network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RulesApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessSsidTrafficShapingRules(networkId, _number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceTrafficShapingRules"></a>
# **updateNetworkApplianceTrafficShapingRules**
> Object updateNetworkApplianceTrafficShapingRules(networkId, opts)

Update the traffic shaping settings rules for an MX network

Update the traffic shaping settings rules for an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RulesApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkApplianceTrafficShapingRules': new MerakiDashboardApi.UpdateNetworkApplianceTrafficShapingRules() // UpdateNetworkApplianceTrafficShapingRules | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkApplianceTrafficShapingRules(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkApplianceTrafficShapingRules** | [**UpdateNetworkApplianceTrafficShapingRules**](UpdateNetworkApplianceTrafficShapingRules.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsidTrafficShapingRules"></a>
# **updateNetworkWirelessSsidTrafficShapingRules**
> Object updateNetworkWirelessSsidTrafficShapingRules(networkId, _number, opts)

Update the traffic shaping settings for an SSID on an MR network

Update the traffic shaping settings for an SSID on an MR network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RulesApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 

var opts = { 
  'updateNetworkWirelessSsidTrafficShapingRules': new MerakiDashboardApi.UpdateNetworkWirelessSsidTrafficShapingRules() // UpdateNetworkWirelessSsidTrafficShapingRules | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkWirelessSsidTrafficShapingRules(networkId, _number, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **updateNetworkWirelessSsidTrafficShapingRules** | [**UpdateNetworkWirelessSsidTrafficShapingRules**](UpdateNetworkWirelessSsidTrafficShapingRules.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

