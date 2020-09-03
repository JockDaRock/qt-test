# MerakiDashboardApi.NetworksnetworkIdswitchaccessControlListsRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Description of the rule (optional). | [optional] 
**policy** | **String** | &#x27;allow&#x27; or &#x27;deny&#x27; traffic specified by this rule. | 
**ipVersion** | **String** | IP address version (must be &#x27;any&#x27;, &#x27;ipv4&#x27; or &#x27;ipv6&#x27;). Applicable only if network supports IPv6. Default value is &#x27;ipv4&#x27;. | [optional] 
**protocol** | **String** | The type of protocol (must be &#x27;tcp&#x27;, &#x27;udp&#x27;, or &#x27;any&#x27;). | 
**srcCidr** | **String** | Source IP address (in IP or CIDR notation) or &#x27;any&#x27;. | 
**srcPort** | **String** | Source port. Must be in the range  of 1-65535 or &#x27;any&#x27;. Default is &#x27;any&#x27;. | [optional] 
**dstCidr** | **String** | Destination IP address (in IP or CIDR notation) or &#x27;any&#x27;. | 
**dstPort** | **String** | Destination port. Must be in the range of 1-65535 or &#x27;any&#x27;. Default is &#x27;any&#x27;. | [optional] 
**vlan** | **String** | Incoming traffic VLAN. Must be in the range of 1-4095 or &#x27;any&#x27;. Default is &#x27;any&#x27;. | [optional] 

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

