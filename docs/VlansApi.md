# MerakiDashboardApi.VlansApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkApplianceVlan**](VlansApi.md#createNetworkApplianceVlan) | **POST** /networks/{networkId}/appliance/vlans | Add a VLAN
[**deleteNetworkApplianceVlan**](VlansApi.md#deleteNetworkApplianceVlan) | **DELETE** /networks/{networkId}/appliance/vlans/{vlanId} | Delete a VLAN from a network
[**getNetworkApplianceVlan**](VlansApi.md#getNetworkApplianceVlan) | **GET** /networks/{networkId}/appliance/vlans/{vlanId} | Return a VLAN
[**getNetworkApplianceVlans**](VlansApi.md#getNetworkApplianceVlans) | **GET** /networks/{networkId}/appliance/vlans | List the VLANs for an MX network
[**getNetworkApplianceVlansSettings**](VlansApi.md#getNetworkApplianceVlansSettings) | **GET** /networks/{networkId}/appliance/vlans/settings | Returns the enabled status of VLANs for the network
[**updateNetworkApplianceVlan**](VlansApi.md#updateNetworkApplianceVlan) | **PUT** /networks/{networkId}/appliance/vlans/{vlanId} | Update a VLAN
[**updateNetworkApplianceVlansSettings**](VlansApi.md#updateNetworkApplianceVlansSettings) | **PUT** /networks/{networkId}/appliance/vlans/settings | Enable/Disable VLANs for the given network


<a name="createNetworkApplianceVlan"></a>
# **createNetworkApplianceVlan**
> Object createNetworkApplianceVlan(networkId, createNetworkApplianceVlan)

Add a VLAN

Add a VLAN

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.VlansApi();

var networkId = "networkId_example"; // String | 

var createNetworkApplianceVlan = new MerakiDashboardApi.CreateNetworkApplianceVlan(); // CreateNetworkApplianceVlan | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkApplianceVlan(networkId, createNetworkApplianceVlan, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkApplianceVlan** | [**CreateNetworkApplianceVlan**](CreateNetworkApplianceVlan.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkApplianceVlan"></a>
# **deleteNetworkApplianceVlan**
> deleteNetworkApplianceVlan(networkId, vlanId)

Delete a VLAN from a network

Delete a VLAN from a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.VlansApi();

var networkId = "networkId_example"; // String | 

var vlanId = "vlanId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkApplianceVlan(networkId, vlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **vlanId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkApplianceVlan"></a>
# **getNetworkApplianceVlan**
> Object getNetworkApplianceVlan(networkId, vlanId)

Return a VLAN

Return a VLAN

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.VlansApi();

var networkId = "networkId_example"; // String | 

var vlanId = "vlanId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceVlan(networkId, vlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **vlanId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkApplianceVlans"></a>
# **getNetworkApplianceVlans**
> Object getNetworkApplianceVlans(networkId)

List the VLANs for an MX network

List the VLANs for an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.VlansApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceVlans(networkId, callback);
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

<a name="getNetworkApplianceVlansSettings"></a>
# **getNetworkApplianceVlansSettings**
> Object getNetworkApplianceVlansSettings(networkId)

Returns the enabled status of VLANs for the network

Returns the enabled status of VLANs for the network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.VlansApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceVlansSettings(networkId, callback);
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

<a name="updateNetworkApplianceVlan"></a>
# **updateNetworkApplianceVlan**
> Object updateNetworkApplianceVlan(networkId, vlanId, opts)

Update a VLAN

Update a VLAN

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.VlansApi();

var networkId = "networkId_example"; // String | 

var vlanId = "vlanId_example"; // String | 

var opts = { 
  'updateNetworkApplianceVlan': new MerakiDashboardApi.UpdateNetworkApplianceVlan() // UpdateNetworkApplianceVlan | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkApplianceVlan(networkId, vlanId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **vlanId** | **String**|  | 
 **updateNetworkApplianceVlan** | [**UpdateNetworkApplianceVlan**](UpdateNetworkApplianceVlan.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceVlansSettings"></a>
# **updateNetworkApplianceVlansSettings**
> Object updateNetworkApplianceVlansSettings(networkId, opts)

Enable/Disable VLANs for the given network

Enable/Disable VLANs for the given network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.VlansApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkApplianceVlansSettings': new MerakiDashboardApi.UpdateNetworkApplianceVlansSettings() // UpdateNetworkApplianceVlansSettings | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkApplianceVlansSettings(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkApplianceVlansSettings** | [**UpdateNetworkApplianceVlansSettings**](UpdateNetworkApplianceVlansSettings.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

