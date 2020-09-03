# MerakiDashboardApi.UpdateNetworkSwitchDhcpServerPolicy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultPolicy** | **String** | 'allow' or 'block' new DHCP servers. Default value is 'allow'. | [optional] 
**allowedServers** | **[String]** | List the MAC addresses of DHCP servers to permit on the network. Applicable only if defaultPolicy is set to block. An empty array will clear the entries. | [optional] 
**blockedServers** | **[String]** | List the MAC addresses of DHCP servers to block on the network. Applicable only if defaultPolicy is set to allow. An empty array will clear the entries. | [optional] 


<a name="DefaultPolicyEnum"></a>
## Enum: DefaultPolicyEnum


* `allow` (value: `"allow"`)

* `block` (value: `"block"`)




