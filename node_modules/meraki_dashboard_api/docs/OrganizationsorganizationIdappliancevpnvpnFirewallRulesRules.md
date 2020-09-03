# MerakiDashboardApi.OrganizationsorganizationIdappliancevpnvpnFirewallRulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Description of the rule (optional) | [optional] 
**policy** | **String** | &#x27;allow&#x27; or &#x27;deny&#x27; traffic specified by this rule | 
**protocol** | **String** | The type of protocol (must be &#x27;tcp&#x27;, &#x27;udp&#x27;, &#x27;icmp&#x27; or &#x27;any&#x27;) | 
**srcPort** | **String** | Comma-separated list of source port(s) (integer in the range 1-65535), or &#x27;any&#x27; | [optional] 
**srcCidr** | **String** | Comma-separated list of source IP address(es) (in IP or CIDR notation), or &#x27;any&#x27; (FQDN not supported) | 
**destPort** | **String** | Comma-separated list of destination port(s) (integer in the range 1-65535), or &#x27;any&#x27; | [optional] 
**destCidr** | **String** | Comma-separated list of destination IP address(es) (in IP or CIDR notation) or &#x27;any&#x27; (FQDN not supported) | 
**syslogEnabled** | **Boolean** | Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional) | [optional] 

<a name="PolicyEnum"></a>
## Enum: PolicyEnum

* `allow` (value: `"allow"`)
* `deny` (value: `"deny"`)


<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum

* `tcp` (value: `"tcp"`)
* `udp` (value: `"udp"`)
* `icmp` (value: `"icmp"`)
* `any` (value: `"any"`)

