# MerakiDashboardApi.OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersPeers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the VPN peer | 
**publicIp** | **String** | The public IP of the VPN peer | 
**remoteId** | **String** | [optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN. | [optional] 
**privateSubnets** | **[String]** | The list of the private subnets of the VPN peer | 
**ipsecPolicies** | [**OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies**](OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies.md) |  | [optional] 
**ipsecPoliciesPreset** | **String** | One of the following available presets: &#x27;default&#x27;, &#x27;aws&#x27;, &#x27;azure&#x27;. If this is provided, the &#x27;ipsecPolicies&#x27; parameter is ignored. | [optional] 
**secret** | **String** | The shared secret with the VPN peer | 
**ikeVersion** | **String** | [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to &#x27;1&#x27; when omitted. | [optional] [default to &#x27;1&#x27;]
**networkTags** | **[String]** | A list of network tags that will connect with this peer. Use [&#x27;all&#x27;] for all networks. Use [&#x27;none&#x27;] for no networks. If not included, the default is [&#x27;all&#x27;]. | [optional] 

<a name="IkeVersionEnum"></a>
## Enum: IkeVersionEnum

* `1` (value: `"1"`)
* `2` (value: `"2"`)

