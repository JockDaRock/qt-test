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
> Object createNetworkWirelessRfProfile(networkId, createNetworkWirelessRfProfile)

Creates new RF profile for this network

Creates new RF profile for this network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RfProfilesApi();

var networkId = "networkId_example"; // String | 

var createNetworkWirelessRfProfile = new MerakiDashboardApi.CreateNetworkWirelessRfProfile(); // CreateNetworkWirelessRfProfile | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkWirelessRfProfile(networkId, createNetworkWirelessRfProfile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkWirelessRfProfile** | [**CreateNetworkWirelessRfProfile**](CreateNetworkWirelessRfProfile.md)|  | 

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
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RfProfilesApi();

var networkId = "networkId_example"; // String | 

var rfProfileId = "rfProfileId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkWirelessRfProfile(networkId, rfProfileId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessRfProfile"></a>
# **getNetworkWirelessRfProfile**
> Object getNetworkWirelessRfProfile(networkId, rfProfileId)

Return a RF profile

Return a RF profile

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RfProfilesApi();

var networkId = "networkId_example"; // String | 

var rfProfileId = "rfProfileId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessRfProfile(networkId, rfProfileId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessRfProfiles"></a>
# **getNetworkWirelessRfProfiles**
> Object getNetworkWirelessRfProfiles(networkId, opts)

List the non-basic RF profiles for this network

List the non-basic RF profiles for this network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RfProfilesApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'includeTemplateProfiles': true // Boolean |     If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template     should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessRfProfiles(networkId, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessRfProfile"></a>
# **updateNetworkWirelessRfProfile**
> Object updateNetworkWirelessRfProfile(networkId, rfProfileId, opts)

Updates specified RF profile for this network

Updates specified RF profile for this network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RfProfilesApi();

var networkId = "networkId_example"; // String | 

var rfProfileId = "rfProfileId_example"; // String | 

var opts = { 
  'updateNetworkWirelessRfProfile': new MerakiDashboardApi.UpdateNetworkWirelessRfProfile() // UpdateNetworkWirelessRfProfile | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkWirelessRfProfile(networkId, rfProfileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **rfProfileId** | **String**|  | 
 **updateNetworkWirelessRfProfile** | [**UpdateNetworkWirelessRfProfile**](UpdateNetworkWirelessRfProfile.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

