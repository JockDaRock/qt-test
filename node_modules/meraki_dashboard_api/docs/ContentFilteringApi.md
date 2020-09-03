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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ContentFilteringApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceContentFiltering(networkId, (error, data, response) => {
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

<a name="getNetworkApplianceContentFilteringCategories"></a>
# **getNetworkApplianceContentFilteringCategories**
> Object getNetworkApplianceContentFilteringCategories(networkId)

List all available content filtering categories for an MX network

List all available content filtering categories for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ContentFilteringApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceContentFilteringCategories(networkId, (error, data, response) => {
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

<a name="updateNetworkApplianceContentFiltering"></a>
# **updateNetworkApplianceContentFiltering**
> Object updateNetworkApplianceContentFiltering(networkId, opts)

Update the content filtering settings for an MX network

Update the content filtering settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ContentFilteringApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body22() // Body22 | 
};
apiInstance.updateNetworkApplianceContentFiltering(networkId, opts, (error, data, response) => {
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
 **body** | [**Body22**](Body22.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

