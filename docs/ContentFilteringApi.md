# MerakiDashboardApi.ContentFilteringApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceContentFiltering**](ContentFilteringApi.md#getNetworkApplianceContentFiltering) | **GET** /networks/{networkId}/appliance/contentFiltering | Return the content filtering settings for an MX network
[**getNetworkApplianceContentFilteringCategories**](ContentFilteringApi.md#getNetworkApplianceContentFilteringCategories) | **GET** /networks/{networkId}/appliance/contentFiltering/categories | List all available content filtering categories for an MX network
[**updateNetworkApplianceContentFiltering**](ContentFilteringApi.md#updateNetworkApplianceContentFiltering) | **PUT** /networks/{networkId}/appliance/contentFiltering | Update the content filtering settings for an MX network


<a name="getNetworkApplianceContentFiltering"></a>
# **getNetworkApplianceContentFiltering**
> Object getNetworkApplianceContentFiltering(networkId)

Return the content filtering settings for an MX network

Return the content filtering settings for an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ContentFilteringApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceContentFiltering(networkId, callback);
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

<a name="getNetworkApplianceContentFilteringCategories"></a>
# **getNetworkApplianceContentFilteringCategories**
> Object getNetworkApplianceContentFilteringCategories(networkId)

List all available content filtering categories for an MX network

List all available content filtering categories for an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ContentFilteringApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceContentFilteringCategories(networkId, callback);
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

<a name="updateNetworkApplianceContentFiltering"></a>
# **updateNetworkApplianceContentFiltering**
> Object updateNetworkApplianceContentFiltering(networkId, opts)

Update the content filtering settings for an MX network

Update the content filtering settings for an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ContentFilteringApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkApplianceContentFiltering': new MerakiDashboardApi.UpdateNetworkApplianceContentFiltering() // UpdateNetworkApplianceContentFiltering | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkApplianceContentFiltering(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkApplianceContentFiltering** | [**UpdateNetworkApplianceContentFiltering**](UpdateNetworkApplianceContentFiltering.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

