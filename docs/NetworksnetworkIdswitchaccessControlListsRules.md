# MerakiDashboardApi.NetworksnetworkIdswitchaccessControlListsRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Description of the rule (optional). | [optional] 
**policy** | **String** | 'allow' or 'deny' traffic specified by this rule. | 
**ipVersion** | **String** | IP address version (must be 'any', 'ipv4' or 'ipv6'). Applicable only if network supports IPv6. Default value is 'ipv4'. | [optional] 
**protocol** | **String** | The type of protocol (must be 'tcp', 'udp', or 'any'). | 
**srcCidr** | **String** | Source IP address (in IP or CIDR notation) or 'any'. | 
**srcPort** | **String** | Source port. Must be in the range  of 1-65535 or 'any'. Default is 'any'. | [optional] 
**dstCidr** | **String** | Destination IP address (in IP or CIDR notation) or 'any'. | 
**dstPort** | **String** | Destination port. Must be in the range of 1-65535 or 'any'. Default is 'any'. | [optional] 
**vlan** | **String** | Incoming traffic VLAN. Must be in the range of 1-4095 or 'any'. Default is 'any'. | [optional] 


<a name="PolicyEnum"></a>
## Enum: PolicyEnum


* `allow` (value: `"allow"`)

* `deny` (value: `"deny"`)




<a name="IpVersionEnum"></a>
## Enum: IpVersionEnum


* `any` (value: `"any"`)

* `ipv4` (value: `"ipv4"`)

* `ipv6` (value: `"ipv6"`)




<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `tcp` (value: `"tcp"`)

* `udp` (value: `"udp"`)

* `any` (value: `"any"`)




