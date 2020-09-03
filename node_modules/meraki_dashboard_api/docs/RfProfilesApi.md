# MerakiDashboardApi.RfProfilesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkWirelessRfProfile**](RfProfilesApi.md#createNetworkWirelessRfProfile) | **POST** /networks/{networkId}/wireless/rfProfiles | Creates new RF profile for this network
[**deleteNetworkWirelessRfProfile**](RfProfilesApi.md#deleteNetworkWirelessRfProfile) | **DELETE** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Delete a RF Profile
[**getNetworkWirelessRfProfile**](RfProfilesApi.md#getNetworkWirelessRfProfile) | **GET** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Return a RF profile
[**getNetworkWirelessRfProfiles**](RfProfilesApi.md#getNetworkWirelessRfProfiles) | **GET** /networks/{networkId}/wireless/rfProfiles | List the non-basic RF profiles for this network
[**updateNetworkWirelessRfProfile**](RfProfilesApi.md#updateNetworkWirelessRfProfile) | **PUT** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Updates specified RF profile for this network

<a name="createNetworkWirelessRfProfile"></a>
# **createNetworkWirelessRfProfile**
> Object createNetworkWirelessRfProfile(bodynetworkId)

Creates new RF profile for this network

Creates new RF profile for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.RfProfilesApi();
let body = new MerakiDashboardApi.Body110(); // Body110 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkWirelessRfProfile(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body110**](Body110.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkWirelessRfProfile"></a>
# **deleteNetworkWirelessRfProfile**
> deleteNetworkWirelessRfProfile(networkId, rfProfileId)

Delete a RF Profile

Delete a RF Profile

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.RfProfilesApi();
let networkId = "networkId_example"; // String | 
let rfProfileId = "rfProfileId_example"; // String | 

apiInstance.deleteNetworkWirelessRfProfile(networkId, rfProfileId, (error, data, response) => {
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
 **rfProfileId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetworkWirelessRfProfile"></a>
# **getNetworkWirelessRfProfile**
> Object getNetworkWirelessRfProfile(networkId, rfProfileId)

Return a RF profile

Return a RF profile

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.RfProfilesApi();
let networkId = "networkId_example"; // String | 
let rfProfileId = "rfProfileId_example"; // String | 

apiInstance.getNetworkWirelessRfProfile(networkId, rfProfileId, (error, data, response) => {
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
 **rfProfileId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessRfProfiles"></a>
# **getNetworkWirelessRfProfiles**
> Object getNetworkWirelessRfProfiles(networkId, opts)

List the non-basic RF profiles for this network

List the non-basic RF profiles for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.RfProfilesApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'includeTemplateProfiles': true // Boolean |     If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template     should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false. 
};
apiInstance.getNetworkWirelessRfProfiles(networkId, opts, (error, data, response) => {
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
 **includeTemplateProfiles** | **Boolean**|     If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template     should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false.  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNetworkWirelessRfProfile"></a>
# **updateNetworkWirelessRfProfile**
> Object updateNetworkWirelessRfProfile(networkIdrfProfileId, opts)

Updates specified RF profile for this network

Updates specified RF profile for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.RfProfilesApi();
let networkId = "networkId_example"; // String | 
let rfProfileId = "rfProfileId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body111() // Body111 | 
};
apiInstance.updateNetworkWirelessRfProfile(networkIdrfProfileId, opts, (error, data, response) => {
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
 **rfProfileId** | **String**|  | 
 **body** | [**Body111**](Body111.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

