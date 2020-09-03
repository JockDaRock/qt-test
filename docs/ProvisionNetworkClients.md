# MerakiDashboardApi.ProvisionNetworkClients

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clients** | [**[NetworksnetworkIdclientsprovisionClients]**](NetworksnetworkIdclientsprovisionClients.md) | The array of clients to provision | 
**devicePolicy** | **String** | The policy to apply to the specified client. Can be 'Group policy', 'Allowed', 'Blocked', 'Per connection' or 'Normal'. Required. | 
**groupPolicyId** | **String** | The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to \"Group policy\". Otherwise this is ignored. | [optional] 
**policiesBySecurityAppliance** | [**NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance**](NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance.md) |  | [optional] 
**policiesBySsid** | [**NetworksnetworkIdclientsprovisionPoliciesBySsid**](NetworksnetworkIdclientsprovisionPoliciesBySsid.md) |  | [optional] 


<a name="DevicePolicyEnum"></a>
## Enum: DevicePolicyEnum


* `groupPolicy` (value: `"Group policy"`)

* `allowed` (value: `"Allowed"`)

* `blocked` (value: `"Blocked"`)

* `perConnection` (value: `"Per connection"`)

* `normal` (value: `"Normal"`)




