# MerakiDashboardApi.Body54

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clients** | [**[NetworksnetworkIdclientsprovisionClients]**](NetworksnetworkIdclientsprovisionClients.md) | The array of clients to provision | 
**devicePolicy** | **String** | The policy to apply to the specified client. Can be &#x27;Group policy&#x27;, &#x27;Allowed&#x27;, &#x27;Blocked&#x27;, &#x27;Per connection&#x27; or &#x27;Normal&#x27;. Required. | 
**groupPolicyId** | **String** | The ID of the desired group policy to apply to the client. Required if &#x27;devicePolicy&#x27; is set to \&quot;Group policy\&quot;. Otherwise this is ignored. | [optional] 
**policiesBySecurityAppliance** | [**NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance**](NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance.md) |  | [optional] 
**policiesBySsid** | [**NetworksnetworkIdclientsprovisionPoliciesBySsid**](NetworksnetworkIdclientsprovisionPoliciesBySsid.md) |  | [optional] 

<a name="DevicePolicyEnum"></a>
## Enum: DevicePolicyEnum

* `Group policy` (value: `"Group policy"`)
* `Allowed` (value: `"Allowed"`)
* `Blocked` (value: `"Blocked"`)
* `Per connection` (value: `"Per connection"`)
* `Normal` (value: `"Normal"`)

