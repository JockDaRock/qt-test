# MerakiDashboardApi.OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersPeers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the VPN peer | 
**publicIp** | **String** | The public IP of the VPN peer | 
**remoteId** | **String** | [optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN. | [optional] 
**privateSubnets** | **[String]** | The list of the private subnets of the VPN peer | 
**ipsecPolicies** | [**OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies**](OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies.md) |  | [optional] 
**ipsecPoliciesPreset** | **String** | One of the following available presets: 'default', 'aws', 'azure'. If this is provided, the 'ipsecPolicies' parameter is ignored. | [optional] 
**secret** | **String** | The shared secret with the VPN peer | 
**ikeVersion** | **String** | [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted. | [optional] [default to '1']
**networkTags** | **[String]** | A list of network tags that will connect with this peer. Use ['all'] for all networks. Use ['none'] for no networks. If not included, the default is ['all']. | [optional] 


<a name="IkeVersionEnum"></a>
## Enum: IkeVersionEnum


* `_1` (value: `"1"`)

* `_2` (value: `"2"`)




